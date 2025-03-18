"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import userRole from "../userRole";

export default function Navbar() {
  const user = userRole();
  const token = "test";
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [propertiesOpen, setPropertiesOpen] = useState(false);
  const [platformOpen, setPlatformOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    if (isTransparentPage) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (isTransparentPage) {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [pathname]);

  const isTransparentPage =
    pathname === "/site/home" ||
    pathname.startsWith("/auth") ||
    pathname === "/site/otherPage1" ||
    pathname === "/site/otherPage2";
  const navbarStyles = isTransparentPage
    ? isScrolled
      ? "bg-white text-gray-800 shadow-md"
      : "bg-transparent text-white"
    : "bg-white text-gray-800 shadow-md";

  const dropdownStyles =
    isTransparentPage && !isScrolled
      ? "bg-transparent text-white"
      : "bg-white text-gray-800";

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${navbarStyles}`}
    >
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/arkan-logo.png"
              alt="Logo"
              width={100}
              height={100}
              className="mr-8"
            />
          </div>
          <div className="hidden md:flex justify-center items-center space-x-10 text-lg font-semibold">
            <Link href="/site/home">
              <button>Home</button>
            </Link>
            <Link href="/site/RentPage">
              <button>Search</button>
            </Link>
            <Link href="/site/servicePage">
              <button>Services</button>
            </Link>
            <Link href="/site/contactPage">
              <button>Contact us</button>
            </Link>
            <Link href="/site/blog">
              <button>Blog</button>
            </Link>

            <div className="relative">
              <button
                onClick={() => setPropertiesOpen(!propertiesOpen)}
                className="focus:outline-none"
              >
                Shares <i className="fa-solid fa-chevron-down ml-1"></i>
              </button>
              {propertiesOpen && (
                <div
                  className={`absolute left-0 mt-2 w-40 shadow-md rounded-md py-2 ${dropdownStyles}`}
                >
                  <Link href="/site/properties">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      properties
                    </button>
                  </Link>

                  <Link href="/site/wallet">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      Wallet
                    </button>
                  </Link>
                  <Link href="/site/portofolio">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      Portfolio
                    </button>
                  </Link>
                  <Link href="/site/refer">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      Refer
                    </button>
                  </Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => setPlatformOpen(!platformOpen)}
                className="focus:outline-none"
              >
                Platform <i className="fa-solid fa-chevron-down ml-1"></i>
              </button>
              {platformOpen && (
                <div
                  className={`absolute left-0 mt-2 w-40 shadow-md rounded-md py-2 ${dropdownStyles}`}
                >
                  <Link href="/site/platform">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      Main
                    </button>
                  </Link>

                  <Link href="/site/sales">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      Sales
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {token && user.role === "user" ? (
              <Link href="/site/profile">
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                  <i className="fa-solid fa-user text-lg"></i>
                </button>
              </Link>
            ) : token && user.role === "admin" ? (
              <Link href="/site/AdminProfile">
                <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                  <i className="fa-solid fa-user text-lg"></i>
                </button>
              </Link>
            ) : (
              <>
                <Link href="/auth/signin">
                  <button className="hover:text-gray-300 px-4 py-2 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100">
                    Sign In
                  </button>
                </Link>
                <Link href="/auth/register">
                  <button className="bg-gradient-to-b from-purple-700 to-purple-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-600">
                    Sign Up
                  </button>
                </Link>
              </>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              {menuOpen ? (
                <i className="fa-solid fa-times text-lg"></i>
              ) : (
                <i className="fa-solid fa-bars text-lg"></i>
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div
            className={`md:hidden flex flex-col space-y-4 px-4 py-2 shadow-md rounded-md ${dropdownStyles}`}
          >
            <Link href="/site/home">
              <button className="text-gray-800">Home</button>
            </Link>
            <Link href="/site/RentPage">
              <button className="text-gray-800">Rent</button>
            </Link>
            <Link href="/site/servicePage">
              <button className="text-gray-800">Services</button>
            </Link>
            <Link href="/site/favoritePage">
              <button className="text-gray-800">Favourite</button>
            </Link>
            <div className="relative">
              <button
                onClick={() => setPropertiesOpen(!propertiesOpen)}
                className="text-gray-800 w-full text-left"
              >
                Properties <i className="fa-solid fa-chevron-down ml-1"></i>
              </button>
              {propertiesOpen && (
                <div
                  className={`mt-2 w-full shadow-md rounded-md py-2 ${dropdownStyles}`}
                >
                  <Link href="/site/wallet">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      Wallet
                    </button>
                  </Link>
                  <Link href="/site/portfolio">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      Portfolio
                    </button>
                  </Link>
                  <Link href="/site/refer">
                    <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                      Refer
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
