import Image from "next/image";
import Link from "next/link";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

function Current() {
  // Sample data for transactions

  return (
    <div>

      <div className="bg-white p-6 rounded-2xl ">
        <div className="mt-6 flex justify-center">
          <Image
            src="https://shares.nawy.com/_next/static/media/building-07.b3b45ba9.svg"
            alt="Property"
            width={56}
            height={56}
          />
        </div>

        <p className="mt-4 text-center font-medium text-lg">
        You don't have any exited investments yet
        </p>
        <p className="mt-4 text-center  text-lg">
        Start browsing all properties to pick a new investment opportunity


        </p>
        <div className="flex justify-center mt-4">
          <Link href={"/site/properties"}>
          <button className="bg-[rgb(0,48,85)] text-white px-12 py-3 rounded-lg mt-4 text-lg font-semibold hover:bg-[rgba(0,37,75,0.7)] transition-colors duration-200">
            Browse Properties
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Current;
