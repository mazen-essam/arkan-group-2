import UserRole from "app/userRole";
import Image from "next/image";

export default function AdminProfile() {
    const user = UserRole();

    return (
        <div className="p-10 text-center">
            <h1 className="text-2xl font-bold">Profile Page</h1>

            {user?.role === "admin" ? (
                <div className="mt-6 bg-white shadow-md rounded-lg p-6 max-w-md mx-auto">
                    <Image
                        src={user.image || "/default-avatar.png"}
                        alt="Profile Picture"
                        width={100}
                        height={100}
                        className="rounded-full mx-auto"
                    />
                    <h2 className="text-xl font-semibold mt-4">{user.name || "Unknown User"}</h2>
                    <p className="text-gray-600">{user.email || "No Email"}</p>
                </div>
            ) : null}
        </div>
    );
}
