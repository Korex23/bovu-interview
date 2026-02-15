import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSkeleton() {
  return (
    <section className="relative w-[85%] md:translate-x-7 h-[85vh]">
      {/* Sidebar */}
      <div className="absolute -left-10 md:-left-10 top-1/2 -translate-y-1/2 z-20">
        <div className="w-18 h-110 rounded-full bg-[#52459D]/80 flex flex-col items-center justify-between py-6 px-3 shadow-xl">
          <div className="flex flex-col gap-4 items-center">
            <Skeleton className="h-10 w-10 rounded-2xl bg-white/20" />
            <Skeleton className="h-7 w-7 rounded-lg bg-white/15" />
            <Skeleton className="h-7 w-7 rounded-lg bg-white/15" />
            <Skeleton className="h-7 w-7 rounded-lg bg-white/15" />
            <Skeleton className="h-7 w-7 rounded-lg bg-white/15" />
            <Skeleton className="h-7 w-7 rounded-lg bg-white/15" />
          </div>
          <Skeleton className="h-7 w-7 rounded-lg bg-white/15" />
        </div>
      </div>

      {/* Main Card */}
      <div className="relative z-10 h-full rounded-[40px] bg-[#F5F3F8]/20 overflow-hidden">
        <div className="grid h-full xl:grid-cols-[1fr_320px] gap-6">
          {/* Left content */}
          <div className="grid h-full min-h-0 xl:grid-rows-[auto_1fr] p-4 md:pl-20 pt-10 pb-5">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <Skeleton className="h-6 md:w-48 w-32 rounded-md" />

              <div className="flex items-center gap-3 md:gap-4">
                <Skeleton className="h-10 w-36 rounded-md" />
                <Skeleton className="hidden md:block h-10 w-10 rounded-md" />
              </div>
            </div>

            <main className="min-h-0 overflow-y-auto no-scrollbar">
              <section className="mb-7 flex flex-col md:flex-row gap-14">
                <div className="w-full md:w-[320px] flex flex-col justify-center items-center gap-4">
                  <Skeleton className="h-24 w-64 rounded-2xl" />
                  <Skeleton className="h-24 w-64 rounded-2xl" />
                  <Skeleton className="h-32 w-64 rounded-2xl" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-4">
                    <Skeleton className="h-6 w-40 rounded-md" />
                    <div className="flex gap-3">
                      <Skeleton className="h-9 w-9 rounded-full" />
                      <Skeleton className="h-9 w-9 rounded-full" />
                    </div>
                  </div>

                  <Skeleton className="h-4 w-40 rounded-md mb-4" />

                  <div className="flex items-center flex-wrap justify-between gap-6 mb-5">
                    <Skeleton className="h-9 w-44 rounded-xl" />
                    <Skeleton className="h-6 w-28 rounded-md" />
                    <Skeleton className="h-6 w-28 rounded-md" />
                  </div>

                  <div className="flex flex-col gap-3.5">
                    <Skeleton className="h-20 w-[97%] rounded-2xl" />
                    <Skeleton className="h-20 w-[97%] rounded-2xl" />
                    <Skeleton className="h-20 w-[97%] rounded-2xl" />
                  </div>
                </div>
              </section>

              <section>
                <div className="flex justify-between items-center mb-5">
                  <Skeleton className="h-6 w-60 rounded-md" />
                  <Skeleton className="h-6 w-20 rounded-md" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                  <Skeleton className="h-36 w-[90%] rounded-2xl" />
                  <Skeleton className="h-36 w-[90%] rounded-2xl" />
                  <Skeleton className="h-36 w-[90%] rounded-2xl" />
                  <Skeleton className="h-36 w-[90%] rounded-2xl" />
                </div>
              </section>
            </main>
          </div>

          <aside className="h-full min-h-0 xl:block hidden">
            <div className="h-full overflow-y-auto xl:translate-x-1.5 flex no-scrollbar">
              <div className="bg-[#EFECFF] w-full h-full flex flex-col overflow-hidden">
                <div className="px-5 pt-5 pb-4 flex justify-end gap-3">
                  <Skeleton className="h-9 w-9 rounded-md" />
                  <Skeleton className="h-9 w-9 rounded-md" />
                  <Skeleton className="h-9 w-9 rounded-md" />
                </div>

                <div className="px-5 pb-3 flex justify-between items-start">
                  <div>
                    <Skeleton className="h-7 w-28 rounded-md" />
                    <Skeleton className="mt-2 h-4 w-44 rounded-md" />
                  </div>
                  <Skeleton className="h-9 w-9 rounded-xl" />
                </div>

                {/* Contacts list */}
                <div className="xl:block hidden px-5 flex-1 overflow-y-auto no-scrollbar">
                  <div className="mt-4 rounded-2xl py-2">
                    <div className="flex flex-col gap-3">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 rounded-xl px-2 py-3"
                        >
                          <Skeleton className="h-12 w-12 rounded-md" />
                          <div className="flex-1">
                            <Skeleton className="h-4 w-32 rounded-md" />
                            <Skeleton className="mt-2 h-3 w-24 rounded-md" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom reminder */}
                  <div className="mt-5 p-4">
                    <Skeleton className="h-8 w-8 rounded-md mb-3" />
                    <Skeleton className="h-4 w-48 rounded-md" />
                    <Skeleton className="mt-2 h-4 w-24 rounded-md" />
                    <Skeleton className="mt-2 h-4 w-44 rounded-md" />

                    <div className="mt-4 flex justify-end">
                      <Skeleton className="h-12 w-12 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
