import React, { useState, useEffect } from 'react';
import ProviderCard from '../components/providers/ProviderCard';
import ConnectProvider from '../components/providers/ConnectProvider';
import { providerApi } from '../data/mockApi';
import { Provider, AvailableProvider } from '../types/provider.types';

const Providers: React.FC = () => {
  const [connectedProviders, setConnectedProviders] = useState<Provider[]>([]);
  const [availableProviders, setAvailableProviders] = useState<AvailableProvider[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [connected, available] = await Promise.all([
          providerApi.getConnectedProviders(),
          providerApi.getAvailableProviders()
        ]);
        
        setConnectedProviders(connected);
        setAvailableProviders(available);
      } catch (error) {
        console.error('Error fetching provider data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  const handleConnectProvider = async (providerId: string) => {
    try {
      await providerApi.connectProvider(providerId);
      // In a real app, we would refresh the data here
      alert(`Connected to ${providerId} provider!`);
    } catch (error) {
      console.error('Error connecting to provider:', error);
    }
  };
  
  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center p-12">
        <div className="text-white text-xl">Loading providers...</div>
      </div>
    );
  }
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Product Providers</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {connectedProviders.map((provider) => (
          <ProviderCard 
            key={provider.id} 
            provider={provider} 
          />
        ))}
        
        {/* Add Provider Card */}
        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center text-white mb-4">
            <span className="text-2xl font-bold">+</span>
          </div>
      </div>
      
      <ConnectProvider 
        availableProviders={availableProviders}
        onConnect={handleConnectProvider}
      />
    </div>
  );
};

export default Providers;
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Add New Provider</h3>
          <p className="text-center text-gray-500 mb-4">Connect to a print-on-demand or manufacturing service</p>
          <button 
            className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2 rounded-md shadow-sm"
            onClick={() => {}}
          >
            Connect Provider
          </button>
        </div>
        