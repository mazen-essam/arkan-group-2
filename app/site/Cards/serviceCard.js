import { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import FavouriteButton from "../home/FavouriteButton";

export default function ServiceCard({ service }) {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 700, // Animation duration (ms)
      once: true, // Only animate once
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      className="relative bg-gray-800 text-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-200 h-[220px]"
      data-aos="fade-up" // Apply fade-up animation
      data-aos-delay="200" // Delay for a smoother effect
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 p-4 flex flex-col justify-end h-full">
        <FavouriteButton property={service} />
        <div className="flex justify-between items-center font-bold">
          <h3 className="text-lg font-semibold">{service.title}</h3>
          <p>{`${service.price} ${service.price_unit}`}</p>
        </div>
      </div>
    </div>
  );
}
