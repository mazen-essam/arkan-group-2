"use client";
import { useRouter } from "next/navigation";
import { useState, useCallback,useEffect } from "react";
import { loginAction } from "./LoginAction";
import Aos from 'aos';
import 'aos/dist/aos.css';
export default function SigninValidation() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
    useEffect(() => {
        Aos.init({
            duration: 700,
            once: true,
            });
        }
    , []);
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const validationError = {};

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

      setErrors(validationError);

      if (Object.keys(validationError).length === 0) {
        console.log("Submitting login request..."); // Debug log
        try {
          const result = await loginAction(formData);
          if (result.status === 200) {
            console.log("Login Action Result:", result); // Debug log
            router.push("/site/home");
          } else {
            setErrors({ general: result.message });
          }
        } catch (error) {
          setErrors({ general: "Login failed. Please try again." });
        }
      }
    },
    [formData, router]
  );

  return (
    <div className="w-full  mx-auto p-8 bg-gradient-to-b from-[rgba(75,2,75,0.655)] to-[rgba(213,56,213,0.852)] rounded-lg shadow-lg" data-aos="fade-in">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* General Error Message */}
        {errors.general && (
          <div className="bg-red-500 text-white p-3 rounded-lg text-center">
            {errors.general}
          </div>
        )}

        {/* Email Field */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-white font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder:text-white/70"
            placeholder="Enter your email"
            aria-invalid={!!errors.email}
            aria-describedby="email-error"
          />
          {errors.email && (
            <p id="email-error" className="text-red-300 text-sm">
              {errors.email}
            </p>
          )}
        </div>

        {/* Password Field */}
        <div className="space-y-2">
          <label htmlFor="password" className="block text-white font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder:text-white/70"
            placeholder="Enter your password"
            aria-invalid={!!errors.password}
            aria-describedby="password-error"
          />
          {errors.password && (
            <p id="password-error" className="text-red-300 text-sm">
              {errors.password}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-white text-purple-700 py-3 rounded-lg font-semibold hover:bg-purple-100 transition-all duration-300 flex items-center justify-center"
        >
          Continue
          <i className="fa fa-arrow-right ml-2"></i>
        </button>
      </form>
    </div>
  );
}