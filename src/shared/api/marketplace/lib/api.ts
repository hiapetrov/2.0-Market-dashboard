import { connectedMarketplaces, availableMarketplaces } from '../../../../data/marketplaceData';
import { MarketplaceApiMethods } from '../model/types';
import { delay } from '../../utils';
import { isDev } from '../../../lib';

// Add some randomness to delay in dev mode
const getDelay = () => isDev() ? Math.random() * 300 + 400 : 0;

export const marketplaceApi: MarketplaceApiMethods = {
  getConnectedMarketplaces: async () => {
    await delay(getDelay());
    return connectedMarketplaces;
  },
  
  getAvailableMarketplaces: async () => {
    await delay(getDelay());
    return availableMarketplaces;
  },
  
  connectMarketplace: async (marketplaceId: string) => {
    await delay(getDelay() + 500); // Longer delay for connection simulation
    // Simulate connecting to a marketplace
    return { success: true, marketplaceId };
  }
};