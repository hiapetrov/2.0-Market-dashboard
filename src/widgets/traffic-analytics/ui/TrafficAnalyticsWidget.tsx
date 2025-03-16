import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrafficAnalyticsWidgetProps, TimeRangeOption } from '../model/types';
import { dashboardApi } from '../../../data/mockApi';

export const TrafficAnalyticsWidget: React.FC<TrafficAnalyticsWidgetProps> = ({ isEditMode, onRemove }) => {
  const [trafficData, setTrafficData] = useState<any[]>([]);
  const [timeRange, setTimeRange] = useState('7d');
  const [loading, setLoading] = useState(true);
  
  const timeRangeOptions: TimeRangeOption[] = [
    { id: '7d', label: '7 Days' },
    { id: '30d', label: '30 Days' },
    { id: '90d', label: '90 Days' }
  ];
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await dashboardApi.getTrafficData();
        setTrafficData(data);
      } catch (error) {
        console.error('Error fetching traffic data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [timeRange]);
  
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-md mb-8 p-6 hover:shadow-lg transition-all border border-gray-700">
      {isEditMode && onRemove && (
        <button 
          onClick={onRemove}
          className="absolute -top-2 -right-2 bg-gray-700 text-red-400 rounded-full h-6 w-6 flex items-center justify-center shadow-sm hover:bg-gray-600"
        >
          ×
        </button>
      )}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg"></div>
      <div className="flex justify-between items-center mb-6 pt-3">
        <h3 className="text-lg font-medium text-white">Traffic Analytics</h3>
        <div className="flex space-x-2">
          {timeRangeOptions.map(option => (
            <button 
              key={option.id}
              className={`px-4 py-2 text-sm rounded-md ${timeRange === option.id ? 'bg-indigo-700 text-white' : 'bg-gray-700 text-gray-300 border border-gray-600'}`}
              onClick={() => setTimeRange(option.id)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>
      
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-white">Loading data...</div>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trafficData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: 'white' }} />
            <Legend />
            <Line type="monotone" dataKey="organic" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="direct" stroke="#22d3ee" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="social" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="referral" stroke="#a78bfa" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};