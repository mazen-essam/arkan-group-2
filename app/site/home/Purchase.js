import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import Card from "../Cards/rentCard";
export default function Purchase() {
    const data = [{
        id: 1,
        src: "/background3.jpg",
        title: "Griya Aari tamansari",
        alt: "A scenic view",
        price: '500,000 AED'
    },
    {
        id: 2,
        src: "/background3.jpg",
        title: "Griya Aari tamansari",
        alt: "A scenic view",
        price: '500,000 AED'
    },
    {
        id: 3,
        src: "/background3.jpg",
        title: "Griya Aari tamansari",
        alt: "A scenic view",
        price: '500,000 AED'
    }
    ];
    return (
        <section style={{ padding: '50px 0' }}>
            <h1 style={{ fontWeight: 'bolder', fontSize: 'larger', marginBottom: '25px' }}>Explore our Apartments for purchasing</h1>
            <div className="purchase grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(data.map((item) => (
                    <Link href='/site/RentPage'>
                        <Card
                            key={item.id}
                            src={item.src}
                            alt={item.alt}
                            title={item.title}
                            price={item.price}
                        />
                    </Link>
                )))}

            </div>
        </section >
    )

}