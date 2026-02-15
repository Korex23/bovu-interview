import { useRef, useState } from "react";
import Sidebar from "../dashboard/Sidebar";
import ContactsPanel from "../dashboard/ContactsPanel";
import Header from "../dashboard/Header";
import Cards from "../dashboard/Cards";
import TransactionList from "../dashboard/TransactionList";
import { QuickSummaryCards } from "../dashboard/Analytics";
import { transactions, user } from "@/data/mock-data";

const Dashboard = () => {
  const scrollRef = useRef<HTMLElement | null>(null);
  const [isContactsOpen, setIsContactsOpen] = useState(false);

  return (
    <section className="w-[85%] md:translate-x-7 h-[85vh] relative">
      <div className="absolute -left-10 md:-left-14 top-1/2 -translate-y-1/2 z-100">
        <Sidebar scrollContainerRef={scrollRef} />
      </div>

      <div className="h-full rounded-[40px] bg-[#F5F3F8] overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute inset-0 h-full w-[60%]"
            viewBox="0 0 598 596"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <defs>
              <filter
                id="blurSoft"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
              >
                <feGaussianBlur stdDeviation="6" />
              </filter>

              <filter
                id="shadowSoft"
                x="-30%"
                y="-30%"
                width="160%"
                height="160%"
              >
                <feDropShadow
                  dx="0"
                  dy="10"
                  stdDeviation="14"
                  floodOpacity="0.10"
                />
              </filter>
            </defs>

            <g
              opacity="0.55"
              transform="translate(22, 10)"
              filter="url(#blurSoft)"
            >
              <path
                d="M81.5 572C67.1667 574.5 30.9 582.6 0.5 595V23C6.0055 7.49747 12.0675 4.52468 23.5 0.5L596.5 1C566.417 72.0444 549.5 114.137 488.5 180.5C395.913 204.694 347.943 227.885 288.5 332C268.018 384.073 262.848 419.338 256 484.5C216.726 539.509 173.786 555.25 81.5 572Z"
                fill="#e5e1f8"
                fillOpacity="0.18"
                stroke="#e5e1f8"
                strokeOpacity="0.22"
                strokeWidth="1.2"
              />
            </g>

            <g
              opacity="0.75"
              transform="translate(40, 4)"
              filter="url(#shadowSoft)"
            >
              <path
                d="M81.5 572C67.1667 574.5 30.9 582.6 0.5 595V23C6.0055 7.49747 12.0675 4.52468 23.5 0.5L596.5 1C566.417 72.0444 549.5 114.137 488.5 180.5C395.913 204.694 347.943 227.885 288.5 332C268.018 384.073 262.848 419.338 256 484.5C216.726 539.509 173.786 555.25 81.5 572Z"
                fill="#e5e1f8"
                fillOpacity="0.26"
                stroke="#e5e1f8"
                strokeOpacity="0.28"
                strokeWidth="1.2"
              />
            </g>

            <g opacity="1" transform="translate(0, 0)">
              <path
                d="M81.5 572C67.1667 574.5 30.9 582.6 0.5 595V23C6.0055 7.49747 12.0675 4.52468 23.5 0.5L596.5 1C566.417 72.0444 549.5 114.137 488.5 180.5C395.913 204.694 347.943 227.885 288.5 332C268.018 384.073 262.848 419.338 256 484.5C216.726 539.509 173.786 555.25 81.5 572Z"
                fill="#e5e1f8"
                fillOpacity="0.34"
                stroke="#e5e1f8"
                strokeOpacity="0.55"
                strokeWidth="1.2"
              />
            </g>
          </svg>
        </div>

        <div className="relative z-10 grid h-full xl:grid-cols-[1fr_320px] gap-6">
          <div className="grid h-full min-h-0 xl:grid-rows-[auto_1fr] p-4 md:pl-20 pt-10 pb-5">
            <Header
              user={user}
              onOpenContacts={() => setIsContactsOpen(true)}
            />

            <main
              ref={(el) => {
                scrollRef.current = el;
              }}
              className="min-h-0 overflow-y-auto overflow-x-hidden no-scrollbar"
            >
              <section className="mb-7 flex flex-col md:items-stretch md:flex-row gap-14">
                <Cards />
                <div className="min-w-0 flex-1">
                  <TransactionList transactions={transactions} />
                </div>
              </section>

              <section>
                <div className="flex justify-between">
                  <h2 className="font-bold text-sm md:text-xl mb-5">
                    Quick Summary On Your Account
                  </h2>
                  <span className="text-sm md:text-xl font-bold text-gray-400">
                    View All
                  </span>
                </div>
                <QuickSummaryCards />
              </section>
            </main>
          </div>

          <aside className="h-full min-h-0">
            <div className="h-full overflow-y-auto xl:translate-x-1.5 flex no-scrollbar">
              <ContactsPanel
                isMobileOpen={isContactsOpen}
                setIsMobileOpen={setIsContactsOpen}
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
