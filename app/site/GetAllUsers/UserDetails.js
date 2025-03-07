export default async function UserDetails({ params }) {
    const { id } = params;
    const api_URL = "http://localhost:3001";

    const response = await fetch(`${api_URL}/users/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store"
    });

    if (!response.ok) {
        return <p className="text-red-500 text-center mt-10">Failed to fetch user details</p>;
    }

    const { data: user } = await response.json();

    return (
        <div className="p-10 max-w-lg mx-auto bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-6">User Details</h1>
            <div className="text-center">
                <img
                    src={user.image || "/default-avatar.png"}
                    alt="User Image"
                    className="rounded-full mx-auto w-24 h-24"
                />
                <h2 className="text-xl font-semibold mt-4">{user.first_name} {user.last_name}</h2>
                <p className="text-gray-600">Email: {user.email}</p>
                <p className="text-gray-600">Phone: {user.phone}</p>
                <p className="text-gray-600">Role: {user.role}</p>
                <p className="text-gray-600">Joined: {new Date(user.created_at).toLocaleDateString()}</p>
            </div>
        </div>
    );
}
