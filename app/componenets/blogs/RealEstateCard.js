import Image from "next/image";

const RealEstateCard = ({ img }) => {
  return (
    <div className="flex items-center gap-4  pb-4">
      {/* Image */}
      <div className="w-36 h-36 relative">
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
        <h3 className="text-lg font-semibold hover:text-blue-700 duration-200  hover:underline cursor-pointer">
          All Your Real Estate FAQs Answered
        </h3>
        <p className="text-sm text-blue-500">Real Estate Breakdown</p>
        <p className="text-sm text-gray-500">March 13, 2025</p>
      </div>
    </div>
  );
};

export default RealEstateCard;
