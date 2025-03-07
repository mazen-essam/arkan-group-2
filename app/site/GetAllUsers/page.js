import UserCard from "../Cards/UserCard";
import AddUserForm from "./AddUserForm";
export default async function GetAllUsers() {
    const api_URL = "http://localhost:3001";

    const response = await fetch(`${api_URL}/api/users`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store", // Ensures fresh data on each request
    });

    if (!response.ok) {
        return <p className="text-red-500 text-center mt-10">Failed to fetch users</p>;
    }

    const { data: users } = await response.json();

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold text-center mb-6">Users List</h1>
            <div className="grid grid-cols-3 gap-6">
                {users.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
            <AddUserForm />
        </div>
    );
}
