"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import FavouriteButton from "../home/FavouriteButton";
export default function RentCard({property}) {

    return (
        <div className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-200  ">
                    <div style={{ position: 'relative', width: '100%', height: '400px' }}>
                        <Image src="/img2.jpg" alt={property.title} layout="fill" objectFit="cover" />
                        <FavouriteButton property={property} />
                    </div>
                    <div className="p-5">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 'bold' }}>
                            <h3 className="text-lg font-semibold text-gray-900 ">{property.title}</h3>
                            <p>{`${property.price} ${property.price_unit}`}</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'start', alignItems: 'center', marginTop: '10px' }}>
                            <div style={{ marginRight: '10px' }}>
                                <p style={{ color: 'gray' }} > <i className="fa fa-bed"></i> {property.beds}</p>
                            </div>
                            <div style={{ marginRight: '10px' }}>
                                <p style={{ color: 'gray' }} > <i className="fa-solid fa-bath"></i> {property.bathrooms}</p>
                            </div>
                            <div style={{ marginRight: '10px' }}>
                                <p style={{ color: 'gray' }} > <i className="fa-solid fa-arrows-left-right-to-line"></i> `${property.land_space} M`</p>
                            </div>
                            <div style={{ marginRight: '10px' }}>
                                <p style={{ color: 'gray' }} > <i className="fa-solid fa-location-dot"></i> {property.location}</p>
                            </div>
                        </div>
                    </div>
        </div>

    );
}