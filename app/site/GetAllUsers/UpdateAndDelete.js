"use client";
import { useState } from "react";

export default function UserActions({ user }) {
    const api_URL = "http://localhost:3001";
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        password: "",
        password_confirmation: "",
        image: user.image,
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle update
    const handleUpdate = async (e) => {
        e.preventDefault();

        const response = await fetch(`${api_URL}/users/${user.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            alert("Failed to update user");
            return;
        }

        alert("User updated successfully!");
        setIsEditing(false);
    };

    // Handle delete
    const handleDelete = async () => {
        if (!confirm("Are you sure you want to delete this user?")) return;

        const response = await fetch(`${api_URL}/api/users/${user.id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            alert("Failed to delete user");
            return;
        }

        alert("User deleted successfully!");
        window.location.reload(); // Refresh user list
    };

    return (
        <div className="mt-4 flex space-x-2 justify-center">
            {/* Edit Button */}
            <button
                onClick={() => setIsEditing(true)}
                className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
            >
                Edit
            </button>

            {/* Delete Button */}
            <button
                onClick={handleDelete}
                className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
                Delete
            </button>

            {/* Update Form Modal */}
            {isEditing && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h2 className="text-xl font-bold mb-4">Update User</h2>
                        <form onSubmit={handleUpdate} className="space-y-3">
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
                                placeholder="New Password"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
                            />
                            <input
                                type="password"
                                name="password_confirmation"
                                placeholder="Confirm Password"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                className="w-full border p-2 rounded"
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
                                    onClick={() => setIsEditing(false)}
                                    className="px-4 py-2 bg-gray-300 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-500 text-white rounded"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
