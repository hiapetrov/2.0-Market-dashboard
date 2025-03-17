import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { TrafficSourcesWidgetProps } from '../model/types';
import { ChannelDataPoint } from '../../../entities/dashboard';
import { dashboardApi } from '../../../shared/api';

export const TrafficSourcesWidget: React.FC<TrafficSourcesWidgetProps> = ({ isEditMode, onRemove }) => {
  const [channelData, setChannelData] = useState<ChannelDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  
  // Colors for the pie chart
  const COLORS = ['#7FB3D5', '#F9E79F', '#A9CCE3', '#D4E6F1'];
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await dashboardApi.getChannelData();
        setChannelData(data);
      } catch (error) {
        console.error('Error fetching channel data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all border border-gray-700">
      {isEditMode && onRemove && (
        <button 
          onClick={onRemove}
          className="absolute -top-2 -right-2 bg-gray-700 text-red-400 rounded-full h-6 w-6 flex items-center justify-center shadow-sm hover:bg-gray-600"
        >
          ×
        </button>
      )}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg"></div>
      <h3 className="text-lg font-medium text-white mb-4 pt-3">Traffic Sources</h3>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-white">Loading data...</div>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={channelData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {channelData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value) => [`${value}%`, 'Percentage']}
              contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: 'white' }}
            />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};