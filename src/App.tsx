import { useEffect, useState } from "react";
import Dashboard from "./components/page/Dashboard";
import bg from "@/assets/bg.png";

function Preloader() {
  return (
    <div className="absolute inset-0 z-50 grid place-items-center">
      <div className="absolute inset-0 bg-black/25 backdrop-blur-sm" />

      <div className="relative w-85 rounded-3xl border border-white/30 bg-white/15 p-6 shadow-[0_18px_45px_rgba(30,33,68,0.25)] backdrop-blur">
        <div className="flex items-center gap-4">
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#13D6B5] via-[#7B5CFF] to-[#4AA3FF] opacity-80" />
            <div className="absolute inset-0.75 rounded-full bg-[#0b0b12]/20" />
            <div className="absolute inset-0 rounded-full border-2 border-white/25" />
            <div className="absolute inset-0 animate-spin rounded-full border-2 border-white/10 border-t-white/70" />
          </div>

          <div className="flex-1">
            <p className="text-sm font-semibold text-white/90">
              Loading dashboard
            </p>
          </div>
        </div>

        <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-1/2 animate-[shimmer_1.2s_infinite] rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        </div>
      </div>

      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-120%); }
            100% { transform: translateX(220%); }
          }
        `}
      </style>
    </div>
  );
}

function App() {
  const [bgLoaded, setBgLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const img = new Image();
    img.src = bg;

    img.onload = () => {
      if (!cancelled) setBgLoaded(true);
    };

    img.onerror = () => {
      if (!cancelled) setBgLoaded(true);
    };

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-black/20" />

      {bgLoaded ? <Dashboard /> : null}

      {!bgLoaded && <Preloader />}
    </div>
  );
}

export default App;
