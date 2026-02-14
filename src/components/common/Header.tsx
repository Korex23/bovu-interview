import React from "react";
import type { User } from "../types";
import { ChevronsUpDown, Wallet } from "lucide-react";

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
      <div>
        <h1 className="text-xl font-semibold text-gray-800 tracking-tight">
          Good Evening {user.name.split(" ")[0]}!
        </h1>
      </div>

      <div className="flex items-center gap-4 self-end md:self-auto">
        <div className="hidden md:flex items-center bg-[#F0EDFE] px-4 py-3  rounded-sm border border-[#F0EDFE] shadow-sm text-black text-sm font-bold cursor-pointer hover:bg-white/60 transition">
          <span className="mr-2">Personal Account</span>
          <ChevronsUpDown size={16} />
        </div>

        <button className="p-3 bg-[#52459D] text-white rounded-sm shadow-lg hover:bg-purple-700 transition transform hover:scale-105 active:scale-95">
          <Wallet size={20} />
        </button>
      </div>
    </div>
  );
};

export default Header;
