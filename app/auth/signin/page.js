import Image from "next/image";
import SigninValidation from "./SigninValidation";

export default function Signin() {
  
  return (
    <section className="min-h-screen flex items-center justify-center py-12 pt-32 relative">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 bg-[url('/background3.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:backdrop-blur-md"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Card Container */}
        <div className="max-w-3xl mx-auto bg-gray-300 rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image src="/arkan-logo.png" alt="Logo" width={170} height={170} />
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="font-bold text-3xl text-gray-800">Sign In</h1>
            <p className="text-gray-500 mt-2 text-sm">
              Welcome! Please fill the details to get started.
            </p>
          </div>

          {/* Social Sign-In Buttons */}
          <div className="mt-6 space-y-4">
            <button className="w-full bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-800 hover:text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 transition-all duration-300 flex items-center justify-center">
              <i className="fab fa-google text-lg mr-2"></i> Sign in with Google
            </button>

            <button className="w-full bg-transparent text-gray-700 border border-gray-300 hover:bg-blue-600 hover:text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300 flex items-center justify-center">
              <i className="fab fa-facebook text-blue-600 text-lg mr-2 group-hover:text-white"></i>{" "}
              Sign in with Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="h-px w-1/4 bg-gray-300"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="h-px w-1/4 bg-gray-300"></div>
          </div>

          {/* Sign-In Form */}
          <SigninValidation />

          {/* Terms and Conditions */}
          <div className="text-center mt-6 text-sm text-gray-500">
            <p>
              By proceeding, you agree to the{" "}
              <span className="text-purple-600 hover:text-purple-700 cursor-pointer">
                terms and conditions
              </span>{" "}
              and{" "}
              <span className="text-purple-600 hover:text-purple-700 cursor-pointer">
                privacy policy
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
