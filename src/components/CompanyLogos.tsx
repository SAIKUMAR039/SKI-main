import React from 'react';
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter, FaGooglePlus, FaMapMarker } from 'react-icons/fa';
export const FacebookLogo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <FaFacebook className={className} />
);

export const GoogleLogo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <FaGoogle className={className} />
);

export const InstagramLogo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <FaInstagram className={className} />
);

export const TwitterLogo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <FaTwitter className={className} />
);

export const LinkedInLogo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <FaLinkedin className={className} />
);

export const GoogleAdsLogo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <FaGooglePlus className={className} />
);




export const LocalBusinessLogo: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <FaMapMarker className={className} />
);