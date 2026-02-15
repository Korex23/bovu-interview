import { useRef, useState } from "react";
import Sidebar from "../common/Sidebar";
import ContactsPanel from "../common/ContactsPanel";
import Header from "../common/Header";
import type { User, Transaction } from "../types";
import Cards from "../common/Cards";
import TransactionList from "../common/TransactionList";
import { QuickSummaryCards } from "../common/Analytics";

const transactions: Transaction[] = [
  {
    id: "t1",
    title: "Online Shopping",
    category: "shopping",
    amount: -3100,
    currency: "PKR",
    date: "Today",
    type: "expense",
    icon: "shopping",
    status: true,
  },
  {
    id: "t2",
    title: "Instagram Affiliates",
    category: "social",
    amount: 210000,
    currency: "PKR",
    date: "Yesterday",
    type: "income",
    icon: "instagram",
    status: true,
  },
  {
    id: "t3",
    title: "College Fee",
    category: "education",
    amount: -11390,
    currency: "PKR",
    date: "2 days ago",
    type: "expense",
    icon: "school",
    status: true,
  },
  {
    id: "t4",
    title: "College Fee",
    category: "education",
    amount: -11390,
    currency: "PKR",
    date: "2 days ago",
    type: "expense",
    icon: "school",
    status: true,
  },
];

const user: User = {
  name: "Mikey",
  avatar: "https://picsum.photos/100/100?random=1",
};

const Dashboard = () => {
  const scrollRef = useRef<HTMLElement | null>(null);
  const [isContactsOpen, setIsContactsOpen] = useState(false);
  return (
    <>
      <section className="w-[85%] md:translate-x-7 h-[85vh] relative">
        <div className="absolute -left-10 md:-left-14 top-1/2 -translate-y-1/2 z-100">
          <Sidebar scrollContainerRef={scrollRef} />
        </div>

        <div className="h-full rounded-[40px] bg-[#F5F3F8] overflow-hidden">
          <div className="grid h-full xl:grid-cols-[1fr_320px] gap-6">
            <div className="grid h-full min-h-0 xl:grid-rows-[auto_1fr] p-4 md:pl-20 pt-10 pb-5">
              <Header
                user={user}
                onOpenContacts={() => setIsContactsOpen(true)}
              />

              <main
                ref={(el) => {
                  scrollRef.current = el;
                }}
                className="min-h-0 overflow-y-auto no-scrollbar"
              >
                <section className="mb-7 flex flex-col md:flex-row gap-14">
                  <Cards />
                  <TransactionList transactions={transactions} />
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
    </>
  );
};

export default Dashboard;
