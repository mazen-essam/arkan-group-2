"use client";
import { useParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ImgGallery from "../../../componenets/img-gallary/imgGallary";
import Link from "next/link";
import Rent from "../../home/Rent";
import { fetchApartmentDetails, clearApartmentDetails } from "../../../store/apartmentDetailsSlice";

export default function ApartmentDetails() {
  const params = useParams();
  const apartmentId = params.ApartmentId;
  const dispatch = useDispatch();
  
  const { apartment, loading, error } = useSelector(
    (state) => state.apartmentDetails
  );

  useEffect(() => {
    if (apartmentId) {
      dispatch(fetchApartmentDetails(apartmentId));
    }

    return () => {
      dispatch(clearApartmentDetails());
    };
  }, [apartmentId, dispatch]);

  if (loading) {
    return <p className="text-center text-blue-500 pt-44">Loading apartment details...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 pt-44">Error: {error}</p>;
  }

  if (!apartment) {
    return <p className="text-center text-red-500 pt-44">Apartment not found.</p>;
  }

  // Parse amenities if they're in string format
  const amenities = Array.isArray(apartment.amenities)
    ? apartment.amenities
    : apartment.amenities?.split(",") || [];

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <main className="py-4">
        {/* Image Gallery Section */}
        <div className="w-full relative">
          <ImgGallery images={[apartment.image]} />
        </div>

        {/* Apartment Details Section */}
        <div className="bg-white p-6 rounded-lg border-2 border-gray-200 shadow-md mt-6">
          <h2 className="text-2xl font-bold mb-4">Apartment Details</h2>
          <p className="text-gray-700">{apartment.description}</p>
          <ul className="mt-4 flex flex-wrap gap-6 justify-between items-center mb-6">
            <ul className="flex flex-wrap gap-6">
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-bed text-purple-500"></i> {apartment.beds} Bedrooms
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-bath text-purple-500"></i> {apartment.bathrooms} Bathrooms
              </li>
              <li className="flex items-center gap-2">
                <i className="fa-solid fa-car text-purple-500"></i> Private Parking
              </li>
              {amenities.includes("Swimming Pool") && (
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-swimming-pool text-purple-500"></i> Swimming Pool
                </li>
              )}
              {amenities.includes("Wi-Fi") && (
                <li className="flex items-center gap-2">
                  <i className="fa-solid fa-wifi text-purple-500"></i> Free Wi-Fi
                </li>
              )}
            </ul>
            <li className="flex gap-4">
              <a href={`tel:${apartment.phone || "+971500000000"}`}>
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 rounded bg-gray-400 px-6 py-3 text-white font-medium uppercase leading-normal shadow-md hover:bg-green-600 transition duration-150"
                >
                  <i className="fa fa-phone"></i> Call Now
                </button>
              </a>

              <a
                href={`https://wa.me/${apartment.phone || "+971500000000"}`}
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
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <p className="text-lg font-semibold">Brief Information</p>
              <p className="font-bold text-xl mt-4">Owner: Dubi Real Estate Agency</p>

              <div className="flex justify-around bg-gray-100 p-4 rounded-lg mt-6">
                <div className="flex items-center gap-2">
                  <i className="fa fa-bed text-purple-500"></i> {apartment.beds}
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-bath text-purple-500"></i> {apartment.bathrooms}
                </div>
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-arrows-left-right-to-line text-purple-500"></i> {apartment.land_space} sqft
                </div>
              </div>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden mt-6">
                <div className="flex-1 p-4 text-center">
                  <p>1-week rental:</p>
                  <strong>{(apartment.rent_amount * 52).toLocaleString()} {apartment.price_unit}</strong>
                </div>
                <div className="w-px bg-gray-300"></div>
                <div className="flex-1 p-4 text-center">
                  <p>1-Year rental:</p>
                  <strong>{(apartment.rent_amount * 12).toLocaleString()} {apartment.price_unit}</strong>
                </div>
              </div>

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
