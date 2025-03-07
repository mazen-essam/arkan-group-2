"use client";
import axios from "axios";
import Image from "next/image";
import { useState ,useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Aos from "aos";
import "aos/dist/aos.css";
export default function ServicePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    propertyType: "",
    location: "",
    description: "",
  });
  useEffect(() => {
    Aos.init({
        duration: 1000,
        once: true,
        });
    }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePhoneChange = (phone) => {
    setFormData({ ...formData, phone });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);

    try {
      const response = await axios.post(
        "http://localhost:3001/submit",
        formData
      );
      console.log("Success:", response.data);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        phone: "",
        propertyType: "",
        location: "",
        description: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form. Try again.");
    }
  };

  return (
    <section className="container mx-auto py-12 pt-44" data-aos="fade-up">
      {/* Logo Section */}
      <div className="text-center flex justify-center">
        <Image
          src="https://www.nawy.com/assets/icons/sell-my-property/house-for-sale-color.svg"
          alt="Sell My Property"
          width={100}
          height={100}
        />
      </div>

      {/* Title */}
      <h1 className="text-center mt-12 font-semibold text-3xl">
        Explore our Apartments for Service
      </h1>

      {/* Steps Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 lg:w-3/5 md:w-4/5 w-full mx-auto">
        {[
          {
            step: "1",
            title: "List Your Property Details",
            desc: "Add All The Information Related To Your Property",
          },
          {
            step: "2",
            title: "One Of Our Agents Will Call You",
            desc: "We Will Help You Find The Best Buyer",
          },
          {
            step: "3",
            title: "Meet With Serious Buyers",
            desc: "Final Step To Sell Your Property",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 p-6 rounded-lg text-center hover:shadow-lg hover:scale-110 duration-700"
          >
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-white rounded-full shadow-md font-bold text-lg text-blue-600">
              {item.step}
            </div>
            <h3 className="font-bold text-lg mt-4">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="mt-16 lg:w-3/5 md:w-4/5 w-full  mx-auto p-8 shadow-lg rounded-lg bg-gray-200">
        <h2 className="text-xl font-semibold text-center mb-6">
          List Your Property
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

          <select
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
          </select>

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
            placeholder="Property Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-blue-500 h-24"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold hover:bg-blue-700 transition"
          >
            Submit Property
          </button>
        </form>
      </div>
    </section>
  );
}
