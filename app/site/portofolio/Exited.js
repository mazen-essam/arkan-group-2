import Image from "next/image";
import Link from "next/link";
function Exited() {
  return (
    <div>
      <div className="bg-white p-6 rounded-lg ">
        <div className="mt-6 flex justify-center">
          <Image
            src="https://shares.nawy.com/_next/static/media/building-07.b3b45ba9.svg"
            alt="Property"
            width={56}
            height={56}
          />
        </div>
        <h4 className="mt-4 text-center font-bold text-xl">
          You don't own any properties
        </h4>
        <p className="mt-4 text-center font-medium text-lg">
          Start browsing all properties to pick a new investment opportunity
        </p>
        <div className="flex justify-center mt-4">
          <Link href={"/site/properties"}>
            <button className="bg-[rgb(0,48,85)] text-white px-12 py-3 rounded-lg mt-4 text-lg font-semibold ">
              Browse Properties
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Exited;
