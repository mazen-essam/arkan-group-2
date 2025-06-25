"use client";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProperties } from "app/store/propertiesSlice";
import PropertyCard from "../Cards/propertyCard";

function PropertiesPage() {
  const dispatch = useDispatch();
  const { properties, loading, error } = useSelector((state) => state.properties);

  // Default tab is "all"
  const [activeTab, setActiveTab] = useState("all");

  // Fetch on mount
  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  // Unique statuses (for tabs)
  const uniqueStatuses = [
    "all",
    ...new Set(properties.map((p) => p.status?.toLowerCase().trim()).filter(Boolean)),
  ];

  // Filter properties
  const filteredProperties = activeTab === "all"
    ? properties
    : properties.filter(
        (property) => property.status?.toLowerCase().trim() === activeTab
      );

  // Loading state
  if (loading) {
    return (
      <section className="pt-32">
        <div className="text-center mb-32">
          <h1 className="text-5xl font-semibold text-[rgb(0,48,85)]">Properties</h1>
          <p className="mt-4 text-2xl font-semibold text-[rgb(0,48,85)]">
            Explore investment opportunities, and own a piece of the property you like.
          </p>
        </div>
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[rgb(0,48,85)]"></div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    return (
      <section className="pt-32">
        <div className="text-center mb-32">
          <h1 className="text-5xl font-semibold text-[rgb(0,48,85)]">Properties</h1>
          <p className="mt-4 text-2xl font-semibold text-[rgb(0,48,85)]">
            Explore investment opportunities, and own a piece of the property you like.
          </p>
        </div>
        <div className="text-center text-red-500 text-xl">Error: {error}</div>
      </section>
    );
  }

  // No data state
  if (!Array.isArray(properties) || properties.length === 0) {
    return (
      <section className="pt-32">
        <div className="text-center mb-32">
          <h1 className="text-5xl font-semibold text-[rgb(0,48,85)]">Properties</h1>
          <p className="mt-4 text-2xl font-semibold text-[rgb(0,48,85)]">
            Explore investment opportunities, and own a piece of the property you like.
          </p>
        </div>
        <div className="text-center text-gray-500 text-xl">No properties available.</div>
      </section>
    );
  }

  return (
    <section className="pt-32 container mx-auto">
      <div className="text-center mb-32">
        <h1 className="text-5xl font-semibold text-[rgb(0,48,85)]">Properties</h1>
        <p className="mt-4 text-2xl font-semibold text-[rgb(0,48,85)]">
          Explore investment opportunities, and own a piece of the property you like.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-8 flex-wrap gap-2">
        {uniqueStatuses.map((status) => (
          <button
            key={status}
            className={`px-4 py-2 rounded-lg ${
              activeTab === status
                ? "bg-[rgb(0,48,85)] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setActiveTab(status)}
          >
            {status === "all"
              ? "All"
              : status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 justify-center">
        {filteredProperties.map((property) => {
          let parsedType = {};
          try {
            parsedType =
              typeof property.type === "string"
                ? JSON.parse(property.type)
                : property.type || {};
          } catch (err) {
            console.error("Error parsing property.type:", err);
          }

          return (
            <PropertyCard
              key={property.id}
              id={property.id}
              title={property.title}
              price={property.price}
              type={parsedType}
              location={property.location}
              bedrooms={property.bedrooms}
              bathrooms={property.bathrooms}
              furnished={property.furnished}
              amenities={property.amenities}
              image={property.image}
              status={property.status}
              rent_amount={property.rent_amount}
              area={property.area}
            />
          );
        })}
      </div>
    </section>
  );
}

export default PropertiesPage;
