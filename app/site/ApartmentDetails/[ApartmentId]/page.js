"use client";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ImgGallery from "../../../componenets/img-gallary/imgGallary";
import Link from "next/link";
import Rent from "../../home/Rent"; // Assuming this is the correct import

// ApartmentDetails.js

export default function ApartmentDetails() {
  const params = useParams(); 
  const apartmentId = params.ApartmentId; // Extract dynamic ID correctly
  const apartments = useSelector((state) => state.apartments.apartments);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (apartments.length > 0) {
      setLoading(false);
    }
  }, [apartments, apartmentId]);

  const apartment = apartments.find((apt) => apt.id.toString() === apartmentId?.toString());
  console.log(apartment)
  if (loading) {
    return <p className="text-center text-blue-500 pt-44">Loading apartments...</p>;
  }

  if (!apartment) {
    return <p className="text-center text-red-500 pt-44">Apartment not found.</p>;
  }

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <main className="py-4">
        {/* Image Gallery Section */}
        <div className="w-full relative">
          <ImgGallery images={apartment.images} />
        </div>

        {/* Apartment Details Section */}
        <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-md mt-6">
          <h2 className="text-2xl font-bold mb-4">Apartment Details</h2>
          <p className="text-gray-700">{apartment.description}</p>
          <ul className="mt-4 flex flex-wrap gap-6 justify-between items-center mb-6">
            <ul className="flex flex-wrap gap-6">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-bed text-purple-500"></i> {apartment.bedrooms} Bedrooms
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-bath text-purple-500"></i> {apartment.bathrooms} Bathrooms
              </li>
             
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-car text-purple-500"></i> Private Parking
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-swimming-pool text-purple-500"></i> Swimming Pool
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-wifi text-purple-500"></i> Free Wi-Fi
              </li>
            </ul>
            <li className="flex gap-4">
              <a href="tel:+971500000000">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded bg-gray-400 px-6 py-3 text-white font-medium uppercase leading-normal shadow-md hover:bg-green-600 transition duration-150"
                >
                  <i className="fa fa-phone"></i> Call Now
                </button>
              </a>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/+971500000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded bg-green-600 px-6 py-3 text-white font-medium uppercase leading-normal shadow-md hover:bg-green-700 transition duration-150"
                >
                  <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                </button>
              </a>
            </li>
          </ul>
        </div>

        {/* Description and Rent Section */}
        <div className="flex flex-col lg:flex-row gap-6 mt-8">
          {/* Description Section */}
          <div className="w-full lg:w-2/3">
            <p className="text-xl font-semibold">{apartment.title}</p>
            <Link
              className="flex items-center text-gray-600 mt-4"
              href={`/site/detailspage/${apartmentId}`}
            >
              <i className="fa-solid fa-location-dot text-gray-500 mr-2"></i>
              {apartment.location}
            </Link>
            <p className="mt-4 text-gray-700">
              <span className="font-bold text-lg">Description:</span> {apartment.description}
            </p>

            {/* Rent Component */}
            
          </div>

          {/* Brief Information Section */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <p className="text-lg font-semibold">Brief Information</p>
              <p className="font-bold text-xl mt-4">Owner: Dubi Real Estate Agency</p>

              {/* Features */}
              <div className="flex justify-around bg-gray-100 p-4 rounded-lg mt-6">
                <div className="flex items-center gap-2">
                  <i className="fa fa-bed text-purple-500"></i> {apartment.bedrooms}
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-bath text-purple-500"></i> {apartment.bathrooms}
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-arrows-left-right-to-line text-purple-500"></i> 200,000 M
                </div>
              </div>

              {/* Rental Period */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden mt-6">
                <div className="flex-1 p-4 text-center">
                  <p>1-week rental:</p>
                  <strong>500,000 AED</strong>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="flex-1 p-4 text-center">
                  <p>1-Year rental:</p>
                  <strong>6,000,000 AED</strong>
                </div>
              </div>

              {/* View More Plans Button */}
              <Link href="/site/Plans">
                <button
                  type="button"
                  className="w-full mt-6 rounded bg-gradient-to-b from-purple-700 to-pink-500 px-6 py-3 text-white font-medium uppercase leading-normal shadow-md hover:opacity-90 transition duration-150"
                >
                  View more plans <i className="fa fa-arrow-right ml-2"></i>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8">
              <Rent moreSetting={{ slidesToShow: 3 }} />
            </div>
      </main>
    </section>
  );
}