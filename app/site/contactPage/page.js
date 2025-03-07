"use client";
import { useState ,useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from "react-icons/fa";
import Aos from "aos";
import "aos/dist/aos.css";


export default function PropertyListing() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "",
    location: "",
    description: "",
  });
  useEffect(() => {
    Aos.init({
        duration: 700, // 1s animation duration
        once: true, // Animation runs only once
      });
    }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phone: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Property submitted successfully!");
    setFormData({
      name: "",
      phone: "",
      propertyType: "",
      location: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen  py-16 pt-96">
      {/* Flex container for Contact Us and Form */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 p-8 relative" >
        <div className="absolute w-full top-[-280px] left-0 right-0 z-[1] h-[28rem]">
          <Image
            src="/background3.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="brightness-75 rounded-lg"
          />
        </div>
        {/* Contact Us Section on the left */}
        <div className="w-full lg:w-1/3 relative z-10" data-aos="fade-right">
      <div className="p-8 ">
        <h1 className="text-3xl font-bold mb-32 text-white lg:text-start text-center">Contact Us</h1>
        <div className="space-y-6">
          {/* Location */}
          <div className="flex items-start space-x-4">
            <div className="text-gray-700">
              <FaMapMarkerAlt className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Location</h2>
              <p className="text-gray-600">123 Main Street, Cairo, Egypt</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="text-gray-700">
              <FaEnvelope className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Email</h2>
              <p className="text-gray-600">info@example.com</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="text-gray-700">
              <FaPhone className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Phone</h2>
              <p className="text-gray-600">+20 123 456 7890</p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex items-start space-x-4">
            <div className="text-gray-700">
              <FaClock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">Working Hours</h2>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Sat - Sun: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        {/* Form on the right */}
        <div className="w-full xl:w-1/3 lg:w-1/2 ms-auto me-10 relative z-10" data-aos="fade-left">
          <div className="p-8 shadow-lg rounded-lg bg-gray-200">
            <h2 className="text-3xl font-semibold text-center mb-16 ">
              Contact Form
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-blue-500"
                required
              />

              <PhoneInput
                country={"eg"}
                value={formData.phone}
                onChange={handlePhoneChange}
                containerClass="w-full"
                inputClass="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
                inputProps={{
                  name: "phone",
                  required: true,
                }}
                inputStyle={{ width: "100%", borderRadius: "5px" }}
              />

              {/* <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-blue-500"
                required
              >
                <option value="" disabled>
                  Select Property Type
                </option>
                <option value="apartment">Apartment</option>
                <option value="studio">Studio</option>
                <option value="villa">Villa</option>
                <option value="penthouse">Penthouse</option>
              </select> */}

              <input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-blue-500"
                required
              />

              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="w-full p-3 border rounded-md focus:outline-blue-500 h-24"
                required
              />

              <button
                type="submit"
                className="w-full bg-gradient-to-b from-[rgba(75,2,75,0.655)] to-[rgba(213,56,213,0.852)] text-white py-3 rounded-md font-semibold transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
