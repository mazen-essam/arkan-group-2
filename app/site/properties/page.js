"use client"
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PropertyCard from "../Cards/propertyCard";

function Page() {
  // Access the properties data from the Redux store
  const { apartments } = useSelector((state) => state.apartments);

  // Manual loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for active tab
  const [activeTab, setActiveTab] = useState("available");

  // Simulate loading and error handling
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!apartments || !Array.isArray(apartments)) {
        setError("Failed to load properties. Please try again later.");
      } else {
        setError(null);
      }
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [apartments]);

  // Filter properties based on active tab
  const filteredApartments = apartments.filter((property) =>
    property.status === activeTab
  );

  // If data is loading, show a loading spinner
  if (loading) {
    return (
      <section className="pt-32">
        <div className="text-center mb-32">
          <h1 className="text-5xl font-semibold text-[rgb(0,48,85)]">Properties</h1>
          <p className="mt-4 text-2xl font-semibold text-[rgb(0,48,85)]">
            Explore investment opportunities, and own a piece of the property you
            like.
          </p>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[rgb(0,48,85)]"></div>
        </div>
      </section>
    );
  }

  // If there's an error, show an error message
  if (error) {
    return (
      <section className="pt-32">
        <div className="text-center mb-32">
          <h1 className="text-5xl font-semibold text-[rgb(0,48,85)]">Properties</h1>
          <p className="mt-4 text-2xl font-semibold text-[rgb(0,48,85)]">
            Explore investment opportunities, and own a piece of the property you
            like.
          </p>
        </div>
        <div className="text-center text-red-500 text-xl">
          Error: {error}
        </div>
      </section>
    );
  }

  // If properties is not an array or is empty, show a message
  if (!Array.isArray(apartments) || apartments.length === 0) {
    return (
      <section className="pt-32">
        <div className="text-center mb-32">
          <h1 className="text-5xl font-semibold text-[rgb(0,48,85)]">Properties</h1>
          <p className="mt-4 text-2xl font-semibold text-[rgb(0,48,85)]">
            Explore investment opportunities, and own a piece of the property you
            like.
          </p>
        </div>
        <div className="text-center text-gray-500 text-xl">
          No properties available.
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 container mx-auto">
      <div className="text-center mb-32">
        <h1 className="text-5xl font-semibold text-[rgb(0,48,85)]">Properties</h1>
        <p className="mt-4 text-2xl font-semibold text-[rgb(0,48,85)]">
          Explore investment opportunities, and own a piece of the property you
          like.
        </p>
      </div>

      {/* Tabs for filtering properties */}
      <div className="flex justify-center mb-8">
        {["available", "funded", "exited"].map((status) => (
          <button
            key={status}
            className={`px-4 py-2 mx-2 rounded-lg ${
              activeTab === status ? "bg-[rgb(0,48,85)] text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(status)}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Render the properties list */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 justify-center">
        {filteredApartments.map((property) => (
          <PropertyCard
            key={property.id}
            id={property.id}
            title={property.title}
            price={property.price}
            type={property.type}
            location={property.location}
            rating={property.rating}
            reviews={property.reviews}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            furnished={property.furnished}
            amenities={property.amenities}
          />
        ))}
      </div>
    </section>
  );
}

export default Page;