import { cookies } from "next/headers";
import UserRole from "./userRole";

export default function UserRoleWrapper() {
    const token = cookies().get("userToken")?.value || "";

    console.log("Token in UserRoleWrapper:", token);

    return UserRole(token);
}
