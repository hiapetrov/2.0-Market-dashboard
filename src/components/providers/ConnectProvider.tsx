import React from 'react';
import { ConnectProviderProps } from '../../types/provider.types';

const ConnectProvider: React.FC<ConnectProviderProps> = ({
  availableProviders,
  onConnect
}) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Providers</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {availableProviders.map((provider) => (
          <button 
            key={provider.id}
            className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-indigo-300 hover:bg-indigo-50 transition-colors"
            onClick={() => onConnect(provider.id)}
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${provider.colorFrom} ${provider.colorTo} flex items-center justify-center text-white mb-2`}>
              {provider.icon}
            </div>
            <span className="text-sm text-gray-800">{provider.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ConnectProvider;
