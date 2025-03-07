import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

  const PropertyCard = React.memo(({
    title,
    id,
    price,
    type,
    location,
    rating,
    reviews,
    bedrooms,
    bathrooms,
    furnished,
    amenities,
  }) => {
    return (
      <div className="xl:w-3/4 w-full mx-auto mt-10 mb-12 rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
        {/* Static Image with Lazy Loading */}
       <div className='w-full h-48 relative'>
        <Image
          src="/background3.jpg"
          alt="Property"
          // className=" object-cover"
          loading="lazy"
          layout='fill'
        />
        </div>
        <div className='p-6 '>       {/* Title and Price */}
        <h2 className="text-2xl font-bold text-[rgb(0,48,85)]">{title}</h2>
        <p className="text-lg font-semibold text-gray-700 mt-2">${price}/month</p>

        {/* Type and Location */}
        <p className="text-sm text-gray-500 mt-1">
          {type} · {location}
        </p>

        {/* Rating and Reviews */}
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★ {rating}</span>
          <span className="text-sm text-gray-500 ml-2">({reviews} reviews)</span>
        </div>

        {/* Bedrooms, Bathrooms, and Furnished Status */}
        <div className="mt-4">
          <p className="text-sm text-gray-700">
            {bedrooms} Bedrooms · {bathrooms} Bathrooms
          </p>
          <p className="text-sm text-gray-700">
            {furnished ? "Furnished" : "Not Furnished"}
          </p>
        </div>

        {/* Amenities */}

        {/* Call to Action Button */}
        <Link href={`/site/ApartmentDetails/${id}`} >
        <button className="mt-6 w-full bg-[rgb(0,48,85)] text-white py-2 px-4 rounded-lg hover:bg-[rgb(0,38,75)] transition-colors duration-300">
          View Details
        </button>
        </Link>
        </div>

 
      </div>
    );
  });

  export default PropertyCard;