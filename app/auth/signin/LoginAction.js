"use server";
import { cookies } from "next/headers";

export async function loginAction({ email, password }) {
  console.log("🔹 loginAction function is running!"); // ✅ Debug log 1

  const api_URL = "http://localhost:3001";
  console.log("Sending request to API:", api_URL, { email, password }); // ✅ Debug log 2

  try {
    // 🔹 Send request to your external API
    const response = await fetch(`${api_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    console.log("Raw API Response:", response); // ✅ Debug log 3

    const json_response = await response.json();
    console.log("Parsed API Response:", json_response); // ✅ Debug log 4

    console.log("API Response:", json_response); // 🔍 Debugging log
    if (json_response.status !== 200) {
      return { message: json_response.message || "Login failed", status: json_response.status };
    }

    const token = json_response.data;

    cookies().set("userToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return { message: "Login Successful", status: 200 };
  } catch (error) {
    console.error("Error sending request:", error); // ✅ Debug log 5

    return { message: "Server error", status: 500 };
  }
}
