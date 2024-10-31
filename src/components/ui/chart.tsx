import * as React from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

import { Card } from "@/components/ui/card";
import { useTheme } from "next-themes";

export function Chart({ data }: { data: any[] }) {
  const { theme: mode } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <Line
          type="monotone"
          dataKey="value"
          strokeWidth={2}
          activeDot={{
            r: 6,
            style: { fill: "var(--chart-1)", opacity: 0.8 },
          }}
          style={
            {
              stroke: "var(--chart-1)",
              "--chart-1": "hsl(var(--primary))",
            } as React.CSSProperties
          }
        />
        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <Card className="p-2 border shadow-sm">
                  <div className="flex flex-col">
                    <span className="text-[0.70rem] uppercase text-muted-foreground">
                      {payload[0].payload.label}
                    </span>
                    <span className="font-bold text-muted-foreground">
                      {payload[0].value}
                    </span>
                  </div>
                </Card>
              );
            }
            return null;
          }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
