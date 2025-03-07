"use client";
import { useState } from "react";
import Current from "./Current";
import Exited from "./Exited";
function Page() {
  const [activeTab, setActiveTab] = useState("current"); // State to manage the active tab

  // Memoize tab content to avoid unnecessary re-renders
  const renderTabContent = () => {
    switch (activeTab) {
      case "current":
        return <Current />;
      case "exited":
        return <Exited />;
      default:
        return null;
    }
  };

  return (
    <section className=" bg-gray-50">
      <div className="pt-32 container mx-auto pb-12">
        <div className="text-center mb-24">
          <h1 className="text-5xl font-semibold text-[rgb(0,48,85)]">
            Portfolio
          </h1>
          <p className="mt-4 text-2xl font-semibold text-[rgb(0,48,85)]">
            View all your investments
          </p>
        </div>

        {/* Tabs */}
        <div className="flex   mb-8">
          <button
            onClick={() => setActiveTab("current")}
            className={`px-6 py-2 text-lg font-semibold uppercase ${
              activeTab === "current"
                ? "bg-[rgb(0,48,85)] text-white"
                : "bg-gray-200 text-[rgb(0,48,85)]"
            } rounded-l-lg transition-colors duration-300`}
          >
            Current investments
          </button>
          <button
            onClick={() => setActiveTab("exited")}
            className={`px-6 py-2 text-lg font-semibold uppercase ${
              activeTab === "exited"
                ? "bg-[rgb(0,48,85)] text-white"
                : "bg-gray-200 text-[rgb(0,48,85)]"
            } rounded-r-lg transition-colors duration-300`}
          >
            Exited investments
          </button>
        </div>

        {/* Tab Content */}
        <div className="">{renderTabContent()}</div>
      </div>
    </section>
  );
}

export default Page;
