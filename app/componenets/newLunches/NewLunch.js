"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const imgs = [
  "https://prod-images.cooingestate.com/processed/compound/cover_image/1491/medium.webp",
  "https://prod-images.cooingestate.com/processed/compound/cover_image/1495/medium.webp",
  "https://prod-images.cooingestate.com/processed/compound/cover_image/1474/medium.webp",
];

export default function NewLaunch() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 700, // 1s animation duration
      once: true, // Animation runs only once
    });
  }, []);

  return (
    <div className="container mx-auto my-16 px-4">
      <h3 
        className="text-3xl font-bold text-center mb-8"
        data-aos="fade-up" // Animation for title
      >
        New Launches
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {imgs.map((img, index) => (
          <div 
            key={index} 
            className="relative w-full h-[300px] overflow-hidden rounded-lg shadow-lg"
            data-aos="zoom-in" // Apply AOS animation to images
            data-aos-delay={index * 200} // Staggered effect
          >
            <Image 
              src={img} 
              alt="Launch" 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg" 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
