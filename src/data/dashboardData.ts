import React from 'react';
import {
  Eye,
  Check,
  Clock,
  BarChart2,
  Activity,
  Mail,
  HelpCircle,
  Instagram,
  FileText,
  ShoppingBag,
  Package
} from 'lucide-react';
import {
  TrafficDataPoint,
  ChannelDataPoint,
  ActivityItem,
  Widget
} from '../types/dashboard.types';

// Traffic data for line chart
export const trafficData: TrafficDataPoint[] = [
  { name: 'Jan', organic: 4000, direct: 2400, social: 1800, referral: 1200 },
  { name: 'Feb', organic: 4200, direct: 2100, social: 2000, referral: 1600 },
  { name: 'Mar', organic: 5000, direct: 2200, social: 2200, referral: 1800 },
  { name: 'Apr', organic: 5500, direct: 2500, social: 2500, referral: 2000 },
  { name: 'May', organic: 4800, direct: 2300, social: 2300, referral: 1900 },
  { name: 'Jun', organic: 6000, direct: 2600, social: 2800, referral: 2200 }
];

// Channel data for pie chart
export const channelData: ChannelDataPoint[] = [
  { name: 'Organic', value: 45 },
  { name: 'Direct', value: 20 },
  { name: 'Social', value: 25 },
  { name: 'Referral', value: 10 }
];

// Colors for charts
export const COLORS = ['#7FB3D5', '#F9E79F', '#A9CCE3', '#D4E6F1'];
export const GRADIENT_COLORS = [
  'url(#indigo-gradient)', 
  'url(#purple-gradient)', 
  'url(#cyan-gradient)',
  'url(#violet-gradient)'
];

// Activity feed data
export const activityFeed: ActivityItem[] = [
  { id: 1, event: 'New subscriber signed up', time: '2 minutes ago', icon: <Activity /> },
  { id: 2, event: 'Blog post "10 SEO Tips" published', time: '25 minutes ago', icon: <FileText /> },
  { id: 3, event: 'Instagram post received 120 likes', time: '1 hour ago', icon: <Instagram /> },
  { id: 4, event: 'Search rankings improved for "digital marketing"', time: '3 hours ago', icon: <Activity /> },
  { id: 5, event: 'Weekly report generated', time: '5 hours ago', icon: <FileText /> }
];

// Available widgets list
export const availableWidgets: Widget[] = [
  { id: 'visitors', name: 'Total Visitors', icon: <Eye className="h-10 w-10 text-blue-500" />, color: 'blue-300' },
  { id: 'conversion', name: 'Conversion Rate', icon: <Check className="h-10 w-10 text-yellow-500" />, color: 'yellow-200' },
  { id: 'time-on-site', name: 'Avg Time on Site', icon: <Clock className="h-10 w-10 text-blue-500" />, color: 'blue-200' },
  { id: 'traffic-analytics', name: 'Traffic Analytics', icon: <BarChart2 className="h-10 w-10 text-blue-500" /> },
  { id: 'quick-actions', name: 'Quick Actions', icon: <Mail className="h-10 w-10 text-blue-500" /> },
  { id: 'activity-feed', name: 'Activity Feed', icon: <Activity className="h-10 w-10 text-blue-500" /> },
  { id: 'traffic-sources', name: 'Traffic Sources', icon: <BarChart2 className="h-10 w-10 text-blue-500" /> }
];

// Metrics data
export const metricsData = {
  visitors: {
    title: 'Total Visitors',
    value: '28,249',
    icon: <Eye className="h-6 w-6 text-white" />,
    color: 'blue-300',
    progress: 75,
    target: '40,000'
  },
  conversion: {
    title: 'Conversion Rate',
    value: '5.2%',
    icon: <Check className="h-6 w-6 text-white" />,
    color: 'yellow-200',
    progress: 86,
    target: '6%'
  },
  timeOnSite: {
    title: 'Avg Time on Site',
    value: '4:32',
    icon: <Clock className="h-6 w-6 text-white" />,
    color: 'blue-200',
    progress: 65,
    target: '6:00'
  }
};

// Quick actions data
export const quickActionsData = [
  { id: 'create-content', label: 'Create Content', icon: <FileText className="h-8 w-8 mb-3 text-cyan-400" />, bgColor: 'bg-indigo-900', borderColor: 'border-indigo-700', hoverColor: 'hover:bg-indigo-800' },
  { id: 'post-social', label: 'Post to Social', icon: <Instagram className="h-8 w-8 mb-3 text-cyan-400" />, bgColor: 'bg-purple-900', borderColor: 'border-purple-700', hoverColor: 'hover:bg-purple-800' },
  { id: 'send-newsletter', label: 'Send Newsletter', icon: <Mail className="h-8 w-8 mb-3 text-cyan-400" />, bgColor: 'bg-indigo-900', borderColor: 'border-indigo-700', hoverColor: 'hover:bg-indigo-800' },
  { id: 'get-help', label: 'Get Help', icon: <HelpCircle className="h-8 w-8 mb-3 text-cyan-400" />, bgColor: 'bg-purple-900', borderColor: 'border-purple-700', hoverColor: 'hover:bg-purple-800' }
];

// Navigation items
export const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', icon: <Eye className="h-5 w-5 mr-3" /> },
  { id: 'seo', label: 'SEO', icon: <Activity className="h-5 w-5 mr-3" /> },
  { id: 'content', label: 'Content', icon: <FileText className="h-5 w-5 mr-3" /> },
  { id: 'social', label: 'Social', icon: <Instagram className="h-5 w-5 mr-3" /> },
  { id: 'campaigns', label: 'Campaigns', icon: <Activity className="h-5 w-5 mr-3" /> },
  { id: 'marketplaces', label: 'Marketplaces', icon: <ShoppingBag className="h-5 w-5 mr-3" />, hasChildren: true },
  { id: 'providers', label: 'Product Providers', icon: <Package className="h-5 w-5 mr-3" />, hasChildren: true },
  { id: 'competitors', label: 'Competitors', icon: <Activity className="h-5 w-5 mr-3" /> },
  { id: 'reports', label: 'Reports', icon: <BarChart2 className="h-5 w-5 mr-3" /> }
];

// Default active widgets
export const defaultActiveWidgets = [
  'visitors', 
  'conversion', 
  'time-on-site',
  'traffic-analytics',
  'quick-actions',
  'activity-feed',
  'traffic-sources'
];
