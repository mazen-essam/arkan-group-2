"use client";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RentCardList from "../Cards/rentCardListView";
import AOS from "aos";
import {
  setSearchQuery,
  setMinPrice,
  setMaxPrice,
  toggleTypeFilter,
  toggleBedroomFilter,
  toggleFurnitureFilter,
  togglePaymentPlanFilter,
  setSortBy,
} from "../../store/fakePropertySlice.js";

export default function RentPage() {
  const dispatch = useDispatch();

  // Get state from Redux
  const {
    apartments,
    searchQuery,
    minPrice,
    maxPrice,
    selectedTypes,
    selectedBedrooms,
    selectedFurniture,
    selectedPaymentPlans,
    sortBy,
  } = useSelector((state) => state.apartments);

  // Filter and sort logic
  const filteredList = apartments.filter((p) => {
    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesPrice =
      (!minPrice || p.price >= parseInt(minPrice)) &&
      (!maxPrice || p.price <= parseInt(maxPrice));
    const matchesType =
      selectedTypes.length === 0 || selectedTypes.includes(p.type);
    const matchesBedrooms =
      selectedBedrooms.length === 0 || selectedBedrooms.includes(p.bedrooms);
    const matchesFurniture =
      selectedFurniture.length === 0 || selectedFurniture.includes(p.furnished);
    const matchesPaymentPlan =
      selectedPaymentPlans.length === 0 ||
      selectedPaymentPlans.includes(p.paymentPlan);

    return (
      matchesSearch &&
      matchesPrice &&
      matchesType &&
      matchesBedrooms &&
      matchesFurniture &&
      matchesPaymentPlan
    );
  });

  const sortedList = [...filteredList].sort((a, b) => {
    if (sortBy === "priceLowToHigh") {
      return a.price - b.price;
    } else if (sortBy === "priceHighToLow") {
      return b.price - a.price;
    } else if (sortBy === "ratingHighToLow") {
      return b.rating - a.rating;
    } else {
      return 0; // Default order
    }
  });

  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Ensures animation runs once
      easing: "ease-in-out",
    });
  }, []);

  // Helper function to get unique values
  const propertyTypes = [...new Set(apartments.map((p) => p.type))];
  const bedroomCounts = [...new Set(apartments.map((p) => p.bedrooms))].sort(
    (a, b) => a - b
  );
  const paymentPlans = [...new Set(apartments.map((p) => p.paymentPlan))];

  return (
    <section className="container mx-auto p-4 pt-36">
      {/* Top Search and Sort Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        {/* Search Bar with Icon */}
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for properties..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Sort Dropdown with Icon */}
        <div className="relative w-full md:w-1/4">
          <select
            value={sortBy}
            onChange={(e) => dispatch(setSortBy(e.target.value))}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
          >
            <option value="default">Sort By</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="ratingHighToLow">Rating: High to Low</option>
          </select>
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <aside
          className="md:col-span-1 p-4 border rounded-lg"
          data-aos="fade-right"
        >
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Price Range Filter */}
          <div className="border-b border-gray-300 pb-4 mb-4">
            <label className="block font-medium mb-2">Price Range</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => dispatch(setMinPrice(e.target.value))}
                className="w-1/2 p-2 border border-gray-300 rounded-lg"
              />
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => dispatch(setMaxPrice(e.target.value))}
                className="w-1/2 p-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>

          {/* Property Type Filter */}
          <div className="border-b border-gray-300 pb-4 mb-4">
            <label className="block font-medium mb-2">Property Type</label>
            <div className="space-y-2">
              {propertyTypes.map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => dispatch(toggleTypeFilter(type))}
                    className="w-4 h-4"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {/* Bedroom Filter */}
          <div className="border-b border-gray-300 pb-4 mb-4">
            <label className="block font-medium mb-2">Number of Bedrooms</label>
            <div className="space-y-2">
              {bedroomCounts.map((count) => (
                <label key={count} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedBedrooms.includes(count)}
                    onChange={() => dispatch(toggleBedroomFilter(count))}
                    className="w-4 h-4"
                  />
                  {count} {count > 1 ? "Bedrooms" : "Bedroom"}
                </label>
              ))}
            </div>
          </div>

          {/* Furniture Filter */}
          <div className="border-b border-gray-300 pb-4 mb-4">
            <label className="block font-medium mb-2">Furniture</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedFurniture.includes(true)}
                  onChange={() => dispatch(toggleFurnitureFilter(true))}
                  className="w-4 h-4"
                />
                Furnished
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={selectedFurniture.includes(false)}
                  onChange={() => dispatch(toggleFurnitureFilter(false))}
                  className="w-4 h-4"
                />
                Unfurnished
              </label>
            </div>
          </div>

          {/* Payment Plan Filter */}
          <div className="border-b border-gray-300 pb-4 mb-4">
            <label className="block font-medium mb-2">Payment Plan</label>
            <div className="space-y-2">
              {paymentPlans.map((plan) => (
                <label key={plan} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedPaymentPlans.includes(plan)}
                    onChange={() => dispatch(togglePaymentPlanFilter(plan))}
                    className="w-4 h-4"
                  />
                  {plan}
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="md:col-span-3">
          <h1 className="text-2xl font-bold mb-4">
            Compounds In Egypt{" "}
            <span className="text-gray-600">({sortedList.length})</span>
          </h1>

          {/* Property Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8"
            data-aos="fade-left"
          >
            {sortedList.length > 0 ? (
              sortedList.map((item) => (
                <RentCardList key={item.id} property={item} />
              ))
            ) : (
              <p>No properties available.</p>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}












// const rentList = [
//   {
//     id: 1,
//     title: "Modern Apartment in Downtown",
//     price: 1200,
//     type: "Apartment",
//     bedrooms: 2,
//     furnished: true,
//     paymentPlan: "Monthly",
//     location: "Downtown, Cairo",
//     rating: 4.5,
//     reviews: 25,
//     amenities: ["Swimming Pool", "Gym", "Parking"],
//     description:
//       "A modern and spacious apartment located in the heart of downtown, perfect for professionals.",
//   },
//   {
//     id: 2,
//     title: "Cozy Studio Near the Park",
//     price: 950,
//     type: "Studio",
//     bedrooms: 1,
//     furnished: false,
//     paymentPlan: "Yearly",
//     location: "Zamalek, Cairo",
//     rating: 4.0,
//     reviews: 18,
//     amenities: ["Parking", "Balcony"],
//     description:
//       "A cozy studio with a beautiful view of the park, ideal for singles or couples.",
//   },
//   {
//     id: 3,
//     title: "Luxury Condo with Pool",
//     price: 2500,
//     type: "Condo",
//     bedrooms: 3,
//     furnished: true,
//     paymentPlan: "Monthly",
//     location: "New Cairo",
//     rating: 4.8,
//     reviews: 30,
//     amenities: ["Swimming Pool", "Gym", "Parking", "24/7 Security"],
//     description:
//       "A luxurious condo with premium amenities, located in a secure compound.",
//   },
//   {
//     id: 4,
//     title: "Elegant Loft in City Center",
//     price: 1800,
//     type: "Loft",
//     bedrooms: 1,
//     furnished: false,
//     paymentPlan: "Yearly",
//     location: "Maadi, Cairo",
//     rating: 4.2,
//     reviews: 22,
//     amenities: ["High Ceilings", "Open Floor Plan"],
//     description:
//       "An elegant loft with high ceilings and an open floor plan, perfect for creative professionals.",
//   },
// ];
