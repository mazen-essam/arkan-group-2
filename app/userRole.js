
import jwtDecode from "jwt-decode";

export default function UserRole(token) {
    console.log("Token in getUserRole:", token); // Debugging log

    if (!token) {
        console.warn("No token provided.");
        return { role: "guest" };
    }

    try {
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded);
        return decoded;
    } catch (error) {
        console.error("Invalid Token:", error);
        return { role: "guest" }; // Ensure user is always defined
    }
}