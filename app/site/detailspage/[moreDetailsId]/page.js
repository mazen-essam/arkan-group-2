// import Link from "next/link";
// import { useRouter } from "next/router";
// import Footer from "../../Footer";
// import Navbar from "../../Navbar";
// import Map from "../Map";
// import Slider from "../Slider";

// // Mock data for demonstration
// const apartments = [
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
// ];

// export default function DetailsPage() {
//   const router = useRouter();
//   const { id } = router.query; // Get the apartment ID from the URL

//   // Find the apartment by ID
//   const apartment = apartments.find((apt) => apt.id === parseInt(id));

//   if (!apartment) {
//     return <p>Apartment not found.</p>;
//   }

//   return (
//     <>
//       <section className="rentPage max-w-8xl mx-auto py-5 px-4 sm:px-6 lg:px-8 pt-32">
//         <main className="rentMain flex flex-col md:flex-row justify-between gap-8">
//           {/* Map Section */}
//           <div className="map w-full md:w-1/2 h-[600px] md:h-[80vh] relative">
//             <Map location={apartment.location} />
//           </div>

//           {/* Details Section */}
//           <div className="details w-full md:w-1/2">
//             <div className="flex flex-col md:flex-row gap-6">
//               {/* Slider */}
//               <div className="w-full md:w-1/2">
//                 <Slider images={apartment.images} /> {/* Pass images to Slider */}
//               </div>

//               {/* Property Details */}
//               <div className="w-full md:w-1/2">
//                 <div className="flex justify-between items-center">
//                   <p className="text-gray-600 font-medium">Most Popular</p>
//                   <i className="fa-solid fa-share-nodes text-gray-500 text-xl cursor-pointer hover:text-purple-600 transition-colors"></i>
//                 </div>

//                 <h2 className="text-2xl font-bold mt-4">{apartment.title}</h2>

//                 <p className="flex items-center text-gray-600 mt-4">
//                   <i className="fa-solid fa-location-dot text-gray-500 mr-2"></i>
//                   {apartment.location}
//                 </p>

//                 {/* Property Features */}
//                 <div className="flex gap-6 mt-6">
//                   <div className="flex items-center text-gray-600">
//                     <i className="fa-solid fa-arrows-left-right-to-line mr-2"></i>
//                     {apartment.size} sqft
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <i className="fa fa-bed mr-2"></i>
//                     {apartment.bedrooms} Beds
//                   </div>
//                   <div className="flex items-center text-gray-600">
//                     <i className="fa-solid fa-bath mr-2"></i>
//                     {apartment.bathrooms} Baths
//                   </div>
//                 </div>

//                 {/* Description */}
//                 <p className="text-gray-700 mt-6">{apartment.description}</p>

//                 {/* Price */}
//                 <p className="text-xl font-bold mt-6">
//                   Retail price: {apartment.price} {apartment.currency} /{" "}
//                   {apartment.paymentPlan}
//                 </p>

//                 {/* Show More Button */}
//                 <Link href="/site/ApartmentDetails">
//                   <button
//                     className="w-full mt-6 py-3 px-6 bg-gradient-to-b from-purple-700 to-pink-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
//                   >
//                     Show More Details
//                   </button>
//                 </Link>
//               </div>
//             </div>

//             {/* Divider */}
//             <div className="w-full h-px bg-gray-300 my-8"></div>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// }