import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function MonthlySalesComparisonLineChart({data}) {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Line for 2022 sales */}
        <Line type="monotone" dataKey="sales2022" stroke="#8884d8" strokeWidth={2} name="Sales 2022" />
        {/* Line for 2023 sales */}
        <Line type="monotone" dataKey="sales2023" stroke="#82ca9d" strokeWidth={2} name="Sales 2023" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default MonthlySalesComparisonLineChart;
