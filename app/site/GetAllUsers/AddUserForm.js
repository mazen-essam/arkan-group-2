"use client";

import { useState } from "react";

export default function CreateUserForm() {
    const api_URL = "http://localhost:3001";
    const [UserForm, SetUserForm] = -useState({
        first_name: "",
        last_name: "",
        emai: "",
        phone: "",
        role: "",
        password: "",
        password_confirmation: "",
        image: "",
    });
    const [isOpen, setIsOpen] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${api_URL}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(UserForm),
        }

        );
        if (!response.ok) {
            alert("failed to create user");
            return;
        }
        alert("user created successfully!");
        setIsOpen(false);
    };

    return (
        <div className="mt-6 flex flex-col items-center">
            <button
                onClick={() => setIsOpen(true)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
            >
                Create New User
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Create New User</h2>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="text"
                                name="first_name"
                                placeholder="First Name"
                                value={formData.first_name}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                            <input
                                type="text"
                                name="last_name"
                                placeholder="Last Name"
                                value={formData.last_name}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                            <select
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            >
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                            <input
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm Password"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                                required
                            />
                            <input
                                type="text"
                                name="image"
                                placeholder="Image URL"
                                value={formData.image}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-4 py-2 bg-gray-300 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}