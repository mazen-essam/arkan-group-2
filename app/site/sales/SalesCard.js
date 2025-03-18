import React from "react";

export default function SalesCard({ name, content }) {
  return (
    <div className="relative">
      <h3>{name}</h3>
      <p>{content != "" ? content : `No ${name}`}</p>
      <button className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full px-4 py-2">Add {name}</button>
    </div>
  );
}
