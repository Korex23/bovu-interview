import { useMemo, useState } from "react";
import { Bell, MessageSquareText, Search, X, Menu } from "lucide-react";

type Contact = {
  id: string;
  name: string;
  location: string;
  avatar: string;
};

const CONTACTS: Contact[] = [
  {
    id: "1",
    name: "Mike Taylor",
    location: "Chicago, TX",
    avatar: "https://i.pravatar.cc/80?img=47",
  },
  {
    id: "2",
    name: "Jack Green",
    location: "Oakland, CO",
    avatar: "https://i.pravatar.cc/80?img=12",
  },
  {
    id: "3",
    name: "Carmen Lewis",
    location: "Milwaukee, CA",
    avatar: "https://i.pravatar.cc/80?img=45",
  },
  {
    id: "4",
    name: "Micheal Richardson",
    location: "Tampa, CA",
    avatar: "https://i.pravatar.cc/80?img=56",
  },
  {
    id: "5",
    name: "Willie Cole",
    location: "Seattle, WA",
    avatar: "https://i.pravatar.cc/80?img=67",
  },
  {
    id: "6",
    name: "Phylis Weber",
    location: "Tampa, NY",
    avatar: "https://i.pravatar.cc/80?img=28",
  },
];

const IconButton = ({
  children,
  dot,
}: {
  children: React.ReactNode;
  dot?: boolean;
}) => (
  <button
    className="relative grid h-9 w-9 place-items-center rounded-md border border-white/60 bg-white/70 shadow-[0_10px_25px_rgba(32,34,58,0.08)] backdrop-blur"
    type="button"
  >
    {children}
    {dot ? (
      <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white/90" />
    ) : null}
  </button>
);

