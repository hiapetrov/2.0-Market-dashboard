import { TrafficDataPoint, ChannelDataPoint, ActivityItem, Widget, MetricData } from '../../../../entities/dashboard';

export interface DashboardApiMethods {
  getTrafficData: () => Promise<TrafficDataPoint[]>;
  getChannelData: () => Promise<ChannelDataPoint[]>;
  getActivityFeed: () => Promise<ActivityItem[]>;
  getAvailableWidgets: () => Promise<Widget[]>;
  getActiveWidgets: () => Promise<string[]>;
  updateActiveWidgets: (widgetIds: string[]) => Promise<{ success: boolean; widgetIds: string[] }>;
  getMetricsData: () => Promise<{ [key: string]: MetricData }>;
}