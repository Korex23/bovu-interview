import React from "react";
import type { Transaction } from "../types";
import {
  ShoppingBag,
  Instagram,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  ArrowUp,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import pakistan from "@/assets/pakistan.png";

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionIcon = ({ category }: { category: string }) => {
  switch (category.toLowerCase()) {
    case "shopping":
      return <ShoppingBag size={20} className="text-white" />;
    case "social":
      return <Instagram size={20} className="text-white" />;
    case "education":
      return <GraduationCap size={20} className="text-white" />;
    default:
      return <ShoppingBag size={20} className="text-white" />;
  }
};

const TransactionBg = (category: string) => {
  switch (category.toLowerCase()) {
    case "shopping":
      return "bg-purple-900";
    case "social":
      return "bg-cyan-500";
    case "education":
      return "bg-orange-400";
    default:
      return "bg-gray-800";
  }
};

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="flex flex-col mb-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">All Transactions</h2>
          <div className="space-x-4">
            <button className="p-2 hover:bg-white/50 rounded-full transition">
              <ArrowLeft size={18} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-white/50 rounded-full transition">
              <ArrowRight size={18} className="text-gray-600" />
            </button>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="text-gray-400 font-bold text-lg mt-4">
            This Week Summary
          </p>
        </div>
      </div>

      <div className="flex items-center flex-wrap justify-between gap-8 mb-3 rounded-2xl">
        <div className="flex flex-col">
          <span className="text-[28px] flex items-center gap-1 font-bold text-gray-800">
            <img src={pakistan} className="rounded-full w-8 h-8" alt="" />
            113,650 <span className="text-gray-400 font-bold">PKR</span>
          </span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center text-green-600 text-md font-bold">
            <ArrowUp size={20} className="mr-1" />
            <span className="flex gap-1">
              <span className="text-black">24,000</span>
              <span className="text-gray-400 font-bold">PKR</span>
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center text-red-500 text-md font-bold">
            <ArrowDown size={20} className="mr-1" />
            <span className="flex gap-1">
              <span className="text-black">4,000</span>
              <span className="text-gray-400 font-bold">PKR</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3.5 grow overflow-y-auto pt-3 no-scrollbar">
        {transactions.map((t) => (
          <div key={t.id} className="relative group">
            <div
              className="
      pointer-events-none absolute inset-0 rounded-md bg-[#F0EDFE]
      border-2 border-dashed border-gray-400
      opacity-100 transition-opacity duration-200
      group-hover:opacity-100
    "
            />

            <div
              className="
      relative z-20
      flex flex-col lg:flex-row lg:items-center lg:justify-between
      gap-3 lg:gap-6
      p-3 lg:p-4 rounded-md
      bg-[#F5F3F8]
      border border-transparent
      transition-all duration-200 ease-out
      hover:border-white hover:bg-white
      lg:hover:-translate-y-3 lg:hover:translate-x-3
    "
            >
              {/* Left */}
              <div className="flex items-center gap-3 lg:gap-4 min-w-0">
                <div
                  className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center shadow-md ${TransactionBg(
                    t.category,
                  )}`}
                >
                  <TransactionIcon category={t.category} />
                </div>

                <div className="min-w-0">
                  <h4 className="font-bold text-gray-800 truncate">
                    {t.title}
                  </h4>
                  <p className="text-xs text-slate-400 truncate">
                    {t.category === "social"
                      ? "Content Creator Earning"
                      : t.category === "shopping"
                        ? "Departmental Store"
                        : "Personal Expenses"}
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="flex items-center justify-between lg:justify-end gap-3 lg:gap-6">
                <span className="font-bold text-gray-800 whitespace-nowrap">
                  {t.type === "expense" ? "" : "+"}
                  {t.amount.toLocaleString()}{" "}
                  <span className="text-gray-400">{t.currency}</span>
                </span>

                <div
                  className={`w-14 h-9 lg:w-16 lg:h-10 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
                    t.status ? "bg-[#52459D]" : "bg-gray-300"
                  }`}
                >
                  <div
                    className={`bg-white w-7 h-7 lg:w-8 lg:h-8 rounded-full flex justify-center items-center shadow-md transform transition-transform duration-300 ${
                      t.type === "income"
                        ? "translate-x-5 lg:translate-x-6"
                        : "translate-x-0"
                    }`}
                  >
                    {t.type === "income" ? (
                      <TrendingUp size={18} className="text-green-600" />
                    ) : (
                      <TrendingDown size={18} className="text-red-600" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
