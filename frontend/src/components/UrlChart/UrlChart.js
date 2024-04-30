import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const UrlChart = ({ accesses }) => {
  const data = [{ name: 'Acessos', value: accesses }];

  return (
    <BarChart width={150} height={150} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" fill="#82ca9d" />
    </BarChart>
  );
};

export default UrlChart;
