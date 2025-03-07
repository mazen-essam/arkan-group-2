import Image from "next/image";
import { HiChatBubbleLeftRight } from "react-icons/hi2";

function Payment() {
  return (
    <div>
      <div className="bg-[rgb(0,48,85)] text-white p-4 rounded-lg mb-12">
        <h1 className="font-semibold">Next due payment</h1>
        <p className="mt-6 text-2xl ">EGP 0</p>
        <div className="flex justify-between items-center mt-4">
          <p>
            You've reached the maximum number of payments you can pay in
            advance.
          </p>
          <button className="bg-white text-[rgb(0,48,85)] px-14 py-4 rounded-lg mt-4 text-xl font-semibold opacity-60 hover:opacity-100 transition-opacity duration-200">
            Pay Now
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg ">
        <p className="mt-6 text-2xl font-semibold">Scheduled payments</p>
        <div className="mt-24 flex justify-center">
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
          <button className="bg-[rgb(0,48,85)] text-white px-12 py-3 rounded-lg mt-4 text-lg font-semibold ">
            Browse Properties
          </button>
        </div>
      </div>
      <div
        className="p-6 rounded-lg text-white mt-4"
        style={{
          background:
            "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(139deg, rgb(15, 48, 81) -40.11%, rgb(66, 73, 216) -0.45%, rgb(159, 91, 195) 118.69%",
        }}
      >
        <h3 className="text-2xl font-semibold">Facing any issues?</h3>
        <p className="mt-4 text-lg font-medium">We are always here to support</p>
        <button className="bg-white px-10 py-3 rounded-lg mt-4  font-semibold text-[rgb(0,144,122)]"><HiChatBubbleLeftRight color="rgb(0,144,122)" className="inline text-2xl"/> Start with live chat</button>
      </div>
    </div>
  );
}

export default Payment;
