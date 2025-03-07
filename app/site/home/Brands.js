"use client";

import Image from "next/image";

const brandLogos = [
  { id: 1, src: "/brand1.jpg", alt: "Google" },
  { id: 2, src: "/brand2.png", alt: "Booking.com" },
  { id: 3, src: "/brand3.jpg", alt: "Basecamp" },
  { id: 4, src: "/brand4.png", alt: "Microsoft" },
];

export default function Brands() {
  return (
    <section className="bg-white rounded-lg py-12 my-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <p className="text-center text-lg font-bold mb-8">
          Trusted by 20,000+ companies
        </p>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {brandLogos.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4"
            >
              <div className="relative w-36 h-36">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}