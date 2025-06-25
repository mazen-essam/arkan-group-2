"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import RentCardList from "../Cards/rentCardListView";
import dynamic from "next/dynamic";

// Dynamically import AOS to avoid SSR issues
const AOS = dynamic(
  () => import("aos").then((mod) => mod),
  { ssr: false }
);

// Action imports
import {
  setSearchQuery,
  setMinPrice,
  setMaxPrice,
  toggleTypeFilter,
  toggleBedroomFilter,
  toggleFurnitureFilter,
  togglePaymentPlanFilter,
  setSortBy,
  fetchProperties,
} from "../../store/propertiesSlice";

function RentPage() {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);

  // Safely access Redux state with defaults
  const {
    properties = [],
    loading = false,
    error = null,
    searchQuery = "",
    minPrice = "",
    maxPrice = "",
    selectedTypes = [],
    selectedBedrooms = [],
    selectedFurniture = [],
    selectedPaymentPlans = [],
    sortBy = "default",
  } = useSelector((state) => state.properties || {});

  useEffect(() => {
    setIsMounted(true);
    dispatch(fetchProperties());

    // Initialize AOS after component mounts
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 800,
          once: true,
          easing: "ease-in-out",
        });
      });
    }
  }, [dispatch]);

  // Safe filtering with null checks
  const filteredList = properties.filter((p) => {
    if (!p) return false;

    const matchesSearch = searchQuery
      ? (p.title || "").toLowerCase().includes(searchQuery.toLowerCase())
      : true;

    const matchesPrice =
      (!minPrice || (p.price || 0) >= parseInt(minPrice)) &&
      (!maxPrice || (p.price || 0) <= parseInt(maxPrice));

    const matchesType =
      selectedTypes.length === 0 ||
      (p.features && selectedTypes.includes(p.features));

    const matchesBedrooms =
      selectedBedrooms.length === 0 ||
      (p.beds !== undefined && selectedBedrooms.includes(p.beds));

    const matchesFurniture =
      selectedFurniture.length === 0 ||
      (p.is_furnished !== undefined && selectedFurniture.includes(p.is_furnished));

    const paymentPlan = p.lease_start ? "Leased" : "Available";
    const matchesPaymentPlan =
      selectedPaymentPlans.length === 0 || selectedPaymentPlans.includes(paymentPlan);

    return (
      matchesSearch &&
      matchesPrice &&
      matchesType &&
      matchesBedrooms &&
      matchesFurniture &&
      matchesPaymentPlan
    );
  });

  // Safe sorting
  const sortedList = [...filteredList].sort((a, b) => {
    if (!a || !b) return 0;
    if (sortBy === "priceLowToHigh") return (a.price || 0) - (b.price || 0);
    if (sortBy === "priceHighToLow") return (b.price || 0) - (a.price || 0);
    return 0;
  });

  // Get unique values safely
  const propertyTypes = [
    ...new Set(properties.map((p) => p?.features).filter(Boolean)),
  ];
  const bedroomCounts = [
    ...new Set(properties.map((p) => p?.beds).filter(Number.isFinite)),
  ].sort((a, b) => a - b);
  const paymentPlans = ["Leased", "Available"];

  if (!isMounted) {
    // Server-side render fallback
    return (
      <div className="container mx-auto p-4 pt-36">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Loading filters...</h2>
          </div>
          <div className="md:col-span-3">
            <h1 className="text-2xl font-bold mb-4">Loading properties...</h1>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto p-4 pt-36">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[rgb(0,48,85)]"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 pt-36">
        <div className="text-center text-red-500 text-xl">Error: {error}</div>
      </div>
    );
  }

  return (
    <section className="container mx-auto p-4 pt-36">
      {/* Search and Sort Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search for properties..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          {/* Search icon */}
        </div>

        <div className="relative w-full md:w-1/4">
          <select
            value={sortBy}
            onChange={(e) => dispatch(setSortBy(e.target.value))}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
          >
            <option value="default">Sort By</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
          </select>
          {/* Dropdown icon */}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <aside className="md:col-span-1 p-4 border rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          
          {/* Price Filter */}
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

          {/* Bedrooms Filter */}
          <div className="border-b border-gray-300 pb-4 mb-4">
            <label className="block font-medium mb-2">Bedrooms</label>
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
          <div className="pb-4 mb-4">
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

        {/* Properties List */}
        <main className="md:col-span-3">
          <h1 className="text-2xl font-bold mb-4">
            Available Properties <span className="text-gray-600">({sortedList.length})</span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8">
            {sortedList.length > 0 ? (
              sortedList.map((item) => (
                <RentCardList
                  key={item.id}
                  property={{
                    ...item,
                    bedrooms: item.beds,
                    furnished: item.is_furnished,
                    type: item.features,
                    paymentPlan: item.lease_start ? "Leased" : "Available",
                    // amenities: item.amenities ? item.amenities.split(",") : [],
                  }}
                />
              ))
            ) : (
              <p className="text-center py-8 text-gray-500">
                No properties match your filters
              </p>
            )}
          </div>
        </main>
      </div>
    </section>
  );
}

export default dynamic(() => Promise.resolve(RentPage), { ssr: false });