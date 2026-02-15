import React, { useEffect, useRef, useState } from "react";
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

type SidebarProps = {
  scrollContainerRef?: React.RefObject<HTMLElement | null>;
};

const Sidebar: React.FC<SidebarProps> = ({ scrollContainerRef }) => {
  const [active, setActive] = useState("home");
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  const menuItems = [
    { id: "home", icon: Home },
    { id: "apps", icon: Grid },
    { id: "wallet", icon: Wallet },
    { id: "portfolio", icon: Briefcase },
    { id: "messages", icon: MessageSquare },
    { id: "gifts", icon: Gift },
    { id: "settings", icon: Settings },
  ];

  useEffect(() => {
    const el = scrollContainerRef?.current;

    // If you didn't pass a ref, fallback to window scroll
    const target: HTMLElement | Window = el ?? window;

    const getY = () => (el ? el.scrollTop : window.scrollY);

    const onScroll = () => {
      // only on small screens
      if (window.innerWidth >= 768) {
        setHidden(false);
        lastY.current = getY();
        return;
      }

      const current = getY();
      const delta = current - lastY.current;

      // ignore tiny jitter
      if (Math.abs(delta) < 6) return;

      if (delta > 0 && current > 40) setHidden(true); // down
      if (delta < 0) setHidden(false); // up

      lastY.current = current;
    };

    // init
    lastY.current = getY();

    target.addEventListener(
      "scroll",
      onScroll as any,
      { passive: true } as any,
    );
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      target.removeEventListener("scroll", onScroll as any);
      window.removeEventListener("resize", onScroll);
    };
  }, [scrollContainerRef]);

  return (
    <div
      className={`
        flex flex-col items-center py-5 md:px-4 px-2
        w-16 md:w-20 bg-[#52459D] h-full rounded-full
        border border-[#52459D] shadow-2xl justify-between
        sticky top-10 ml-4
        transition-all duration-300 ease-out
        md:translate-x-0 md:opacity-100 z-100
        ${hidden ? "-translate-x-28 opacity-0" : "translate-x-0 opacity-100"}
      `}
    >
      <div className="flex flex-col md:gap-2 lg:gap-3 w-full items-center">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`p-3 rounded-full transition-all duration-300 relative focus:outline-none ${
                isActive
                  ? "bg-[#423698] border-[#392e89] border-2 text-white shadow-lg"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <Icon size={20} />
            </button>
          );
        })}
      </div>

      <button className="p-3 text-white/70 hover:text-white transition-colors">
        <HelpCircle size={24} />
      </button>
    </div>
  );
};

export default Sidebar;
