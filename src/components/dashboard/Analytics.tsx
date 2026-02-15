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
import {
  incomeData,
  expensesData,
  subsData,
  donutData,
} from "@/data/mock-data";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { StatCard } from "../shared/StatCard";
import { useState } from "react";

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

export const QuickSummaryCards = () => {
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
              cursor={false}
              content={({ active, payload, coordinate }) => {
                if (!active || !payload?.length || !coordinate) return null;

                const item = payload[0];

                return (
                  <div className="pointer-events-none">
                    <div className="bg-transparent shadow-none border-0 p-0 rounded-none">
                      <div className="flex flex-col gap-0.5">
                        <span className="text-xs font-semibold text-muted-foreground">
                          {item.name}
                        </span>
                        <span className="text-sm font-bold">{item.value}%</span>
                      </div>
                    </div>
                  </div>
                );
              }}
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
};
