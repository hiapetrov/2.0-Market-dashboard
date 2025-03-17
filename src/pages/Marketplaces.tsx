import React, { useState, useEffect } from 'react';
import MarketplaceCard from '../components/marketplaces/MarketplaceCard';
import ConnectMarketplace from '../components/marketplaces/ConnectMarketplace';
import { marketplaceApi } from '../shared/api';
import { Marketplace, AvailableMarketplace } from '../entities/marketplace';

const Marketplaces: React.FC = () => {
  const [connectedMarketplaces, setConnectedMarketplaces] = useState<Marketplace[]>([]);
  const [availableMarketplaces, setAvailableMarketplaces] = useState<AvailableMarketplace[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [connected, available] = await Promise.all([
          marketplaceApi.getConnectedMarketplaces(),
          marketplaceApi.getAvailableMarketplaces()
        ]);
        
        setConnectedMarketplaces(connected);
        setAvailableMarketplaces(available);
      } catch (error) {
        console.error('Error fetching marketplace data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  const handleConnectMarketplace = async (marketplaceId: string) => {
    try {
      await marketplaceApi.connectMarketplace(marketplaceId);
      // In a real app, we would refresh the data here
      alert(`Connected to ${marketplaceId} marketplace!`);
    } catch (error) {
      console.error('Error connecting to marketplace:', error);
    }
  };
  
  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center p-12">
        <div className="text-white text-xl">Loading marketplaces...</div>
      </div>
    );
  }
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Marketplace Management</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {connectedMarketplaces.map((marketplace) => (
          <MarketplaceCard 
            key={marketplace.id} 
            marketplace={marketplace} 
          />
        ))}
      </div>
      
      <ConnectMarketplace 
        availableMarketplaces={availableMarketplaces}
        onConnect={handleConnectMarketplace}
      />
    </div>
  );
};

export default Marketplaces;
