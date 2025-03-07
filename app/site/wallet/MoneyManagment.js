import Image from "next/image";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { useState } from "react";

function MoneyManagement() {
  // Sample data for transactions
  const transactions = [
    {
      id: 1,
      date: "2023-10-01",
      amount: "EGP 500",
      status: "Succeeded",
      type: "Top Up",
      description: "Wallet top-up",
    },
    {
      id: 2,
      date: "2023-10-02",
      amount: "EGP 200",
      status: "Failed",
      type: "Withdrawal",
      description: "Withdrawal request",
    },
    {
      id: 3,
      date: "2023-10-03",
      amount: "EGP 100",
      status: "Refunded",
      type: "Installment",
      description: "Monthly installment",
    },
    // Add more transactions as needed
  ];

  // State for filters
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  // Filtered transactions
  const filteredTransactions = transactions.filter((transaction) => {
    return (
      (statusFilter === "all" || transaction.status === statusFilter) &&
      (typeFilter === "all" || transaction.type === typeFilter)
    );
  });

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 col-span-1 bg-white p-6 rounded-2xl shadow-md">
          <p className="mt-6 text-xl font-semibold">Recent Transactions</p>

          {/* Filters */}
          <div className="mt-4 flex gap-4 ">
            <div className="flex flex-col gap-2 w-1/3">
              <p className="text-lg font-semibold mt-4 mb-2">Statuses</p>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg"
              >
                <option value="all">All</option>
                <option value="Succeeded">Succeeded</option>
                <option value="Failed">Failed</option>
                <option value="Refunded">Refunded</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-1/3">
              <p className="text-lg font-semibold mt-4 mb-2">Types</p>

              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="p-2 border border-gray-300 rounded-lg"
              >
                <option value="all">All </option>
                <option value="Top Up">Top Up</option>
                <option value="Withdrawal">Withdrawal</option>
                <option value="Installment">Installment</option>
              </select>
            </div>
          </div>

          {/* Transactions Table */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="">
                  <th className="px-3 py-5 text-left">Date</th>
                  <th className="px-3 py-5 text-left">Amount</th>
                  <th className="px-3 py-5 text-left">Status</th>
                  <th className="px-3 py-5 text-left">Type</th>
                  <th className="px-3 py-5 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b">
                    <td className="px-3 py-5">{transaction.date}</td>
                    <td className="px-3 py-5">{transaction.amount}</td>
                    <td className="px-3 py-5">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          transaction.status === "Succeeded"
                            ? "bg-green-100 text-green-800"
                            : transaction.status === "Failed"
                            ? "bg-red-100 text-red-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-3 py-5">{transaction.type}</td>
                    <td className="px-3 py-5">{transaction.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-1 mt-6 lg:mt-0">
          <div className="bg-[rgb(0,48,85)] text-white p-4 rounded-2xl mb-12">
            <h1 className="font-semibold">My Balance</h1>
            <p className="mt-6 text-2xl ">EGP 0</p>

            <div className="flex gap-4 justify-between">
              <button className="bg-white text-[rgb(0,48,85)] px-14 py-2 rounded-lg mt-4 font-semibold opacity-60 hover:opacity-100 transition-opacity duration-200">
                Pay Now
              </button>
              <button className="bg-white text-[rgb(0,48,85)] px-14 py-2 rounded-lg mt-4 font-semibold opacity-60 hover:opacity-100 transition-opacity duration-200">
                Pay Now
              </button>
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl ">
            <p className="mt-6 text-2xl font-semibold">My Cards</p>
            <div className="mt-6 flex justify-center">
              <Image
                src="https://shares.nawy.com/_next/static/media/credit-card-xl.570edfb4.svg"
                alt="Property"
                width={88}
                height={88}
              />
            </div>

            <p className="mt-4 text-center font-medium text-lg">
              You don’t have any saved payment methods
            </p>
            <div className="flex justify-end mt-4">
              <button className="bg-[rgb(0,48,85)] text-white px-12 py-3 rounded-lg mt-4 text-lg font-semibold hover:bg-[rgba(0,37,75,0.7)] transition-colors duration-200">
                Browse Properties
              </button>
            </div>
          </div>
          <div
            className="p-6 rounded-lg text-white mt-6"
            style={{
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(139deg, rgb(15, 48, 81) -40.11%, rgb(66, 73, 216) -0.45%, rgb(159, 91, 195) 118.69%",
            }}
          >
            <h3 className="text-2xl font-semibold">Facing any issues?</h3>
            <p className="mt-4 text-lg font-medium">
              We are always here to support
            </p>
            <button className="bg-white px-10 py-3 rounded-lg mt-4  font-semibold text-[rgb(0,144,122)]">
              <HiChatBubbleLeftRight
                color="rgb(0,144,122)"
                className="inline text-2xl"
              />{" "}
              Start with live chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoneyManagement;
