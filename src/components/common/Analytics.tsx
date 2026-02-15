import { ArrowUpRight } from "lucide-react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  Cell,
  Pie,
  PieChart,
  Sector,
  ComposedChart,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { useState } from "react";

const incomeData = [
  { x: "1", v: 20 },
  { x: "2", v: 24 },
  { x: "4", v: 28 },
  { x: "3", v: 18 },
  { x: "5", v: 22 },
  { x: "6", v: 30 },
  { x: "7", v: 26 },
  { x: "8", v: 34 },
  { x: "9", v: 24 },
];

const expensesData = [
  { x: "1", v: 12 },
  { x: "2", v: 18 },
  { x: "7", v: 21 },
  { x: "8", v: 28 },
  { x: "9", v: 24 },
];

const subsData = [
  { x: "A", a: 18, b: 10 },
  { x: "B", a: 14, b: 8 },
  { x: "C", a: 22, b: 12 },
  { x: "D", a: 10, b: 7 },
  { x: "E", a: 26, b: 14 },
  { x: "F", a: 16, b: 9 },
  { x: "G", a: 20, b: 11 },
];

const donutData = [
  { name: "Other", value: 17, key: "other" },
  { name: "Education", value: 53, key: "edu" },
  { name: "Entertainment", value: 18, key: "ent" },
  { name: "Savings", value: 12, key: "sav" },
];

const incomeConfig = {
  v: { label: "Income", color: "hsl(var(--chart-1))" },
} satisfies ChartConfig;

const expensesConfig = {
  v: { label: "Expenses", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig;

const subsConfig = {
  a: { label: "A", color: "hsl(var(--chart-1))" },
  b: { label: "B", color: "hsl(var(--chart-2))" },
} satisfies ChartConfig;

const donutConfig = {
  edu: { label: "Education", color: "hsl(var(--chart-1))" },
  other: { label: "Other", color: "hsl(var(--chart-3))" },
} satisfies ChartConfig;

function StatCard({
  title,
  value,
  unit,
  children,
}: {
  title: string;
  value: string;
  unit?: string;
  children: React.ReactNode;
}) {
  return (
    <Card className="rounded-2xl border-white/60 pb-0 pt-6 h-52 bg-white/70 overflow-hidden hover:scale-110 cursor-pointer">
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
}

export function QuickSummaryCards() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-3">
      <StatCard title="Income" value="1.34m" unit="PKR">
        <ChartContainer config={incomeConfig} className="h-full w-full">
          <AreaChart
            data={incomeData}
            margin={{ left: 0, right: 0, top: 8, bottom: 0 }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Area
              type="monotone"
              dataKey="v"
              stroke="#52459D"
              strokeWidth={0}
              fill="#52459D"
              fillOpacity={1}
              isAnimationActive={false}
            />
          </AreaChart>
        </ChartContainer>
      </StatCard>

      <StatCard title="Expenses" value="35k" unit="PKR">
        <ChartContainer config={expensesConfig} className="h-full w-full">
          <ComposedChart
            data={expensesData}
            margin={{ left: 0, right: 0, top: 10, bottom: 0 }}
          >
            <defs>
              <linearGradient id="expensesGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8BEAF4" stopOpacity={0.35} />
                <stop offset="100%" stopColor="#8BEAF4" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />

            <Area
              type="monotone"
              dataKey="v"
              stroke="none"
              fill="url(#expensesGradient)"
              fillOpacity={1}
              isAnimationActive={false}
            />

            <Line
              type="monotone"
              dataKey="v"
              stroke="#8BEAF4"
              strokeWidth={2}
              dot={{ r: 6, fill: "#8BEAF4", stroke: "none" }}
              activeDot={{ r: 8, fill: "#8BEAF4", stroke: "none" }}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ChartContainer>
      </StatCard>

      <StatCard title="Subscriptions" value="12k" unit="PKR">
        <ChartContainer config={subsConfig} className="h-full w-full">
          <BarChart
            data={subsData}
            margin={{ left: 0, right: 0, top: 12, bottom: 0 }}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="a" fill="#52459D" radius={6} />
            <Bar dataKey="b" fill="#8BEAF4" radius={6} />
          </BarChart>
        </ChartContainer>
      </StatCard>

      <StatCard title="Graph" value="" unit="">
        <ChartContainer config={donutConfig} className="h-full w-full">
          <PieChart>
            <ChartTooltip
              coordinate={{ x: 10, y: 10 }}
              cursor={false}
              content={
                <ChartTooltipContent
                  formatter={(value, name) => (
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs font-semibold text-muted-foreground">
                        {name}
                      </span>
                      <span className="text-sm font-bold">{value}%</span>
                    </div>
                  )}
                />
              }
            />

            <Pie
              data={donutData}
              dataKey="value"
              nameKey="name"
              innerRadius={30}
              outerRadius={60}
              stroke="transparent"
              paddingAngle={3}
              startAngle={90}
              endAngle={-270}
              isAnimationActive={false}
              activeIndex={activeIndex ?? undefined}
              onMouseEnter={(_, index) => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
              activeShape={(props: any) => (
                <Sector
                  {...props}
                  outerRadius={(props.outerRadius ?? 40) + 8}
                />
              )}
              className="z-100"
            >
              <Cell fill="#52459D" />
              <Cell fill="#8BEAF4" />
              <Cell fill="#9B0AF9" />
              <Cell fill="#A78BFA" />
              <Cell fill="#FCA5A5" />
            </Pie>
          </PieChart>
        </ChartContainer>
      </StatCard>
    </div>
  );
}
