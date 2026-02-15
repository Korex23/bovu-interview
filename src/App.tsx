import { useEffect, useState } from "react";
import Dashboard from "./components/page/Dashboard";
import bg from "@/assets/bg.png";
import DashboardSkeleton from "./components/dashboard/Loader";

const MIN_LOADING_TIME = 4000;

function App() {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [minTimePassed, setMinTimePassed] = useState(false);

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

    // Minimum loader timer
    const timer = setTimeout(() => {
      if (!cancelled) setMinTimePassed(true);
    }, MIN_LOADING_TIME);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, []);

  const isReady = bgLoaded && minTimePassed;

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="absolute inset-0 bg-black/20" />

      {isReady ? <Dashboard /> : <DashboardSkeleton />}
    </div>
  );
}

export default App;
