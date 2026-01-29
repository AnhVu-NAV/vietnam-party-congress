import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { PartyCongress } from '../types';

interface StatsChartProps {
  data: PartyCongress[];
  selectedId: number;
  onSelect: (id: number) => void;
  label: string;
}

const StatsChart: React.FC<StatsChartProps> = ({ data, selectedId, onSelect, label }) => {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
      <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-6">{label}</h3>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
            <XAxis 
              dataKey="romanNumeral" 
              tick={{ fontSize: 10 }} 
              interval={0} 
            />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              cursor={{ fill: 'transparent' }}
            />
            <Bar 
              dataKey="delegates" 
              radius={[4, 4, 0, 0]}
              onClick={(data) => onSelect(data.id)}
              cursor="pointer"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.id === selectedId ? '#D61C1F' : '#E2E8F0'} 
                  className="transition-all duration-300 hover:opacity-80"
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsChart;