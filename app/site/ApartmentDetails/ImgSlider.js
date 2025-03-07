"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/background3.jpg",
  "/background3.jpg",

];

export default function ImageSlider() {
  return (
    <div className=" w-full h-[400px] rounded-lg ">
      <Swiper
        modules={[Autoplay]}
       
        pagination={false}
        effect="fade"
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Background ${index + 1}`}
                objectfit="cover"
                className="transition-transform duration-500 hover:scale-110 rounded-lg"
                width={1000}
                height={1000}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
