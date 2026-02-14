import React, { useState } from "react";
import {
  Home,
  Grid,
  Wallet,
  Settings,
  MessageSquare,
  Briefcase,
  Gift,
  HelpCircle,
} from "lucide-react";

const Sidebar: React.FC = () => {
  const [active, setActive] = useState("home");

  const menuItems = [
    { id: "home", icon: Home },
    { id: "apps", icon: Grid },
    { id: "wallet", icon: Wallet },
    { id: "portfolio", icon: Briefcase },
    { id: "messages", icon: MessageSquare },
    { id: "gifts", icon: Gift },
    { id: "settings", icon: Settings },
  ];

  return (
    <div className="hidden md:flex flex-col items-center py-8 px-4 w-20 bg-[#52459D] backdrop-blur-xl rounded-full border border-[#52459D] shadow-2xl justify-between sticky top-10 ml-4">
      <div className="flex flex-col gap-3 w-full items-center">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`p-3 rounded-full transition-all duration-300 group relative focus:outline-none ${
                isActive
                  ? "bg-[#423698] border-[#392e89] border-2 text-white shadow-lg"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={20} />
              {/* {isActive && (
                <span className="absolute -right-1 top-1 flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
              )} */}
            </button>
          );
        })}
      </div>

      <div className="mt-auto">
        <button className="p-3 text-white/70 hover:text-white transition-colors">
          <HelpCircle size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
