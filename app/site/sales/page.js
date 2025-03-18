"use client";
import { useState } from "react";
import SalesCard from "./SalesCard";

function Page() {
  const [activeTab, setActiveTab] = useState("CIL"); // State to manage the active tab

  // Memoize tab content to avoid unnecessary re-renders
  const renderTabContent = () => {
    switch (activeTab) {
      case "CIL":
        return <SalesCard name={"CIL"} content={""} />;
      case "EOL":
        return <SalesCard name={"EOL"} content={""} />;
      case "Reservation":
        return <SalesCard name={"Reservation"} content={""} />;
      case "Sale":
        return <SalesCard name={"Sale"} content={""} />;
      default:
        return null;
    }
  };

  return (
    <section className=" bg-gray-50">
      <div className="pt-32 container mx-auto pb-12">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-semibold text-[rgb(0,48,85)]">
           Sales Pipleline
          </h1>
          <p className="mt-4 text-2xl font-semibold text-[rgb(0,48,85)]">
            View all your investments
          </p>
        </div>

        {/* Tabs */}
        <div className="p-12 bg-gray-300 rounded-lg">
          <div className="flex   mb-8 gap-12 ">
            <button
              onClick={() => setActiveTab("CIL")}
              className={`px-6 py-2 text-lg font-semibold uppercase flex-1 ${
                activeTab === "CIL"
                  ? "bg-[rgb(0,48,85)] text-white"
                  : "bg-gray-200 text-[rgb(0,48,85)]"
              } rounded-lg transition-colors duration-300`}
            >
              CIL
            </button>
            <button
              onClick={() => setActiveTab("EOL")}
              className={`px-6 py-2 text-lg font-semibold uppercase flex-1 ${
                activeTab === "EOL"
                  ? "bg-[rgb(0,48,85)] text-white"
                  : "bg-gray-200 text-[rgb(0,48,85)]"
              } rounded-lg transition-colors duration-300`}
            >
              EOL
            </button>
            <button
              onClick={() => setActiveTab("Reservation")}
              className={`px-6 py-2 text-lg font-semibold uppercase flex-1 ${
                activeTab === "Reservation"
                  ? "bg-[rgb(0,48,85)] text-white"
                  : "bg-gray-200 text-[rgb(0,48,85)]"
              } rounded-lg transition-colors duration-300`}
            >
              Reservation
            </button>
            <button
              onClick={() => setActiveTab("Sale")}
              className={`px-6 py-2 text-lg font-semibold uppercase flex-1 ${
                activeTab === "Sale"
                  ? "bg-[rgb(0,48,85)] text-white"
                  : "bg-gray-200 text-[rgb(0,48,85)]"
              } rounded-lg transition-colors duration-300`}
            >
              Sale Claim
            </button>
          </div>

          {/* Tab Content */}
          <div className="">{renderTabContent()}</div>
        </div>
      </div>
    </section>
  );
}

export default Page;
