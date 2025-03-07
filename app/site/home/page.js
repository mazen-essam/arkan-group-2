import Image from "next/image";
import Brands from "./Brands";
import Rent from "./Rent";
import Service from "./Service";
import Pathways from "./Path";
import BannerContainer from "app/componenets/banner/BannerContainer";
import NewLunch from "app/componenets/newLunches/NewLunch";
import SellHome from "app/componenets/sellcardshome/SellHome";

export default function Home() {
  return (
    <>
      <section>
        <main className="w-full relative bg-transparent md:mb-44 mb-80">
          {/* Hero Section */}
          <div className="max-h-[500px] w-full h-screen relative flex flex-col items-center justify-center">
            {/* Background Image */}
            <div className="relative w-full h-screen">
              <Image
                src="/background3.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="brightness-75"
              />
              <div className="absolute inset-0 backdrop-blur-md bg-black/30"></div>
            </div>

            {/* Hero Content */}
            <div className="absolute sm:bottom-[-110px] bottom-[-250px] flex flex-col items-center w-full text-base container px-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl text-white text-center w-full mb-8">
                Let's find a villa that's perfect for you
              </h1>
              <div className="inputs p-6 sm:p-8 bg-white rounded-lg w-full shadow-xl">
                {/* Search Input */}
                <div className="input mb-6">
                  <label className="text-lg font-bold" htmlFor="search-input">
                    Looking for
                  </label>
                  <input
                    type="text"
                    className="mt-2 peer block w-full min-h-[auto] bg-transparent px-4 py-3 leading-[1.6] text-black placeholder:text-neutral-400 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                    id="search-input"
                    placeholder="What are you looking for?"
                  />
                </div>

                {/* Filter Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="input">
                    <label className="text-lg font-bold" htmlFor="type-input">
                      Type
                    </label>
                    <input
                      type="text"
                      className="mt-2 peer block w-full min-h-[auto] bg-transparent px-4 py-3 leading-[1.6] text-black placeholder:text-neutral-400 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                      id="type-input"
                      placeholder="Type"
                    />
                  </div>
                  <div className="input">
                    <label className="text-lg font-bold" htmlFor="price-input">
                      Price
                    </label>
                    <input
                      type="text"
                      className="mt-2 peer block w-full min-h-[auto] bg-transparent px-4 py-3 leading-[1.6] text-black placeholder:text-neutral-400 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                      id="price-input"
                      placeholder="Price"
                    />
                  </div>
                  <div className="input">
                    <label className="text-lg font-bold" htmlFor="location-input">
                      Location
                    </label>
                    <input
                      type="text"
                      className="mt-2 peer block w-full min-h-[auto] bg-transparent px-4 py-3 leading-[1.6] text-black placeholder:text-neutral-400 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                      id="location-input"
                      placeholder="Location"
                    />
                  </div>
                  <div className="input flex items-end justify-end">
                    <button className="w-full sm:w-auto searchButton rounded-md font-medium text-white px-8 py-3 bg-gradient-to-b from-[rgba(75,2,75,0.655)] to-[rgba(213,56,213,0.852)] hover:opacity-90 transition-opacity text-lg">
                      <i className="fa-solid fa-magnifying-glass mr-2"></i>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Brands Section */}
        <Brands />

        {/* Pathways Section */}
        <div className="container mx-auto px-4">
          <div className="sc-ac835cae-0 RfLWL">
            <h1 className="font-bold text-2xl mb-6">
              What Are You Looking For?
            </h1>
            <Pathways />
          </div>
        </div>

        {/* Rent Section */}
        <Rent />

        {/* Sell Home Section */}
        <SellHome />

        {/* New Launches Section */}
        <NewLunch />

        {/* Service Section */}
        <Service />
      </section>
    </>
  );
}