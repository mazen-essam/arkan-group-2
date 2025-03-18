import BlogHeader from "app/componenets/blogs/BlogHeader";
import RealEstateCard from "app/componenets/blogs/RealEstateCard";
import RealEstateList from "app/componenets/blogs/RealEstateList";
import Image from "next/image";

function Page() {
  return (
    <section className="pt-44 container mx-auto pb-24 px-4 sm:px-6 lg:px-8">
      <BlogHeader />
      <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-between">
        <RealEstateCard img={"/img1.png"} />
        <RealEstateCard img={"/img2.jpg"} />
        <RealEstateCard img={"/img3.jpg"} />
      </div>
      <div className="mt-16">
        <h1 className="text-4xl sm:text-6xl font-semibold text-center text-blue-600 mb-12">
          Featured Articles
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          <RealEstateList img={"/img2.jpg"} />
          <RealEstateList img={"/img3.jpg"} />
          <RealEstateList img={"/img1.png"} />
          <RealEstateList img={"/img2.jpg"} />
          <RealEstateList img={"/img3.jpg"} />
          <RealEstateList img={"/img3.jpg"} />
          <RealEstateList img={"/img1.png"} />
          <div className="flex flex-col sm:flex-row gap-4 items-stretch pb-4 sm:col-span-2 lg:col-span-3">
            <div className="w-full sm:w-1/2 relative rounded-lg overflow-hidden">
              <Image
                src={"/background3.jpg"}
                alt="Real Estate FAQs"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="w-full sm:w-1/2 flex flex-col justify-center">
              <h3 className="text-lg font-semibold cursor-pointer text-blue-500">
                Hyde Park
              </h3>
              <p className="text-2xl sm:text-3xl text-black font-semibold hover:text-blue-700 duration-200 cursor-pointer my-4">
                5 FAQs on Hyde Park 6th Settlement: Master Plan, Prices & More
              </p>
              <p className="text-lg">
                Before diving into the Hyde Park 6th Settlement master plan,
                let's ask you some questions. Have you heard of the 6th
                Settlement? It’s quickly becoming...
              </p>
            </div>
          </div>
          <RealEstateList img={"/img3.jpg"} />
          <RealEstateList img={"/img1.png"} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 bg-slate-200 rounded p-8 sm:col-span-2 lg:col-span-3">
            {[...Array(6)].map((_, index) => (
              <div key={index}>
                <h3 className="font-semibold cursor-pointer text-blue-500">
                  Hyde Park
                </h3>
                <p className="text-xl sm:text-2xl text-black font-semibold hover:text-blue-700 duration-200 cursor-pointer my-2">
                  5 FAQs on Hyde Park 6th Settlement: Master Plan, Prices & More
                </p>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-4xl sm:text-6xl font-semibold text-center text-blue-600 mb-12 mt-32">
          Talk Show
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {[...Array(2)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 items-stretch pb-4"
            >
              <div className="w-full sm:w-1/2 relative rounded-lg overflow-hidden">
                <Image
                  src={"/background3.jpg"}
                  alt="Real Estate FAQs"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="w-full sm:w-1/2 flex flex-col justify-center mt-12 mb-12">
                <p className="text-2xl sm:text-3xl text-black font-semibold hover:text-blue-700 duration-200 cursor-pointer my-4">
                  5 FAQs on Hyde Park 6th Settlement: Master Plan, Prices & More
                </p>
                <h3 className="text-lg font-semibold cursor-pointer text-blue-500">
                  Hyde Park{" "}
                  <span className="text-gray-400 pl-4">March 16, 2025</span>
                </h3>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {[...Array(10)].map((_, index) => (
            <RealEstateList
              key={index}
              img={index % 2 === 0 ? "/img1.png" : "/img2.jpg"}
            />
          ))}
          <button className="col-span-full sm:col-span-1 lg:col-span-1 bg-blue-950 text-white py-2 rounded-lg w-full sm:w-4/6 mx-auto">
            Read More
          </button>
        </div>
        <div className="bg-gray-200 p-8 rounded-lg mt-32">
          <h1 className="text-4xl sm:text-6xl font-bold text-center mb-16">
            Latest
          </h1>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/2">
              <Image
                src="/img2.jpg"
                alt="Hyde Park"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              {[...Array(5)].map((_, index) => (
                <div key={index} className="pb-4">
                  <h2 className="text-xl font-semibold cursor-pointer text-blue-600 hover:text-blue-800 duration-200">
                    {
                      [
                        "Hyde Park",
                        "Real Estate Breakdown",
                        "Real Estate Investing",
                        "Real Estate Developers",
                        "Nawy bytes",
                      ][index]
                    }
                  </h2>
                  <p className="text-2xl sm:text-4xl text-black font-semibold hover:text-blue-700 duration-200 cursor-pointer my-4">
                    {
                      [
                        "5 FAQs on Hyde Park 6th Settlement: Master Plan, Prices & More",
                        "All Your Real Estate FAQs Answered",
                        "List Property for Rent: A Comprehensive Guide",
                        "Hisham Talaat Moustafa Profile & Success Story",
                        "What You Need To Know About Ramadan Ads 2025",
                      ][index]
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 pb-4 w-full md:w-1/2">
            <h2 className="text-xl font-semibold cursor-pointer text-blue-600 hover:text-blue-800 duration-200">
              Hyde Park
            </h2>
            <p className="text-2xl sm:text-4xl text-black font-semibold hover:text-blue-700 duration-200 cursor-pointer my-4">
              5 FAQs on Hyde Park 6th Settlement: Master Plan, Prices & More
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page;
