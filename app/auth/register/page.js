import Image from "next/image";
import Link from "next/link";
import ChooseCountry from "./ChooseCountry";

export default function Register() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-12 pt-32 relative">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 bg-[url('/background3.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-black before:bg-opacity-50 before:backdrop-blur-md"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Navbar */}
       

        {/* Card Container */}
        <div className="max-w-3xl mx-auto bg-gray-300 rounded-2xl shadow-2xl p-8 text-center">
        <nav className="flex justify-between items-center mb-8 px-8">
          <Image src="/arkan-logo.png" alt="Logo" width={100} height={100} />
          <div className="relative">
            <ChooseCountry />
          </div>
        </nav>
          {/* Heading */}
          <h2 className="font-bold text-3xl text-gray-800">Create Aqar Tech Account</h2>
          <p className="text-gray-500 mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Sign-Up Options */}
          <div className="mt-6 space-y-4">
            <Link href="/auth/signup">
              <button className="w-full bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center justify-center">
                <i className="fas fa-envelope text-lg mr-2"></i> Sign up with Email
              </button>
            </Link>

            <button className="w-full bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center justify-center">
              <i className="fab fa-google text-lg mr-2"></i> Sign up with Google
            </button>

            <button className="w-full bg-gray-300 hover:bg-gray-400 text-black font-semibold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 flex items-center justify-center">
              <i className="fab fa-facebook text-lg mr-2 text-blue-600"></i> Sign up with Facebook
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="h-px w-1/4 bg-gray-400"></div>
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <div className="h-px w-1/4 bg-gray-400"></div>
          </div>

          {/* Login Link */}
          <p className="mt-5 font-semibold">
            Already have an Aqar account?{' '}
            <Link href="/auth/signin">
              <button className="text-purple-600 hover:text-purple-700">Log in</button>
            </Link>
          </p>
        </div>

        {/* Terms and Conditions */}
        <div className="text-center mt-6 text-sm text-gray-500">
          <p>
            By proceeding, you agree to the{' '}
            <span className="text-purple-600 hover:text-purple-700 cursor-pointer">terms and conditions</span> and{' '}
            <span className="text-purple-600 hover:text-purple-700 cursor-pointer">privacy policy</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
