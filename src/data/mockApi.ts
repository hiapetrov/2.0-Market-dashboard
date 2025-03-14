import { 
  trafficData, 
  channelData, 
  activityFeed, 
  availableWidgets,
  defaultActiveWidgets,
  metricsData
} from './dashboardData';
import { connectedMarketplaces, availableMarketplaces } from './marketplaceData';
import { connectedProviders, availableProviders } from './providerData';

// Simulate API delays for realism
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Dashboard API methods
export const dashboardApi = {
  getTrafficData: async () => {
    await delay(600);
    return trafficData;
  },
  
  getChannelData: async () => {
    await delay(400);
    return channelData;
  },
  
  getActivityFeed: async () => {
    await delay(500);
    return activityFeed;
  },
  
  getAvailableWidgets: async () => {
    await delay(300);
    return availableWidgets;
  },
  
  getActiveWidgets: async () => {
    await delay(400);
    // Simulate getting user preferences from backend
    return defaultActiveWidgets;
  },
  
  updateActiveWidgets: async (widgetIds: string[]) => {
    await delay(600);
    // Simulate saving to backend
    return { success: true, widgetIds };
  },

  getMetricsData: async () => {
    await delay(500);
    return metricsData;
  }
};

// Marketplace API methods
export const marketplaceApi = {
  getConnectedMarketplaces: async () => {
    await delay(700);
    return connectedMarketplaces;
  },
  
  getAvailableMarketplaces: async () => {
    await delay(500);
    return availableMarketplaces;
  },
  
  connectMarketplace: async (marketplaceId: string) => {
    await delay(1000);
    // Simulate connecting to a marketplace
    return { success: true, marketplaceId };
  }
};

// Provider API methods
export const providerApi = {
  getConnectedProviders: async () => {
    await delay(600);
    return connectedProviders;
  },
  
  getAvailableProviders: async () => {
    await delay(400);
    return availableProviders;
  },
  
  connectProvider: async (providerId: string) => {
    await delay(900);
    // Simulate connecting to a provider
    return { success: true, providerId };
  }
};
