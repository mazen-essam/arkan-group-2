import { HiChevronRight } from "react-icons/hi2";

function Page() {
  return (
    <section className=" bg-gray-50">
      <div className="pt-32 container mx-auto pb-12">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-semibold text-[rgb(0,48,85)]">
            Refer Friends & Family
          </h1>
          <p className="mt-4 text-2xl font-semibold text-[rgb(0,48,85)]">
            Give your loved ones early access to this exclusive real estate
            investment platform
          </p>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
          <div className="lg:col-span-2 col-span-1 bg-white p-8 shadow-2xl rounded-2xl">
            <h2 className="text-2xl font-semibold text-[rgb(0,48,85)] ">
              Share the experience
            </h2>
            <p className="text-lg font-medium mt-6">
              Invite your friends to join our community with a one-time link or
              QR code.
            </p>
            <p className="text-lg font-medium mt-4">
              Make sure to read our{" "}
              <span className="underline text-[rgb(0,144,122)]">
                referral policy
              </span>
              , and understand that this link is meant for one-time use only.
            </p>
            <div className="flex gap-4 mt-6">
              <button className="bg-[rgb(0,48,85)] text-white px-12 py-3 rounded-lg mt-4 text-lg font-semibold border-2 border-[rgb(0,48,85)]  hover:bg-white hover:text-[rgb(0,48,85)] transition-colors duration-200">
                Share link
              </button>{" "}
              <button className="bg-white text-[rgb(0,48,85)] px-12 py-3 rounded-lg mt-4 text-lg font-semibold border-2 border-[rgb(0,48,85)] hover:bg-[rgb(0,48,85)] hover:text-white transition-colors duration-200">
                Share QR
              </button>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-1/3 lg:w-full bg-[rgba(67,67,215,0.12)] max-h-24 rounded-xl flex justify-between gap-10 items-center p-4 hover:bg-[rgba(67,67,215,0.07)] transition-colors duration-200">
              <div>
                <p className=" text-lg">Links</p>
                <p className=" text-xl">
                  <span className="font-semibold">0</span> / 3
                </p>
              </div>
              <div>
                <HiChevronRight size={24} />
              </div>
            </div>
            <div className="w-1/3 lg:w-full bg-[rgba(156,87,190,0.12)] max-h-24 rounded-2xl flex justify-between gap-10 items-center p-4 hover:bg-[rgba(156,87,190,0.07)] transition-colors duration-200">
              <div>
                <p className=" text-lg">Sign ups</p>
                <p className=" text-xl">
                  <span className="font-semibold">0</span>
                </p>
              </div>
              <div>
                <HiChevronRight size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
      </div>
    </section>
  );
}

export default Page;
