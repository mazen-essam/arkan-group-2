import NewLaunch from "app/componenets/newLunches/NewLunch";
import Rent from "../home/Rent";
import Link from "next/link";

export default function page() {
  return (
    <section className="container mx-auto py-12 pt-44">
      {/* Logo Section */}
      <div className="bg-[url('/img1.png')] bg-cover bg-center pt-36 pb-36  px-12">
        <div className="flex flex-col   text-white  ">
          <h1 className="text-7xl font-bold text-center  text-white py-8">
            Welcome to ARKAN Platform
          </h1>

          {/* <p className="mb-8">Sara Maged - March 16, 2025</p>
          <p>
            Before diving into the Hyde Park 6th Settlement master plan, let's
            ask you some questions. Have you heard of the 6th Settlement? It’s
            quickly becoming a coveted spot in New Cairo! Now, let’s shine a
            light on the real estate...
          </p> */}
        </div>
      </div>
      <div>
        <NewLaunch />
      </div>
      <div>
        <Rent header={"Our Top Appartments"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-1 bg-gray-300 rounded-lg p-8">
          <h1 className="text-3xl font-semibold text-[rgb(0,48,85)]">CIL</h1>
          <p>No Leads</p>
        </div>
        <div className="col-span-1 bg-gray-300 rounded-lg p-8">
          <h1 className="text-3xl font-semibold text-[rgb(0,48,85)]">EOI</h1>
          <p>No Leads</p>
        </div>
        <div className="col-span-1 bg-gray-300 rounded-lg p-8">
          <h1 className="text-3xl font-semibold text-[rgb(0,48,85)]">
            Reservation
          </h1>
          <p>No Leads</p>
        </div>
        <div className="col-span-1 bg-gray-300 rounded-lg p-8">
          <h1 className="text-3xl font-semibold text-[rgb(0,48,85)]">
            Sale Claim
          </h1>
          <p>No Leads</p>
        </div>
        <div>
          <Link href={"/site/sales"} className="bg-[rgb(0,48,85)] text-white px-6 py-2 text-lg font-semibold uppercase rounded-lg transition-colors duration-300">
            Manage
          </Link>
        </div>
      </div>
    </section>
  );
}
