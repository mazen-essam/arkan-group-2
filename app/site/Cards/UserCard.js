import Image from "next/image";
import Link from "next/link";
import UserActions from "../GetAllUsers/UpdateAndDelete"; // Import client component

export default function UserCard({ user }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <Link href={`/users/${user.id}`}>
                <div className="cursor-pointer hover:shadow-lg transition">
                    <Image
                        src={user.image || "/default-avatar.png"}
                        alt="User Image"
                        width={80}
                        height={80}
                        className="rounded-full mx-auto"
                    />
                    <h2 className="text-lg font-semibold mt-2">
                        {user.first_name} {user.last_name}
                    </h2>
                    <p className="text-gray-500">{user.email}</p>
                    <p className="text-gray-400">Role: {user.role}</p>
                </div>
            </Link>

            <UserActions user={user} />
        </div>
    );
}
