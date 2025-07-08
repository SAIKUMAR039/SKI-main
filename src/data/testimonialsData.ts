// src/data/testimonialsData.ts

export interface Testimonial {
    message: string;
    name: string;
    title: string;
    image: string;
  }
  
  export const testimonialsData: Testimonial[] = [
    {
      message:
        "Working with SKI was an exceptional experience. They delivered a clean and functional website for our college with integrated email support for admissions. Our online inquiries have grown tremendously!",
      name: "SR. Syamala .Ch",
      title: "Principal, St. Ann's Junior College",
      image: "https://stanns-updated.vercel.app/img/photos/(2).webp",
    },
    {
      message:
        "We are extremely pleased with the professional and user-friendly website SKI built for our school. Their design helped us better communicate with parents and students, and the performance is outstanding.",
      name: "Mr. Joseph Samuel",
      title: "Principal, St. Peter's CBSE School",
      image: "/stpeters-client.jpg",
    },
    {
      message:
        "The SKI team helped us transform our digital presence. From web design to strategy, they delivered beyond expectations. Their innovative ideas and timely execution played a key role in expanding our client base.",
      name: "Ms. Anjali Mehta",
      title: "Founder, VisionFame Pvt. Ltd.",
      image: "/visionfame-client.jpg",
    },
  ];
  