import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  unit?: string;
  children: React.ReactNode;
}

export const StatCard = ({ title, value, unit, children }: StatCardProps) => {
  return (
    <Card className="rounded-2xl border-white/60 pb-0 pt-6 h-52 bg-white/70 overflow-hidden hover:scale-105 cursor-pointer">
      <CardHeader className="pb-2 px-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg font-semibold text-gray-500">
              {title}
            </CardTitle>
            <div className="mt-1">
              <div className="text-3xl font-black text-slate-900 leading-none">
                {value}
              </div>
              {unit ? (
                <div className="mt-1 text-sm font-semibold text-slate-300">
                  {unit}
                </div>
              ) : null}
            </div>
          </div>

          <div className="grid h-7 w-7 place-items-center rounded-md bg-white shadow-xl text-emerald-600">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-2 px-0 pb-0 z-100">
        <div
          className={`h-30 w-full ${title === "Graph" ? "-translate-y-10" : "-translate-y-14"}`}
        >
          {children}
        </div>
      </CardContent>
    </Card>
  );
};
