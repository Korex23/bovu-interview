import React from "react";

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
  return (
    <aside className="bg-[#EFECFF] p-5 w-full relative z-10">
      <svg
        width="213"
        height="183"
        viewBox="0 0 213 183"
        fill="none"
        className="absolute bottom-0 right-0 z-1"
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
      <div className="flex items-center justify-end gap-3">
        <IconButton>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 9h10M7 13h6M21 12c0 4.418-4.03 8-9 8-1.03 0-2.02-.154-2.94-.44L3 21l1.44-4.06C3.54 15.02 3 13.56 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z"
              stroke="#3B3E53"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </IconButton>

        <IconButton dot>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 17H9m10-2V11a7 7 0 10-14 0v4l-2 2h18l-2-2Z"
              stroke="#3B3E53"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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

      {/* Title row */}
      <div className="mt-4 flex items-start justify-between gap-3">
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
          aria-label="Search"
        >
          {/* search */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21l-4.3-4.3m1.3-5.2a7 7 0 11-14 0 7 7 0 0114 0Z"
              stroke="#5B5F78"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* List card */}
      <div className="mt-4 rounded-2xl py-2 backdrop-blur">
        <ul>
          {CONTACTS.map((c) => (
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
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-col gap-3 p-4 z-100">
        <div className="relative grid h-10 w-10 place-items-center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 17H9m10-2V11a7 7 0 10-14 0v4l-2 2h18l-2-2Z"
              stroke="#6A55F5"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute bottom-2.5 left-3 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white/90" />
        </div>

        <div className="flex items-end z-10">
          <div className="flex-1">
            <div className="text-[13px] font-extrabold text-[#2A2D46]">
              It&apos;s Your Wife&apos;s Birthday
            </div>
            <div className="mt-1 text-[12px] font-bold text-[#6F7697]">
              after 2 days
            </div>
            <div className="mt-1 text-[12px] font-extrabold text-[#2A2D46]">
              Let&apos;s Plan for a big gift!
            </div>
          </div>

          <div className="rounded-full p-2 bg-[#52459D63]">
            <button
              type="button"
              className="grid h-10 w-10 place-items-center z-10 rounded-full bg-[#52459D]"
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
    </aside>
  );
}
