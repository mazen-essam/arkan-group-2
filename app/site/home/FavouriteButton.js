"use client";

import { useState, useEffect } from "react";

export default function FavouriteButton({ property }) {
    const [isFavourite, setIsFavourite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setIsFavourite(favorites.some(fav => fav.id === property.id));
    }, [property.id]);

    const handleClick = () => {
        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (isFavourite) {
            // Remove from favorites
            favorites = favorites.filter(fav => fav.id !== property.id);
        } else {
            // Add to favorites
            favorites.push(property);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
        setIsFavourite(!isFavourite);
    };

    return (
        <div
            style={{
                background: 'white', position: 'absolute', top: '10px', right: '10px',
                padding: '10px', borderRadius: '50%', width: '50px', height: '50px',
                textAlign: 'center', fontSize: '25px', cursor: 'pointer'
            }}
            onClick={handleClick}
        >
            <i
                className={`fa-heart ${isFavourite ? "fa-solid text-red-500" : "fa-regular text-black"}`}
            ></i>
        </div>
    );
}
