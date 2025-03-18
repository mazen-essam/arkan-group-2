import Image from "next/image";

const RealEstateList = ({ img }) => {
  return (
    <div className="flex  flex-col items-center gap-4  pb-4">
      {/* Image */}
      <div className="w-full h-52 relative">
        <Image
          src={img} // Replace with actual image path
          alt="Real Estate FAQs"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div>
        <p className="text-sm text-blue-500">Real Estate Breakdown</p>
        <h3 className="text-lg font-semibold hover:text-blue-700 duration-200  hover:underline cursor-pointer">
          All Your Real Estate FAQs Answered
        </h3>
      </div>
    </div>
  );
};

export default RealEstateList;
