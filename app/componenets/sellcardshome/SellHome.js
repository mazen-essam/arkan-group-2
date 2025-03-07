import Image from "next/image";
import Link from "next/link";
const SellHome = () => {
  return (
    <section className="container mx-auto my-16 mt-32">
      <div className="flex gap-6 justify-between flex-wrap sm:flex-nowrap">
        <Link href="/site/servicePage" className="w-full">
          <div className="card relative w-full bg-[rgb(255,239,230)] rounded-lg p-10 overflow-hidden cursor-pointer">
            <div className="absolute top-[-14px] right-0  w-32 h-32 z-10">
              <Image
                src="https://www.nawy.com/assets/icons/common/nawy-now-logo.svg"
                alt="Image 1"
                layout="fill"
                objectFit=""
              />
            </div>
            <h2 className="text-2xl text-[rgb(218,61,0)] font-bold leading-5 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-[rgb(30,65,100)]">
              This is Arkan Group's services.
            </p>
          </div>
        </Link>
        <Link  href="/site/RentPage"  className="w-full">
          <div className="card relative w-full bg-[rgb(247,247,247)] rounded-lg p-10 cursor-pointer">
            <div className="absolute top-[-14px] right-0  w-32 h-32 z-10">
              <Image
                src="https://www.nawy.com/assets/icons/common/nawy-sell-logo.svg"
                alt="Image 2"
                layout="fill"
                className=""
              />
            </div>
            <h2 className="text-2xl text-[rgb(30,65,100)] font-bold leading-5 mb-6">
              Buy a New Home
            </h2>
            <p className="text-lg text-[rgb(30,65,100)]">
              search for your dream home.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SellHome;
