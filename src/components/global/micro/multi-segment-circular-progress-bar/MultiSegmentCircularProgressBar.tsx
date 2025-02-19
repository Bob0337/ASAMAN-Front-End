"use client";

import React, { FC, useMemo } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface Student {
  name: string;
  percentage: number;
  color: string;
}

interface Props {
  students: Student[];
  widthPercentage?: string;
  paddingAngle?: number;
}

const CHART_SIZE = 240;
const INNER_RADIUS = 80;
const OUTER_RADIUS = 110;

const MultiSegmentCircularProgressBar: FC<Props> = ({
  students = [],
  widthPercentage = "30%",
  paddingAngle = 0,
}) => {
  const data = useMemo(
    () =>
      students?.map(({ name, percentage, color }) => ({
        name,
        value: percentage,
        color,
      })),
    [students],
  );

  return (
    <div style={{ width: widthPercentage }}>
      <ResponsiveContainer width="100%" height={CHART_SIZE}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={INNER_RADIUS}
            outerRadius={OUTER_RADIUS}
            fill="#8884d8"
            paddingAngle={paddingAngle}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MultiSegmentCircularProgressBar;
