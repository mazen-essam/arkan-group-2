import Image from "next/image";

const pathways = [
  {
    href: "/search?category=property&page_number=1&sale_type=developer_sale",
    src: "https://prod-images.cooingestate.com/admin/pathway/image/1/_developer_units_2024-10-23.svg",
    alt: "Developer Units path icon",
    text: "Developer Units",
  },
  {
    href: "/search?sale_type=resale&page_number=1&category=property",
    src: "https://prod-images.cooingestate.com/admin/pathway/image/2/_Resale_2024-10-23.svg",
    alt: "Resale Units path icon",
    text: "Resale Units",
  },
  {
    href: "/cityscape",
    src: "https://prod-images.cooingestate.com/admin/pathway/image/5/_offers_2024-10-23.svg",
    alt: "Offers path icon",
    text: "Offers",
  },
  {
    href: "/nawy-unlocked",
    src: "https://prod-images.cooingestate.com/admin/pathway/image/22/_nawy-unlocked3_2025-01-03.svg",
    alt: "Arkan Unlocked path icon",
    text: "Arkan Unlocked",
  },
  {
    href: "/nawy-now",
    src: "https://prod-images.cooingestate.com/admin/pathway/image/4/_Move_now_2024-10-23.svg",
    alt: "Arkan Now path icon",
    text: "Arkan Now",
  },
  {
    href: "/sell-my-property",
    src: "https://prod-images.cooingestate.com/admin/pathway/image/3/_Sell_my_unit_2024-10-23.svg",
    alt: "Sell Your Unit path icon",
    text: "Sell Your Unit",
  },
];

export default function Pathways() {
  return (
    <div className="flex justify-between gap-4 my-12 lg:flex-nowrap flex-wrap">
      {pathways.map((item, index) => (
        <a key={index} className="flex gap-4 items-center border-2 p-5 w-full rounded-lg" href={item.href}>
          <div className="pathway-icon">
            <Image
              itemProp="image"
              alt={item.alt}
              loading="lazy"
              width={44}
              height={40}
              decoding="async"
              data-nimg={1}
              className="sc-de8a2f44-0 gSspeA"
              src={item.src}
              style={{ color: "transparent", objectFit: "cover" }}
            />
          </div>
          <p>{item.text}</p>
        </a>
      ))}
    </div>
  );
}
