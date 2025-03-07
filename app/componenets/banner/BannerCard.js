import Image from "next/image";

const BannerCard = ({ data }) => {
    return (
      <div
        className="w-1/3 p-3 rounded-2xl shadow-lg bg-cover bg-center flex gap-4"
        style={{
          backgroundImage: `url(${data.bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="w-1/2 p-4 rounded-lg ">
          {data.optionalImg ? (
            <Image
              src={data.optionalImg}
              alt="Card"
              layout="fill"
              objectFit="contain"
              className="rounded-lg p-6"
              
            />
          ) : (
            <>
              <h1 className="text-xl font-bold">{data.title}</h1>
              <p className="text-gray-700">{data.description}</p>
            </>
          )}
        </div>
        {data.imgSrc && (
          <div className="relative w-1/2 ms-auto">
            <Image
              src={data.imgSrc}
              alt="Card"
              layout="fill"
              objectFit="contain"
              className="rounded-lg p-6"
            
            />
          </div>
        )}
      </div>
    );
  };
  
  export default BannerCard;


//   const BannerCard = ({ data }) => {
//   return (
//     <div
//       className="w-1/3 p-8 rounded-2xl shadow-lg bg-cover bg-center flex gap-4"
//       style={{
//         backgroundImage: `url(${data.bgImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {data.optionalImg ? (
//         <div className="relative w-full h-full">
//           <img
//             src={data.optionalImg}
//             alt="Optional"
//             className="object-cover w-full h-full rounded-lg"
//           />
//         </div>
//       ) : (
//         <div className="w-1/2 p-4 rounded-lg">
//           <h1 className="text-xl font-bold">{data.title}</h1>
//           <p className="text-gray-700">{data.description}</p>
//         </div>
//       )}
//       {data.imgSrc && (
//         <div className="relative w-1/2">
//           <img
//             src={data.imgSrc}
//             alt="Card"
//             className="object-cover w-full h-full rounded-lg"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default BannerCard;