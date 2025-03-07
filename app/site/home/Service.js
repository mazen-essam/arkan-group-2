"use client"; // Add this since React Slick requires client-side interactivity
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import ServiceCard from "../Cards/serviceCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mockServices = [
  {
    id: 1,
    title: "Premium Haircut",
    image: "/background3.jpg",
    price: 50,
    price_unit: "USD",
  },
  {
    id: 2,
    title: "Massage Therapy",
    image: "/img3.jpg",
    price: 80,
    price_unit: "USD",
  },
  {
    id: 3,
    title: "Facial Treatment",
    image: "/img2.jpg",
    price: 60,
    price_unit: "USD",
  },
  {
    id: 4,
    title: "Facial Treatment",
    image: "/img1.png",
    price: 60,
    price_unit: "USD",
  },
  {
    id: 5,
    title: "Premium Haircut",
    image: "/background3.jpg",
    price: 50,
    price_unit: "USD",
  },
];

export default function Service() {
  // React Slick settings
  const settings = {
    dots: false, // Show pagination dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 5, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll
    autoplay: true, // Enable auto-play
    autoplaySpeed: 2000, // Auto-play speed (3 seconds)
    arrows: false, // Hide navigation arrows
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 3, // Show 3 cards
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 2, // Show 2 cards
        },
      },
      {
        breakpoint: 480, // For screens smaller than 480px
        settings: {
          slidesToShow: 1, // Show 1 card
        },
      },
    ],
  };

  return (
    <section className="service container mx-auto my-16 mt-32">
      <h1 className="text-2xl mb-6 font-semibold">
        Explore our Apartments for Service
      </h1>

      <Slider {...settings}>
        {mockServices.map((item) => (
          <div key={item.id} className="px-2"> {/* Add padding between cards */}
            <Link href={`/site/servicePage?id=${item.id}`} passHref>
              <ServiceCard service={item} />
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
}


{
    // try {
  //   const { data } = await axios.get(`${API_URL}/services`);
  //   serviceList = data;
  // } catch (error) {
  //   errorMessage = "Error fetching services. Please try again later.";
  // }

}