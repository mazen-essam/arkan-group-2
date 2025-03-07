"use client";
import { useState } from "react";
import MoneyManagment from "./MoneyManagment";
import Payment from "./Payment";
function Page() {
  const [activeTab, setActiveTab] = useState("payment"); // State to manage the active tab

  // Memoize tab content to avoid unnecessary re-renders
  const renderTabContent = () => {
    switch (activeTab) {
      case "payment":
        return <Payment />;
      case "moneyManagement":
        return <MoneyManagment />;
      default:
        return null;
    }
  };

  return (
    <section className=" bg-gray-50">
      <div className="pt-32 container mx-auto pb-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-semibold text-[rgb(0,48,85)]">Wallet</h1>
          <p className="mt-4 text-2xl font-semibold text-[rgb(0,48,85)]">
            Track your payments and manage your money
          </p>
        </div>

        {/* Tabs */}
        <div className="flex  mb-8">
          <button
            onClick={() => setActiveTab("payment")}
            className={`px-6 py-2 text-lg font-semibold ${
              activeTab === "payment"
                ? "bg-[rgb(0,48,85)] text-white"
                : "bg-gray-200 text-[rgb(0,48,85)]"
            } rounded-l-lg transition-colors duration-300`}
          >
            Payment
          </button>
          <button
            onClick={() => setActiveTab("moneyManagement")}
            className={`px-6 py-2 text-lg font-semibold ${
              activeTab === "moneyManagement"
                ? "bg-[rgb(0,48,85)] text-white"
                : "bg-gray-200 text-[rgb(0,48,85)]"
            } rounded-r-lg transition-colors duration-300`}
          >
            Money Management
          </button>
        </div>

        {/* Tab Content */}
        <div className="">{renderTabContent()}</div>
      </div>
    </section>
  );
}

export default Page;
