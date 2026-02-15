import { useMemo, useState } from "react";
import { CONTACTS } from "@/data/mock-data";
import { PanelContent } from "../shared/Contacts";

interface ContactPanelProps {
  isMobileOpen: boolean;
  setIsMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ContactsPanel({
  isMobileOpen,
  setIsMobileOpen,
}: ContactPanelProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

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
      <div
        className={`xl:hidden fixed inset-0 z-998 transition-opacity duration-200 ${
          isMobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/30"
          onClick={() => setIsMobileOpen(false)}
        />

        <div
          className={`absolute right-0 top-0 h-full w-[90%] max-w-105 transition-transform duration-200 ${
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
