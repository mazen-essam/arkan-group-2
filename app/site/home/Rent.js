"use client"; // Add this since React Slick requires client-side interactivity
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import RentCard from "../Cards/rentCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const properties = [
  {
    id: 1,
    image: "/background3.jpg",
    title: "Luxury Villa with Pool",
    price: 500000,
    price_unit: "USD",
    beds: 4,
    bathrooms: 3,
    land_space: "5000 sqft",
    location: "Beverly Hills, CA",
  },
  {
    id: 2,
    image: "/img1.png",
    title: "Modern Apartment Downtown",
    price: 250000,
    price_unit: "USD",
    beds: 2,
    bathrooms: 2,
    land_space: "1200 sqft",
    location: "New York, NY",
  },
  {
    id: 3,
    image: "/img2.jpg",
    title: "Beachfront Bungalow",
    price: 750000,
    price_unit: "USD",
    beds: 3,
    bathrooms: 2,
    land_space: "3000 sqft",
    location: "Miami, FL",
  },
  {
    id: 4,
    image: "/img3.jpg",
    title: "Cozy Mountain Cabin",
    price: 200000,
    price_unit: "USD",
    beds: 2,
    bathrooms: 1,
    land_space: "1500 sqft",
    location: "Aspen, CO",
  },
];

export default function Rent({ classes = "", moreSetting = {}, header }) {
  // React Slick settings
  const settings = {
    dots: true, // Show pagination dots
    infinite: true, // Infinite looping
    autoplay: true, // Auto-play the carousel
    autoplaySpeed: 2000, // Speed of auto-play
    arrows: false, // Show next/prev arrows
    speed: 500, // Transition speed

    speed: 500, // Transition speed
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2, // Show 2 cards
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1, // Show 1 card
        },
      },
    ],
  };
  useEffect(() => {
    Aos.init({ duration: 700, once: true });
  }, []);

  return (
    <section
      style={{ padding: "50px 0" }}
      className={`container mx-auto my-12 Rent ${classes}`}
      data-aos="fade-up"
    >
      <h1 className="font-bold text-2xl mb-6">
        {header != "" ? header : "Explore our Apartments for rent"}
      </h1>
      <Slider {...settings} {...moreSetting}>
        {properties.map((item) => (
          <div key={item.id} className="px-2">
            {" "}
            {/* Add padding between cards */}
            <Link href={`/site/ApartmentDetails/${item.id}`} passHref>
              <RentCard property={item} />
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
}

{
  /* <Link
key={item.id}
href={`/site/servicePage?id=${item.id}`}
passHref
>
<RentCard property={item} />
</Link> */
}
{
  // const API_URL = "http://localhost:3001";
  // try {
  //     const response = await axios.get(`${API_URL}/properties`);
  //     const rentList = response.data;
  // } catch (error) {
  //     return <p>Error fetching services:{error.message}</p>
  // }
}
