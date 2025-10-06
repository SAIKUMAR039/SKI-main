import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X } from 'lucide-react';
import { supabase, DesignWork } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [type, setType] = useState<'image' | 'video'>('image');
  const [category, setCategory] = useState('Portrait Design');
  const [file, setFile] = useState<File | null>(null);
  const [height, setHeight] = useState('h-64');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [recentUploads, setRecentUploads] = useState<DesignWork[]>([]);
  // Selected item for preview / edit
  const [selectedItem, setSelectedItem] = useState<DesignWork | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editCategory, setEditCategory] = useState('');
  const [editHeight, setEditHeight] = useState('h-64');
  const [editFeatured, setEditFeatured] = useState(false);
  const [replaceFile, setReplaceFile] = useState<File | null>(null);
  const [operationLoading, setOperationLoading] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [featured, setFeatured] = useState(false);

  // Generate a thumbnail (JPEG) from the first frame of a video File
  const generateVideoThumbnail = (videoFile: File): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      try {
        const url = URL.createObjectURL(videoFile);
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = url;
       
        video.playsInline = true as unknown as boolean;

        const onLoaded = async () => {
          try {
            // Seek to ~1.5s (or slightly earlier if video is shorter)
            const duration = Number.isFinite(video.duration) ? video.duration : 0;
            const desired = 1.5;
            const epsilon = 0.05;
            const seekTarget = duration > 0 ? Math.min(desired, Math.max(0, duration - epsilon)) : desired;
            const seekHandler = async () => {
              const width = video.videoWidth || 640;
              const height = video.videoHeight || 360;
              const canvas = document.createElement('canvas');
              canvas.width = width;
              canvas.height = height;
              const ctx = canvas.getContext('2d');
              if (!ctx) throw new Error('Failed to get canvas context');
              ctx.drawImage(video, 0, 0, width, height);
              canvas.toBlob((blob) => {
                URL.revokeObjectURL(url);
                if (!blob) {
                  reject(new Error('Failed to create thumbnail blob'));
                } else {
                  resolve(blob);
                }
              }, 'image/jpeg', 0.85);
            };

            video.removeEventListener('loadeddata', onLoaded);
            video.addEventListener('seeked', seekHandler, { once: true });
            video.currentTime = seekTarget;
          } catch (err) {
            URL.revokeObjectURL(url);
            reject(err);
          }
        };

        video.addEventListener('loadeddata', onLoaded, { once: true });
        video.addEventListener('error', () => {
          URL.revokeObjectURL(url);
          reject(new Error('Failed to load video for thumbnail'));
        }, { once: true });
      } catch (e) {
        reject(e);
      }
    });
  };

  // Supabase email/password authentication is used for admin login

  // Categories
  const categories = [
    'Portrait Design',
    'Poster Design',
    'Logo Design',
    'Food Photography',
    'Product Design',
    'Social Media Design'
  ];

  // Heights
  const heights = [
    { value: 'h-48', label: 'Small (h-48)' },
    { value: 'h-64', label: 'Medium (h-64)' },
    { value: 'h-80', label: 'Large (h-80)' },
    { value: 'h-96', label: 'Extra Large (h-96)' }
  ];

  useEffect(() => {
    // Initial session check
    const init = async () => {
      const { data } = await supabase.auth.getSession();
      const hasSession = !!data.session;
      setIsAuthenticated(hasSession);
      if (hasSession) {
        fetchRecentUploads();
      }
    };
    init();

    // Listen for auth state changes
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      const authed = !!session;
      setIsAuthenticated(authed);
      if (authed) {
        fetchRecentUploads();
      }
    });

    return () => {
      sub.subscription.unsubscribe();
    };
  }, []);

  const fetchRecentUploads = async () => {
    try {
      const { data, error } = await supabase
        .from('design_works')
        .select('*')
        .order('created_at', { ascending: false })
        

      if (error) throw error;
      setRecentUploads((data as DesignWork[]) || []);
    } catch (error) {
      console.error('Error fetching recent uploads:', error);
    }
  };

  const openPreview = (item: DesignWork) => {
    setSelectedItem(item);
    setEditTitle(item.title || '');
    setEditCategory(item.category || categories[0]);
    setEditHeight(item.height || 'h-64');
    setEditFeatured(!!item.featured);
    setReplaceFile(null);
  };

  const parseStoragePath = (publicUrl: string) => {
    try {
      const url = new URL(publicUrl);
      // Find path after /storage/v1/object/public/design_works/ or after /design_works/
      const marker = '/design_works/';
      const idx = url.pathname.indexOf(marker);
      if (idx >= 0) return url.pathname.substring(idx + marker.length);
      // fallback: use last two segments
      const parts = url.pathname.split('/');
      return parts.slice(-2).join('/');
    } catch {
      return '';
    }
  };

  const handleReplaceFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) setReplaceFile(e.target.files[0]);
  };

  const handleSaveChanges = async () => {
    if (!selectedItem) return;
    try {
      setOperationLoading(true);

      const updatedFields: Partial<DesignWork> = {
        title: editTitle,
        category: editCategory,
        height: editHeight,
        featured: editFeatured
      };

      // If replacing file, upload new file and update src/thumbnail
      if (replaceFile) {
        const fileExt = replaceFile.name.split('.').pop();
        const safeExt = fileExt ? fileExt.toLowerCase() : 'bin';
        const fileName = `${(globalThis.crypto?.randomUUID?.() || Math.random().toString(36).slice(2))}.${safeExt}`;
        const filePath = `${selectedItem.type === 'image' ? 'images' : 'videos'}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('design_works')
          .upload(filePath, replaceFile, { upsert: false, contentType: replaceFile.type || 'application/octet-stream' });
        if (uploadError) throw uploadError;

        const { data: urlData } = supabase.storage.from('design_works').getPublicUrl(filePath);
        const publicUrl = urlData.publicUrl;

        let thumbnailUrl = publicUrl;
        // If replacing a video and admin uploaded a video, attempt thumbnail generation client-side
        if (selectedItem.type === 'video') {
          try {
            // attempt to create thumbnail blob from video file (reusing existing function)
            const thumbBlob = await generateVideoThumbnail(replaceFile);
            const thumbName = `${(globalThis.crypto?.randomUUID?.() || Math.random().toString(36).slice(2))}.jpg`;
            const thumbPath = `thumbnails/${thumbName}`;
            const { error: thumbUploadError } = await supabase.storage
              .from('design_works')
              .upload(thumbPath, thumbBlob, { contentType: 'image/jpeg' });
            if (!thumbUploadError) {
              const { data: thumbUrlData } = supabase.storage.from('design_works').getPublicUrl(thumbPath);
              thumbnailUrl = thumbUrlData.publicUrl;
            }
          } catch (thumbErr) {
            console.warn('Thumbnail creation failed for replacement video:', thumbErr);
          }
        }

        updatedFields.src = publicUrl;
        updatedFields.thumbnail = thumbnailUrl;

        // delete old file from storage (best-effort)
        try {
          const oldPath = parseStoragePath(selectedItem.src || '');
          if (oldPath) await supabase.storage.from('design_works').remove([oldPath]);
        } catch (e) { console.warn('Failed to remove old storage file:', e); }
      }

      const { error: updateError } = await supabase
        .from('design_works')
        .update(updatedFields)
        .eq('id', selectedItem.id);

      if (updateError) throw updateError;
      await fetchRecentUploads();
      setMessage({ text: 'Saved changes', type: 'success' });
      setSelectedItem(null);
    } catch (err) {
      console.error('Save failed', err);
      setMessage({ text: `Save failed: ${err instanceof Error ? err.message : String(err)}`, type: 'error' });
    } finally {
      setOperationLoading(false);
    }
  };

  const handleDelete = async (item: DesignWork) => {
    if (!confirm(`Delete "${item.title}"? This will remove the DB record and attempt to delete the file from storage.`)) return;
    try {
      setOperationLoading(true);
      // try to remove storage object
      try {
        const path = parseStoragePath(item.src || '');
        if (path) await supabase.storage.from('design_works').remove([path]);
      } catch (e) {
        console.warn('Failed to delete storage object', e);
      }

      const { error: delErr } = await supabase.from('design_works').delete().eq('id', item.id);
      if (delErr) throw delErr;
      setMessage({ text: 'Deleted', type: 'success' });
      await fetchRecentUploads();
      setSelectedItem(null);
    } catch (err) {
      console.error('Delete failed', err);
      setMessage({ text: `Delete failed: ${err instanceof Error ? err.message : String(err)}`, type: 'error' });
    } finally {
      setOperationLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoginLoading(true);
      if (!email || !password) {
        setMessage({ text: 'Email and password are required', type: 'error' });
        return;
      }
      const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });
      if (signInError) {
        setMessage({ text: `Login failed: ${signInError.message}`, type: 'error' });
        return;
      }
      setMessage({ text: 'Logged in successfully', type: 'success' });
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Unknown error';
      setMessage({ text: `Login failed: ${msg}`, type: 'error' });
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setMessage({ text: 'Please select a file', type: 'error' });
      return;
    }

    try {
      setLoading(true);
      setMessage({ text: '', type: '' });

      // Ensure Supabase auth session exists if your storage/table policies require authenticated role
      const { data: sessionData } = await supabase.auth.getSession();
      const isSupabaseAuthenticated = !!sessionData.session;
      if (!isSupabaseAuthenticated) {
        // If RLS requires authenticated, this will fail without policies allowing anon
        console.warn('No Supabase auth session detected. Upload may fail due to RLS.');
      }

      // 1. Upload file to Supabase Storage
      const fileExt = file.name.split('.').pop();
      const safeExt = fileExt ? fileExt.toLowerCase() : 'bin';
      const fileName = `${(globalThis.crypto?.randomUUID?.() || Math.random().toString(36).slice(2))}.${safeExt}`;
      const filePath = `${type === 'image' ? 'images' : 'videos'}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('design_works')
        .upload(filePath, file, {
          upsert: false,
          contentType: file.type || 'application/octet-stream',
          cacheControl: '3600'
        });

      if (uploadError) throw uploadError;

      // 2. Get public URL
      const { data: urlData } = supabase.storage
        .from('design_works')
        .getPublicUrl(filePath);

      const publicUrl = urlData.publicUrl;

      // 2b. If video, generate and upload a thumbnail from first frame
      let thumbnailUrl: string | undefined = undefined;
      if (type === 'video') {
        try {
          const thumbBlob = await generateVideoThumbnail(file);
          const thumbName = `${(globalThis.crypto?.randomUUID?.() || Math.random().toString(36).slice(2))}.jpg`;
          const thumbPath = `thumbnails/${thumbName}`;
          const { error: thumbUploadError } = await supabase.storage
            .from('design_works')
            .upload(thumbPath, thumbBlob, {
              upsert: false,
              contentType: 'image/jpeg',
              cacheControl: '3600'
            });
          if (thumbUploadError) throw thumbUploadError;
          const { data: thumbUrlData } = supabase.storage
            .from('design_works')
            .getPublicUrl(thumbPath);
          thumbnailUrl = thumbUrlData.publicUrl;
        } catch (thumbErr) {
          console.warn('Failed to create/upload video thumbnail:', thumbErr);
        }
      } else {
        // For images, we can use the original as thumbnail
        thumbnailUrl = publicUrl;
      }

      // 3. Insert record into database
      const { error: insertError } = await supabase
        .from('design_works')
        .insert([
          {
            title,
            type,
            src: publicUrl,
            thumbnail: thumbnailUrl,
            height,
            category,
            featured
          }
        ]);

      if (insertError) throw insertError;

      // Success
      setMessage({ text: 'Upload successful!', type: 'success' });
      setTitle('');
      setFile(null);
      
      // Reset file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
      
      // Refresh recent uploads
      fetchRecentUploads();
    } catch (error) {
      console.error('Error uploading:', error);
      const message = error instanceof Error ? error.message : 'Unknown error';
      setMessage({ text: `Error: ${message}`, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Admin Login</h2>
            <p className="mt-2 text-sm text-gray-600">Enter password to access admin area</p>
          </div>
          
          {message.text && (
            <div className={`p-4 rounded-md ${message.type === 'error' ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
              {message.text}
            </div>
          )}
          
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-skizen-accent focus:border-skizen-accent"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-skizen-accent focus:border-skizen-accent"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            
            <div>
              <button
                type="submit"
                disabled={loginLoading}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-skizen-accent hover:bg-skizen-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skizen-accent ${loginLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loginLoading ? 'Logging in…' : 'Login'}
              </button>
            </div>
            
            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="text-sm text-gray-600 hover:text-skizen-accent"
              >
                Return to Home
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <div className="flex gap-4">
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              View Site
            </button>
            <button
              onClick={handleLogout}
              className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload New Design Work</h2>
          
          {message.text && (
            <div className={`p-4 mb-6 rounded-md ${message.type === 'error' ? 'bg-red-50 text-red-800' : 'bg-green-50 text-green-800'}`}>
              {message.text}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-skizen-accent focus:border-skizen-accent"
                />
              </div>
              
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  id="type"
                  value={type}
                  onChange={(e) => setType(e.target.value as 'image' | 'video')}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-skizen-accent focus:border-skizen-accent"
                >
                  <option value="image">Image</option>
                  <option value="video">Video</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-skizen-accent focus:border-skizen-accent"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-gray-700">
                  Display Height
                </label>
                <select
                  id="height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-skizen-accent focus:border-skizen-accent"
                >
                  {heights.map((h) => (
                    <option key={h.value} value={h.value}>
                      {h.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="sm:col-span-2">
                <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700">
                  {type === 'image' ? 'Image' : 'Video'} File
                </label>
                <input
                  id="file-upload"
                  type="file"
                  accept={type === 'image' ? 'image/*' : 'video/*'}
                  onChange={handleFileChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-skizen-accent focus:border-skizen-accent"
                />
                {/* preview removed per user request */}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="featured" className="inline-flex items-center gap-2 text-sm font-medium text-gray-700">
                  <input
                    id="featured"
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="h-4 w-4 text-skizen-accent border-gray-300 rounded focus:ring-skizen-accent"
                  />
                  Mark as Featured
                </label>
              </div>
            </div>
            
            <div className="mt-6">
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-skizen-accent hover:bg-skizen-accent/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-skizen-accent ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Uploading...' : 'Upload'}
              </button>
            </div>
          </form>
        </div>
        
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Uploads</h2>
          
          {recentUploads.length === 0 ? (
            <p className="text-gray-500">No recent uploads found.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Preview
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentUploads.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50 cursor-pointer" onClick={() => openPreview(item)}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {item.type === 'image' ? (
                          <img src={item.src} alt={item.title} className="h-12 w-auto object-cover" />
                        ) : (
                          <video src={item.src} className="h-12 w-auto object-cover" />
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{item.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          item.type === 'image' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                        }`}>
                          {item.type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.category}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {item.created_at ? new Date(item.created_at).toLocaleDateString() : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {/* Preview / Edit Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-lg font-semibold">Preview & Edit</h3>
                <button className="p-2 rounded-full hover:bg-gray-100" onClick={() => setSelectedItem(null)}>
                  <X className="w-5 h-5 text-gray-700" />
                </button>
              </div>

              <div className="p-4 space-y-4">
                {/* Responsive preview + edit layout: stacks on small screens, side-by-side on md+ */}
                <div className="w-full flex flex-col md:flex-row items-start gap-6">
                  <div className="md:w-1/2 w-full flex flex-col items-center">
                    <div className="w-full bg-gray-50 rounded-md p-3 shadow-sm flex items-center justify-center">
                      {selectedItem.type === 'image' ? (
                        <img
                          src={selectedItem.src}
                          alt={selectedItem.title}
                          className="max-h-[70vh] w-auto max-w-full object-contain rounded-md"
                        />
                      ) : (
                        <video
                          src={selectedItem.src}
                          poster={selectedItem.thumbnail}
                          controls
                          className="max-h-[70vh] w-auto max-w-full object-contain rounded-md"
                        />
                      )}
                    </div>
                    <div className="mt-2 text-xs text-gray-500 text-center w-full">
                      {selectedItem.type === 'video' ? 'Video preview — controls available. Tall (portrait) videos are constrained for comfortable viewing.' : 'Image preview'}
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input value={editTitle} onChange={e => setEditTitle(e.target.value)} className="mt-1 block w-full border rounded-md p-2" />

                    <label className="block text-sm font-medium text-gray-700 mt-3">Category</label>
                    <select value={editCategory} onChange={e => setEditCategory(e.target.value)} className="mt-1 block w-full border rounded-md p-2">
                      {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>

                    <label className="block text-sm font-medium text-gray-700 mt-3">Height</label>
                    <select value={editHeight} onChange={e => setEditHeight(e.target.value)} className="mt-1 block w-full border rounded-md p-2">
                      {heights.map(h => <option key={h.value} value={h.value}>{h.label}</option>)}
                    </select>

                    <label className="inline-flex items-center gap-2 mt-3">
                      <input type="checkbox" checked={editFeatured} onChange={e => setEditFeatured(e.target.checked)} className="h-4 w-4" />
                      <span className="text-sm">Featured</span>
                    </label>

                    <div className="mt-4">
                      <label className="block text-sm font-medium text-gray-700">Replace File</label>
                      <input type="file" accept={selectedItem.type === 'image' ? 'image/*' : 'video/*'} onChange={handleReplaceFileChange} className="mt-1" />
                    </div>

                    <div className="mt-6 flex gap-3">
                      <button onClick={handleSaveChanges} disabled={operationLoading} className="px-4 py-2 bg-skizen-accent text-white rounded-md">{operationLoading ? 'Saving...' : 'Save'}</button>
                      <button onClick={() => handleDelete(selectedItem)} disabled={operationLoading} className="px-4 py-2 bg-red-600 text-white rounded-md">{operationLoading ? 'Deleting...' : 'Delete'}</button>
                      <a href={selectedItem.src} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex items-center gap-2 text-sm text-skizen-accent">
                        <Download className="w-4 h-4" /> Open File
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminPage;