"use client";

import { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Plans() {
    let [MonthlyPlan, SetMonthlyPlanState] = useState(true);

    function MonthlyPlanState() {
        return SetMonthlyPlanState(true);
    }

    function YearlyPlanState() {
        return SetMonthlyPlanState(false);
    }

    const plans = [
        { duration: "1 Week", price: "500,000 ADE" },
        { duration: "2 Weeks", price: "1,000,000 ADE" },
        { duration: "3 Weeks", price: "1,500,000 ADE" },
        { duration: "4 Weeks", price: "1,500,000 ADE" },
        { duration: "2 Weeks", price: "2,000,000 ADE" },
        { duration: "3 Weeks", price: "3,000,000 ADE" }
    ];
    
    const plans2 = [
        { duration: "1 Year", price: "500,000 ADE" },
        { duration: "2 Years", price: "1,000,000 ADE" },
        { duration: "3 Years", price: "1,500,000 ADE" },
        { duration: "4 Years", price: "1,500,000 ADE" },
        { duration: "5 Years", price: "2,000,000 ADE" },
        { duration: "6 Years", price: "3,000,000 ADE" }
    ];

    return (
        <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
            <main className="py-6">
                <h1 className="text-center text-lg sm:text-xl lg:text-2xl font-bold my-4">
                    Pick your perfect plan
                </h1>

                {/* Plan Switcher */}
                <div className="flex justify-center mb-6">
                    <div className="bg-gray-200 rounded-full p-1 w-full max-w-xs sm:max-w-sm flex">
                        <button
                            onClick={MonthlyPlanState}
                            className={`flex-1 py-2 text-sm sm:text-base rounded-full font-bold transition ${
                                MonthlyPlan ? "bg-purple-500 text-white" : "text-gray-700"
                            }`}
                        >
                            Monthly
                        </button>
                        <button
                            onClick={YearlyPlanState}
                            className={`flex-1 py-2 text-sm sm:text-base rounded-full font-bold transition ${
                                !MonthlyPlan ? "bg-purple-500 text-white" : "text-gray-700"
                            }`}
                        >
                            Yearly
                        </button>
                    </div>
                </div>

                {/* Plan Cards - Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
                    {(MonthlyPlan ? plans : plans2).map((plan, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg p-4 sm:p-6 flex flex-col justify-between text-center max-w-xs mx-auto w-full"
                        >
                            <p className="font-bold text-lg">{plan.duration}</p>
                            <p className="font-bold text-xl sm:text-2xl my-4">{plan.price}</p>
                            <button
                                type="button"
                                className="w-full py-3 rounded-lg text-white font-semibold transition duration-150 ease-in-out"
                                style={{
                                    background: "linear-gradient(to bottom, rgba(75, 2, 75, 0.655), rgba(213, 56, 213, 0.852))"
                                }}
                            >
                                Purchase plan
                            </button>
                        </div>
                    ))}
                </div>
            </main>
        </section>
    );
}
