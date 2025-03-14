import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ProviderCardProps } from '../../types/provider.types';

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  const { name, icon, connected, lastSyncTime, colorFrom, colorTo, stats } = provider;
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'operational':
        return 'bg-green-500';
      case 'issues':
        return 'bg-yellow-500';
      case 'down':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };
  
  const getStatusLabel = (status: string) => {
    switch(status) {
      case 'operational':
        return 'Operational';
      case 'issues':
        return 'Issues Detected';
      case 'down':
        return 'Service Down';
      default:
        return 'Unknown';
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${colorFrom} ${colorTo} rounded-t-lg`}></div>
      <div className="flex items-center mb-4 pt-3">
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${colorFrom} ${colorTo} flex items-center justify-center text-white mr-4`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{connected ? `Connected · Last sync ${lastSyncTime}` : 'Not connected'}</p>
        </div>
        <button className={`ml-auto bg-gradient-to-r ${colorFrom} ${colorTo} text-white px-4 py-2 rounded-md text-sm shadow-sm`}>
          Open Dashboard
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Products</p>
          <p className="text-xl font-bold text-gray-900">{stats.products}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">In Production</p>
          <p className="text-xl font-bold text-gray-900">{stats.inProduction}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Fulfilled</p>
          <p className="text-xl font-bold text-gray-900">{stats.fulfilled}</p>
        </div>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-sm text-gray-500">Provider Status</p>
          <div className="flex items-center">
            <span className={`h-2 w-2 rounded-full ${getStatusColor(stats.status)} mr-2`}></span>
            <p className="font-medium text-gray-900">{getStatusLabel(stats.status)}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <button className="text-indigo-600 text-sm flex items-center">
          Create Product <ExternalLink className="h-3 w-3 ml-1" />
        </button>
        <button className="text-indigo-600 text-sm flex items-center">
          View Orders <ExternalLink className="h-3 w-3 ml-1" />
        </button>
      </div>
    </div>
  );
};

export default ProviderCard;
