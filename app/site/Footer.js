import Image from "next/image";
import { FaGithub, FaTwitter, FaBlog, FaQuestionCircle, FaEnvelope, FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-gray-900 text-white border-t-2 border-gray-800 ">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Short Description Section */}
          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <Image src="/arkan-logo.png" alt="Logo" width={170} height={170} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Arkan</h2>
              <p className="text-gray-400">
                Arkan is a cutting-edge real estate technology platform that
                streamlines property management, buying, and selling through
                innovative digital solutions.
              </p>
            </div>
          </div>

          {/* Footer Links Section */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row justify-evenly gap-8">
            {/* Project Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Project</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Changing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    Commission Icons
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition">
                    All Versions
                  </a>
                </li>
              </ul>
            </div>

            {/* Community Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Community</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                    <FaGithub /> Github
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                    <FaHeart /> Icon Requests
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                    <FaTwitter /> Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                    <FaBlog /> Blog Awesome
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h3 className="text-xl font-bold mb-4">Help</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                    <FaQuestionCircle /> Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                    <FaQuestionCircle /> Troubleshooting
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                    <FaEnvelope /> Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition flex items-center gap-2">
                    <FaQuestionCircle /> Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition">
              License
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Refunds
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              Cookie Preferences
            </a>
          </div>
          <div className="text-gray-400">
            <p className="flex items-center gap-2">
              <i className="fa-regular fa-copyright"></i> Aqar Tech 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}