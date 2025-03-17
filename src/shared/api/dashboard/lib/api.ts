import { 
  trafficData, 
  channelData, 
  activityFeed, 
  availableWidgets,
  defaultActiveWidgets,
  metricsData
} from '../../../../data/dashboardData';
import { DashboardApiMethods } from '../model/types';
import { delay } from '../../utils';
import { isDev } from '../../../lib';

// Add some randomness to delay in dev mode
const getDelay = () => isDev() ? Math.random() * 300 + 300 : 0;

export const dashboardApi: DashboardApiMethods = {
  getTrafficData: async () => {
    await delay(getDelay());
    return trafficData;
  },
  
  getChannelData: async () => {
    await delay(getDelay());
    return channelData;
  },
  
  getActivityFeed: async () => {
    await delay(getDelay());
    return activityFeed;
  },
  
  getAvailableWidgets: async () => {
    await delay(getDelay());
    return availableWidgets;
  },
  
  getActiveWidgets: async () => {
    await delay(getDelay());
    // Simulate getting user preferences from backend
    return defaultActiveWidgets;
  },
  
  updateActiveWidgets: async (widgetIds: string[]) => {
    await delay(getDelay());
    // Simulate saving to backend
    return { success: true, widgetIds };
  },

  getMetricsData: async () => {
    await delay(getDelay());
    return metricsData;
  }
};