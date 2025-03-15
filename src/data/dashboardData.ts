// Traffic data for line chart
export const trafficData = [
  { name: 'Jan', organic: 4000, direct: 2400, social: 1800, referral: 1200 },
  { name: 'Feb', organic: 4200, direct: 2100, social: 2000, referral: 1600 },
  { name: 'Mar', organic: 5000, direct: 2200, social: 2200, referral: 1800 },
  { name: 'Apr', organic: 5500, direct: 2500, social: 2500, referral: 2000 },
  { name: 'May', organic: 4800, direct: 2300, social: 2300, referral: 1900 },
  { name: 'Jun', organic: 6000, direct: 2600, social: 2800, referral: 2200 }
];

// Channel data for pie chart
export const channelData = [
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
export const activityFeed = [
  { id: 1, event: 'New subscriber signed up', time: '2 minutes ago', iconName: 'Activity' },
  { id: 2, event: 'Blog post "10 SEO Tips" published', time: '25 minutes ago', iconName: 'FileText' },
  { id: 3, event: 'Instagram post received 120 likes', time: '1 hour ago', iconName: 'Instagram' },
  { id: 4, event: 'Search rankings improved for "digital marketing"', time: '3 hours ago', iconName: 'Activity' },
  { id: 5, event: 'Weekly report generated', time: '5 hours ago', iconName: 'FileText' }
];

// Available widgets list
export const availableWidgets = [
  { id: 'visitors', name: 'Total Visitors', iconName: 'Eye', color: 'blue-300' },
  { id: 'conversion', name: 'Conversion Rate', iconName: 'Check', color: 'yellow-200' },
  { id: 'time-on-site', name: 'Avg Time on Site', iconName: 'Clock', color: 'blue-200' },
  { id: 'traffic-analytics', name: 'Traffic Analytics', iconName: 'BarChart2' },
  { id: 'quick-actions', name: 'Quick Actions', iconName: 'Mail' },
  { id: 'activity-feed', name: 'Activity Feed', iconName: 'Activity' },
  { id: 'traffic-sources', name: 'Traffic Sources', iconName: 'BarChart2' }
];

// Metrics data
export const metricsData = {
  visitors: {
    title: 'Total Visitors',
    value: '28,249',
    iconName: 'Eye',
    color: 'blue-300',
    progress: 75,
    target: '40,000'
  },
  conversion: {
    title: 'Conversion Rate',
    value: '5.2%',
    iconName: 'Check',
    color: 'yellow-200',
    progress: 86,
    target: '6%'
  },
  timeOnSite: {
    title: 'Avg Time on Site',
    value: '4:32',
    iconName: 'Clock',
    color: 'blue-200',
    progress: 65,
    target: '6:00'
  }
};

// Quick actions data
export const quickActionsData = [
  { id: 'create-content', label: 'Create Content', iconName: 'FileText', bgColor: 'bg-indigo-900', borderColor: 'border-indigo-700', hoverColor: 'hover:bg-indigo-800' },
  { id: 'post-social', label: 'Post to Social', iconName: 'Instagram', bgColor: 'bg-purple-900', borderColor: 'border-purple-700', hoverColor: 'hover:bg-purple-800' },
  { id: 'send-newsletter', label: 'Send Newsletter', iconName: 'Mail', bgColor: 'bg-indigo-900', borderColor: 'border-indigo-700', hoverColor: 'hover:bg-indigo-800' },
  { id: 'get-help', label: 'Get Help', iconName: 'HelpCircle', bgColor: 'bg-purple-900', borderColor: 'border-purple-700', hoverColor: 'hover:bg-purple-800' }
];

// Navigation items
export const navigationItems = [
  { id: 'dashboard', label: 'Dashboard', iconName: 'Eye' },
  { id: 'seo', label: 'SEO', iconName: 'Activity' },
  { id: 'content', label: 'Content', iconName: 'FileText' },
  { id: 'social', label: 'Social', iconName: 'Instagram' },
  { id: 'campaigns', label: 'Campaigns', iconName: 'Activity' },
  { id: 'marketplaces', label: 'Marketplaces', iconName: 'ShoppingBag', hasChildren: true },
  { id: 'providers', label: 'Product Providers', iconName: 'Package', hasChildren: true },
  { id: 'competitors', label: 'Competitors', iconName: 'Activity' },
  { id: 'reports', label: 'Reports', iconName: 'BarChart2' }
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
