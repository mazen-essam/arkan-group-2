"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState ,useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function Validation() {
    const api_URL = "http://localhost:3001";
    let router = useRouter();
    let [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    useEffect(() => {
        Aos.init({
            duration: 700,
            once: true,
        });
    }, []);
    let [errors, setErrors] = useState({});

    let handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    }

    let handleSubmit = async (e) => {
        e.preventDefault();
        let validationError = {};

        if (!formData.firstName.trim()) {
            validationError.firstName = "First name is required";
        }
        if (!formData.lastName.trim()) {
            validationError.lastName = "Last name is required";
        }
        if (!formData.email.trim()) {
            validationError.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            validationError.email = "Invalid email format";
        }
        if (!formData.password.trim()) {
            validationError.password = "Password is required";
        } else if (formData.password.length < 6) {
            validationError.password = "Password must be at least 6 characters";
        }
        if (!formData.confirmPassword.trim()) {
            validationError.confirmPassword = "Confirm password is required";
        } else if (formData.confirmPassword !== formData.password) {
            validationError.confirmPassword = "Password doesn't match";
        }
        setErrors(validationError);
        if (Object.keys(validationError).length === 0) {
            console.log("form submitted successfully!", formData);
            const response = await fetch(`${api_URL}/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    password: formData.password
                }),
            });
            const json_response = await response.json();
            if (json_response.message === 'Register Successful' && json_response.status === 201) {
                router.push('/auth/signin');
            } else {
                setErrors({ general: json_response.message });
            }
        }
    }

    return (
        <div className=" flex items-center justify-center bg-gradient-to-b from-[rgba(75,2,75,0.655)] to-[rgba(213,56,213,0.852)] rounded-lg text-start" data-aos="fade-in">
            <div className="w-full  p-8  rounded-lg shadow-lg">
                <form className="space-y-6" onSubmit={handleSubmit}>
                    {errors.general && (
                        <div className="bg-red-500 text-white p-3 rounded mb-4">
                            {errors.general}
                        </div>
                    )}
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="firstName" className="block text-sm font-medium text-white">
                                First Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="lastName" className="block text-sm font-medium text-white">
                                Last Name
                            </label>
                            <input
                                type="text"
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white">
                            Password
                        </label>
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-white">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-white text-purple-700 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-all duration-300 flex items-center justify-center"
                            >
                            Continue <span className="ml-2">&#8594;</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}