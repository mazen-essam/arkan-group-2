import BannerCard from "./BannerCard";


const fakeData = [
    {
      bgImage: "https://www.nawy.com/_next/static/media/desktop-map-banner-en.49abdea4.png",
      imgSrc: "",
      title: "City Life",
      description: "Experience the vibrant energy of urban landscapes.",
      optionalImg: "", // No optional image for this card
    },
    {
      bgImage: "https://www.nawy.com/assets/images/banners/offers-bg-desktop.webp",
      imgSrc: "https://www.nawy.com/assets/images/offers/percent.svg",
      title: "Nature Escape",
      description: "Reconnect with nature and find inner peace.",
      optionalImg: "https://www.nawy.com/assets/images/offers/offers-desktop-en.svg", // No optional image for this card
    },
    {
      bgImage: "",
      imgSrc: "https://www.nawy.com/assets/images/common/shares-banner-desktop-en.svg",
      title: "Ocean Breeze",
      description: "Feel the refreshing breeze of the open sea.",
      optionalImg: "https://www.nawy.com/assets/images/common/shares-desktop-text-en.svg", // New optional image for the last card

    },
  ];
  

function BannerContainer() {
  return (
    <div className="container mx-auto flex gap-8 py-16">
      {fakeData.map((data) => (
        <BannerCard key={data.title} data={data} />
      ))}
    </div>
  );
}

export default BannerContainer;