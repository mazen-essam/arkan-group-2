import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken"; 
export default function Page() {
  const token = cookies().get("userToken")?.value;
  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
      
      redirect("/site/home");
    } catch (error) {
      console.error("Invalid token:", error);
      
      // redirect("/auth/register");
      redirect("/site/home");
    }
  } else {
    // redirect("/auth/register");
    redirect("/site/home");
  }

  return null; 
}