export default function ContactsPanel() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const filteredContacts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return CONTACTS;

    return CONTACTS.filter((c) => {
      const name = (c.name ?? "").toLowerCase();
      const location = (c.location ?? "").toLowerCase();
      return name.includes(q) || location.includes(q);
    });
  }, [query]);

  return (
    <>
      <button
        type="button"
        aria-label="Open contacts"
        onClick={() => setIsMobileOpen(true)}
        className={`xl:hidden ${isMobileOpen && "hidden"} fixed sm:top-10 top-4 right-4 z-[999] grid h-11 w-11 place-items-center rounded-md bg-white/80 backdrop-blur border border-black/10 shadow-xl`}
      >
        <Menu className="text-gray-700" size={20} />
      </button>

      <div
        className={`xl:hidden fixed inset-0 z-[998] transition-opacity duration-200 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30 rounded-[40px]"
          onClick={() => setIsMobileOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full rounded-[40px] w-[90%] max-w-[420px] transition-transform duration-200 ${
            isMobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <PanelContent
            isSearchOpen={isSearchOpen}
            setIsSearchOpen={setIsSearchOpen}
            query={query}
            setQuery={setQuery}
            filteredContacts={filteredContacts}
            onClose={() => setIsMobileOpen(false)}
          />
        </div>
      </div>

      {/* Desktop panel (xl and above only) */}
      <div className="hidden xl:block h-full min-h-0">
        <PanelContent
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
          query={query}
          setQuery={setQuery}
          filteredContacts={filteredContacts}
        />
      </div>
    </>
  );
}

function PanelContent({
  isSearchOpen,
  setIsSearchOpen,
  query,
  setQuery,
  filteredContacts,
  onClose,
}: {
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  filteredContacts: typeof CONTACTS;
  onClose?: () => void;
}) {
  return (
    <aside className="bg-[#EFECFF] p-0 w-full h-full min-h-0 relative overflow-hidden flex flex-col">
      {/* Background SVG (remove `fixed` — it breaks positioning inside panel) */}
      <svg
        width="213"
        height="183"
        viewBox="0 0 213 183"
        fill="none"
        className="absolute bottom-0 right-0 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.59375 181.803C3.39375 165.003 20.0938 106.8 37.0938 85.3025C54.0938 63.8047 61.1094 64.1546 79.0938 54.8025C99.4742 44.2044 135.094 36.8025 135.094 36.8025C135.094 36.8025 156.198 10.2213 175.594 4.30251C184.257 1.65873 189.789 -0.824473 198.594 1.30251C204.111 2.63533 211.594 7.80251 211.594 7.80251L212.094 158.303C212.094 158.303 211.231 168.193 208.594 170.303L201.841 175.705C201.549 175.938 201.389 176.074 201.094 176.303C198.122 178.599 195.913 179.045 192.594 180.803L0.59375 181.803Z"
          fill="#DFDBF490"
        />
        <path
          d="M192.594 180.803C117.613 181.193 0.59375 181.803 0.59375 181.803C3.39375 165.003 20.0938 106.8 37.0938 85.3025C54.0938 63.8047 61.1094 64.1546 79.0938 54.8025C99.4742 44.2044 135.094 36.8025 135.094 36.8025C135.094 36.8025 156.198 10.2213 175.594 4.30251C184.257 1.65873 189.789 -0.824473 198.594 1.30251C204.111 2.63533 211.594 7.80251 211.594 7.80251L212.094 158.303C212.094 158.303 211.231 168.193 208.594 170.303C205.957 172.412 204.478 173.595 201.841 175.705M192.594 180.803C195.913 179.045 198.122 178.599 201.094 176.303C201.389 176.074 201.549 175.938 201.841 175.705M192.594 180.803C196.205 178.812 198.23 177.696 201.841 175.705"
          stroke="#DFDBF490"
        />
      </svg>

      {/* Sticky top actions */}
      <div className="sticky top-0 z-20 bg-[#EFECFF] px-5 pt-5 pb-4">
        <div className="flex items-center justify-end gap-3">
          {/* optional mobile close button */}
          {onClose && (
            <button
              type="button"
              aria-label="Close contacts"
              onClick={onClose}
              className="mr-auto grid h-9 w-9 place-items-center rounded-xl border border-white/60 bg-white/60 backdrop-blur"
            >
              <X size={16} className="text-gray-600" />
            </button>
          )}

          <IconButton>
            <MessageSquareText className="text-gray-500" size={16} />
          </IconButton>

          <IconButton dot>
            <Bell className="text-gray-500" size={16} />
          </IconButton>

          <button
            className="h-9 w-9 overflow-hidden rounded-md border border-white/60 bg-white/70 shadow-[0_10px_25px_rgba(32,34,58,0.08)] backdrop-blur"
            type="button"
          >
            <img
              src="https://i.pravatar.cc/80?img=68"
              alt="profile"
              className="h-full w-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Title row + search toggle */}
      <div className="mt-4 flex items-start justify-between gap-3 px-5 pb-2">
        <div>
          <h2 className="text-[22px] font-extrabold tracking-tight text-[#20223A]">
            Contacts
          </h2>
          <p className="mt-1 text-[12px] font-semibold text-[#20223A]">
            Last Payment Sent 2 days ago
          </p>
        </div>

        <button
          className="mt-1 grid h-9 w-9 place-items-center rounded-xl border border-white/60 bg-white/60 backdrop-blur"
          type="button"
          aria-label={isSearchOpen ? "Close search" : "Open search"}
          onClick={() => {
            setIsSearchOpen((v) => {
              const next = !v;
              if (!next) setQuery("");
              return next;
            });
          }}
        >
          {isSearchOpen ? (
            <X size={16} className="text-gray-500" />
          ) : (
            <Search size={16} className="text-gray-500" />
          )}
        </button>
      </div>

      {/* Search bar (appears under title row) */}
      {isSearchOpen && (
        <div className="px-5 pb-3">
          <div className="flex items-center gap-2 rounded-xl border border-white/60 bg-white/70 px-3 py-2 backdrop-blur">
            <Search size={16} className="text-gray-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search contacts..."
              className="w-full bg-transparent text-sm font-semibold text-[#20223A] placeholder:text-gray-400 focus:outline-none"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="grid h-7 w-7 place-items-center rounded-xl hover:bg-black/5"
                aria-label="Clear"
              >
                <X size={14} className="text-gray-500" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Scrollable content */}
      <div className="flex-1 min-h-0 overflow-y-auto no-scrollbar px-5 pb-5 relative z-10">
        {/* List card */}
        <div className="mt-4 rounded-2xl py-2 backdrop-blur">
          <ul>
            {filteredContacts.length === 0 ? (
              <li className="px-3 py-6 text-sm font-semibold text-[#6F7697]">
                No contacts found.
              </li>
            ) : (
              filteredContacts.map((c) => (
                <li key={c.id}>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-xl px-2 py-3 text-left hover:bg-white/30"
                  >
                    <img
                      src={c.avatar}
                      alt={c.name}
                      className="h-12 w-12 rounded-md object-cover"
                    />
                    <div className="min-w-0">
                      <div className="truncate text-[14px] font-extrabold text-[#2A2D46]">
                        {c.name}
                      </div>
                      <div className="mt-1 text-[11px] font-bold text-[#8086A6]">
                        {c.location}
                      </div>
                    </div>
                  </button>
                </li>
              ))
            )}
          </ul>
        </div>

        {/* Bottom reminder */}
        <div className="mt-5 flex flex-col gap-3 p-4">
          <div className="relative">
            <Bell size={30} color="#5E406C" />
          </div>

          <div className="flex items-end">
            <div className="flex-1">
              <div className="text-md font-extrabold text-[#2A2D46]">
                It&apos;s Your Wife&apos;s Birthday
              </div>
              <div className="mt-1 text-base font-bold text-[#6F7697]">
                after 2 days
              </div>
              <div className="mt-1 text-md font-extrabold text-[#2A2D46]">
                Let&apos;s Plan for a big gift!
              </div>
            </div>

            <div className="rounded-full p-2 bg-[#52459D63]">
              <button
                type="button"
                className="grid h-10 w-10 place-items-center rounded-full bg-[#52459D]"
                aria-label="Go"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12h12m0 0-5-5m5 5-5 5"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
