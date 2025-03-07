import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Roboto_Slab } from "next/font/google";
import StoreProvider from "./store/storeProvider"; // Import the StoreProvider
import ScrollToUp from "./site/home/ScrollToUp";
import Navbar from "./site/Navbar";
import Footer from "./site/Footer";

const playfair = Roboto_Slab({ subsets: ["latin"], weight: ["400", "700"] });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Arkan",
  description: "Discover and explore the best real estate options with Aqar1",
};

export default function RootLayout({ children }) {
  // Comment out the token verification logic for now
  /*
  const token = cookies().get("userToken")?.value;

  // Token verification logic
  if (token) {
    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      console.error("Invalid token:", error);
      redirect("/site/home");
    }
  } else {
    redirect("/site/home");
  }
  */

  return (
    <html lang="en">
      <body className={`${playfair.className}`}>
        {/* Wrap the children with StoreProvider */}
        <StoreProvider>
          <Navbar />
          {children}
          <ScrollToUp />
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}