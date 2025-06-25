"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import RentCard from "../Cards/rentCard";
import dynamic from "next/dynamic";
import Aos from "aos";
import "aos/dist/aos.css";
import { fetchProperties } from "../../store/propertiesSlice";

const DynamicSlider = dynamic(() => import("react-slick"), {
  ssr: false,
  loading: () => <div className="slick-loading">Loading...</div>,
});

export default function Rent({ classes = "", moreSetting = {}, header }) {
  const [isMounted, setIsMounted] = useState(false);
  const dispatch = useDispatch();

  const { properties = [], loading, error } = useSelector(
    (state) => state.properties || {}
  );

  useEffect(() => {
    setIsMounted(true);
    dispatch(fetchProperties());
    Aos.init({ duration: 700, once: true });
  }, [dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
    ...moreSetting,
  };

  if (!isMounted || loading) {
    return (
      <section className={`container mx-auto my-12 Rent ${classes}`}>
        <h1 className="font-bold text-2xl mb-6">
          {header || "Explore our Properties"}
        </h1>
        <div className="text-center py-8">Loading properties...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`container mx-auto my-12 Rent ${classes}`}>
        <h1 className="font-bold text-2xl mb-6">
          {header || "Error loading properties"}
        </h1>
        <div className="text-center text-red-500 py-8">
          Error: {error.message || "Failed to load properties"}
        </div>
      </section>
    );
  }

  // ✅ Optional: filter by status
  // const filteredProperties = properties.filter(
  //   (p) => p.status?.toLowerCase().trim() === "available"
  // );

  const parsedProperties = properties.map((property) => {
    // Parse amenities
    let parsedAmenities = [];
    if (Array.isArray(property.amenities)) {
      parsedAmenities = property.amenities.flatMap((a) => {
        try {
          return Object.values(JSON.parse(a));
        } catch (err) {
          return a.replace(/["{}]/g, "").split(":")[1]?.trim() || "";
        }
      });
    }

    // Parse type (not used here but parsed in case you need it)
    let parsedType = {};
    try {
      parsedType = JSON.parse(property.type);
    } catch (e) {
      parsedType = {};
    }

    return {
      ...property,
      amenities: parsedAmenities,
      type: parsedType,
    };
  });

  return (
    <section
      style={{ padding: "50px 0" }}
      className={`container mx-auto my-12 Rent ${classes}`}
    >
      <h1 className="font-bold text-2xl mb-6">
        {header || "Explore our Properties"}
      </h1>

      {parsedProperties.length > 0 ? (
        <DynamicSlider {...settings}>
          {parsedProperties.map((property) => (
            <div key={property.id} className="px-2">
              <Link href={`/site/ApartmentDetails/${property.id}`} passHref>
                <RentCard
                  property={{
                    id: property.id,
                    image: property.image || "/default-property.jpg",
                    title: property.title || "Untitled Property",
                    price: property.price || 0,
                    price_unit: property.price_unit || "USD",
                    beds: property.beds || 0,
                    bathrooms: property.bathrooms || 0,
                    land_space: `${property.land_space || 0} sqft`,
                    location: property.location || "Location not specified",
                    amenities: property.amenities,
                  }}
                />
              </Link>
            </div>
          ))}
        </DynamicSlider>
      ) : (
        <div className="text-center py-8">No properties available at the moment</div>
      )}
    </section>
  );
}
