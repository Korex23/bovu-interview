import React, { useMemo } from "react";
import type { User } from "../types";
import { ChevronsUpDown, Wallet } from "lucide-react";

interface HeaderProps {
  user: User;
}

const getGreeting = () => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) return "Good Morning";
  if (hour >= 12 && hour < 17) return "Good Afternoon";
  if (hour >= 17 && hour < 22) return "Good Evening";
  return "Good Night";
};

const Header: React.FC<HeaderProps> = ({ user }) => {
  const greeting = useMemo(getGreeting, []);

  return (
    <div className="flex justify-between items-center mb-8 gap-4">
      <div>
        <h1 className="text-base md:text-xl font-semibold text-gray-800 tracking-tight">
          {greeting} {user.name.split(" ")[0]}!
        </h1>
      </div>

      <div className="flex items-center gap-4 self-end md:self-auto sm:-translate-x-13">
        <div className="flex items-center bg-[#F0EDFE] md:px-4 md:py-3 px-2 py-1.5 rounded-sm border border-[#F0EDFE] shadow-sm text-black text-sm font-bold cursor-pointer hover:bg-white/60 transition">
          <span className="mr-2 md:text-base text-xs">Personal Account</span>
          <ChevronsUpDown size={16} />
        </div>

        <button className="p-3 bg-[#52459D] text-white rounded-sm shadow-lg hover:bg-purple-700 transition transform hover:scale-105 active:scale-95 md:block hidden">
          <Wallet size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
