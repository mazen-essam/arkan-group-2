"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Link from "next/link";
import FavouriteButton from "../home/FavouriteButton";

export default function RentCardList({ property }) {
    return (
        <Link href={`/site/ApartmentDetails/${property.id}`}>
            <div className="bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow hover:scale-[1.02] duration-500 border-2 border-gray-300 flex flex-col md:flex-row items-start p-5 gap-6">
                {/* Property Image */}
                <div className="relative w-full md:w-1/3 h-60 rounded-lg overflow-hidden">
                    <Image
                        src="/background3.jpg"
                        alt={property.title}
                        layout="fill"
                        objectFit="cover"
                        className="h-full w-full"
                    />
                    <FavouriteButton property={property} />
                </div>

                {/* Property Details */}
                <div className="flex flex-col justify-between w-full md:w-2/3">
                    {/* Location */}
                    <p className="text-gray-600">
                        <i className="fa-solid fa-location-dot"></i> {property.location || "Downtown, Cairo"}
                    </p>

                    {/* Title and Price */}
                    <div className="flex justify-between items-start mt-2">
                        <h3 className="text-lg font-semibold text-gray-900">{property.title}</h3>
                        <p className="text-blue-600 font-bold">{`${property.price} EGP`}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mt-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <i
                                    key={i}
                                    className={`fa-solid fa-star ${i < property.rating ? "text-yellow-400" : "text-gray-300"}`}
                                ></i>
                            ))}
                        </div>
                        <span className="text-gray-600 ml-2">({property.reviews || 12} reviews)</span>
                    </div>

                    {/* Property Features */}
                    <div className="flex flex-wrap gap-4 text-gray-600 mt-2">
                        <p><i className="fa fa-bed"></i> {property.bedrooms} {property.bedrooms > 1 ? "Bedrooms" : "Bedroom"}</p>
                        <p><i className="fa-solid fa-building"></i> {property.type}</p>
                        <p><i className="fa-solid fa-couch"></i> {property.furnished ? "Furnished" : "Unfurnished"}</p>
                        <p><i className="fa-solid fa-calendar"></i> {property.paymentPlan}</p>
                    </div>

                    {/* Amenities */}
                    <div className="flex flex-wrap gap-2 mt-4">
                        {property.amenities?.map((amenity, index) => (
                            <span key={index} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                                {amenity}
                            </span>
                        ))}
                    </div>

                    {/* Description and Call to Action */}
                    <div className="flex flex-col md:flex-row justify-between items-start mt-4 items-center">
                        {/* Description */}
                        <p className="text-gray-600 pr-10 w-3/4">
                            {property.description || "A modern and spacious property located in a prime area, perfect for families and professionals."}
                        </p>

                        {/* Call to Action */}
                        <div className="mt-4 md:mt-0 w-46">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                                Contact Seller
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}