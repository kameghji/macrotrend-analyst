import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { formatPercentage } from '../utils/economic-data.js';

const Chart = ({ data, color, yAxisLabel }) => {
  // Format data for Recharts
  const chartData = data.map(item => ({
    date: new Date(item.date).toLocaleDateString('en-US', { month: 'short' }),
    value: item.value
  })).reverse();
  
  return (
    <div className="chart-container animate-fade-in">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 10, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
          <XAxis 
            dataKey="date" 
            tick={{ fontSize: 10, fill: '#888' }}
            tickMargin={10}
            axisLine={{ stroke: '#E0E0E0' }}
          />
          <YAxis 
            tick={{ fontSize: 10, fill: '#888' }}
            tickFormatter={(value) => `${value}%`}
            domain={['auto', 'auto']}
            tickMargin={10}
            axisLine={{ stroke: '#E0E0E0' }}
            label={{ 
              value: yAxisLabel, 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle', fontSize: 10, fill: '#888' } 
            }}
          />
          <Tooltip 
            formatter={(value) => [formatPercentage(value), yAxisLabel]}
            labelFormatter={(label) => `${label}`}
            contentStyle={{ 
              borderRadius: '0.375rem', 
              border: '1px solid rgba(0,0,0,0.1)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke={color} 
            strokeWidth={2}
            dot={{ r: 3, fill: 'white', strokeWidth: 2 }}
            activeDot={{ r: 5, strokeWidth: 0 }}
            animationDuration={1500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
