import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Bell, Settings, Search, Home, Users, TrendingUp, FileText, Instagram, Trello, BarChart2, Activity, Calendar, Clock, ArrowUp, ArrowDown, ExternalLink, Database, Eye, ThumbsUp, MessageSquare, Mail, Check, HelpCircle, DollarSign, ShoppingBag, Package, ChevronRight } from 'lucide-react';

// Sample data for charts
const trafficData = [
  { name: 'Jan', organic: 4000, direct: 2400, social: 1800, referral: 1200 },
  { name: 'Feb', organic: 4200, direct: 2100, social: 2000, referral: 1600 },
  { name: 'Mar', organic: 5000, direct: 2200, social: 2200, referral: 1800 },
  { name: 'Apr', organic: 5500, direct: 2500, social: 2500, referral: 2000 },
  { name: 'May', organic: 4800, direct: 2300, social: 2300, referral: 1900 },
  { name: 'Jun', organic: 6000, direct: 2600, social: 2800, referral: 2200 }
];

const channelData = [
  { name: 'Organic', value: 45 },
  { name: 'Direct', value: 20 },
  { name: 'Social', value: 25 },
  { name: 'Referral', value: 10 }
];

const COLORS = ['#7FB3D5', '#F9E79F', '#A9CCE3', '#D4E6F1'];

const activityFeed = [
  { id: 1, event: 'New subscriber signed up', time: '2 minutes ago' },
  { id: 2, event: 'Blog post "10 SEO Tips" published', time: '25 minutes ago' },
  { id: 3, event: 'Instagram post received 120 likes', time: '1 hour ago' },
  { id: 4, event: 'Search rankings improved for "digital marketing"', time: '3 hours ago' },
  { id: 5, event: 'Weekly report generated', time: '5 hours ago' }
];

// MetricCard Component
const MetricCard = ({ title, value, icon, color, progress, target, isEditMode, onRemove }) => {
  let bgColor, iconBg;
  
  // Using our limited color palette
  switch(color) {
    case 'blue-300':
      bgColor = 'bg-gradient-to-r from-indigo-600 to-purple-600';
      iconBg = 'bg-indigo-800';
      break;
    case 'yellow-200':
      bgColor = 'bg-gradient-to-r from-purple-600 to-indigo-600';
      iconBg = 'bg-purple-800';
      break;
    case 'blue-200':
      bgColor = 'bg-gradient-to-r from-indigo-600 to-indigo-700';
      iconBg = 'bg-indigo-800';
      break;
    default:
      bgColor = 'bg-gradient-to-r from-indigo-600 to-purple-600';
      iconBg = 'bg-indigo-800';
  }
  
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all border border-gray-700">
      {isEditMode && (
        <button 
          onClick={onRemove}
          className="absolute -top-2 -right-2 bg-gray-700 text-red-400 rounded-full h-6 w-6 flex items-center justify-center shadow-sm hover:bg-gray-600"
        >
          ×
        </button>
      )}
      <div className={`absolute top-0 left-0 w-full h-1 ${bgColor} rounded-t-lg`}></div>
      <div className="flex justify-between items-start pt-3">
        <div>
          <p className="text-sm font-medium text-gray-400">{title}</p>
          <p className="text-3xl font-bold text-white mt-2">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${iconBg} text-cyan-400`}>
          {icon}
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div className={`${bgColor} h-2 rounded-full`} style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Target: {target}</span>
          <span>{progress}% Complete</span>
        </div>
      </div>
    </div>
  );
};

// TrafficAnalyticsWidget Component
const TrafficAnalyticsWidget = ({ isEditMode, onRemove }) => {
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-md mb-8 p-6 hover:shadow-lg transition-all border border-gray-700">
      {isEditMode && (
        <button 
          onClick={onRemove}
          className="absolute -top-2 -right-2 bg-gray-700 text-red-400 rounded-full h-6 w-6 flex items-center justify-center shadow-sm hover:bg-gray-600"
        >
          ×
        </button>
      )}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg"></div>
      <div className="flex justify-between items-center mb-6 pt-3">
        <h3 className="text-lg font-medium text-white">Traffic Analytics</h3>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-sm rounded-md bg-indigo-700 text-white shadow-sm">7 Days</button>
          <button className="px-4 py-2 text-sm rounded-md bg-gray-700 text-gray-300 border border-gray-600">30 Days</button>
          <button className="px-4 py-2 text-sm rounded-md bg-gray-700 text-gray-300 border border-gray-600">90 Days</button>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={trafficData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="name" stroke="#9ca3af" />
          <YAxis stroke="#9ca3af" />
          <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: 'white' }} />
          <Legend />
          <Line type="monotone" dataKey="organic" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="direct" stroke="#22d3ee" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="social" stroke="#6366f1" strokeWidth={2} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="referral" stroke="#a78bfa" strokeWidth={2} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// ActivityFeedWidget Component
const ActivityFeedWidget = ({ isEditMode, onRemove }) => {
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-md h-full hover:shadow-lg transition-all border border-gray-700">
      {isEditMode && (
        <button 
          onClick={onRemove}
          className="absolute -top-2 -right-2 bg-gray-700 text-red-400 rounded-full h-6 w-6 flex items-center justify-center shadow-sm hover:bg-gray-600"
        >
          ×
        </button>
      )}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg"></div>
      <div className="px-6 py-4 border-b border-gray-700 flex justify-between items-center">
        <h3 className="font-medium text-white">Recent Activity</h3>
        <button className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center">
          View All <ExternalLink className="h-4 w-4 ml-1" />
        </button>
      </div>
      <div className="divide-y divide-gray-700">
        {activityFeed.slice(0, 3).map((activity) => (
          <div key={activity.id} className="px-6 py-4 flex items-start">
            <div className="h-10 w-10 rounded-full bg-indigo-800 flex items-center justify-center text-cyan-400 mr-4">
              <Activity className="h-5 w-5" />
            </div>
            <div>
              <p className="text-gray-200">{activity.event}</p>
              <p className="text-sm text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// TrafficSourcesWidget Component
const TrafficSourcesWidget = ({ isEditMode, onRemove }) => {
  // Using our limited color palette
  const GRADIENT_COLORS = [
    'url(#indigo-gradient)', 
    'url(#purple-gradient)', 
    'url(#cyan-gradient)',
    'url(#violet-gradient)'
  ];
  
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-md p-6 h-full hover:shadow-lg transition-all border border-gray-700">
      {isEditMode && (
        <button 
          onClick={onRemove}
          className="absolute -top-2 -right-2 bg-gray-700 text-red-400 rounded-full h-6 w-6 flex items-center justify-center shadow-sm hover:bg-gray-600"
        >
          ×
        </button>
      )}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg"></div>
      <h3 className="font-medium text-white mb-4 pt-3">Traffic Sources</h3>
      <div className="flex items-center justify-center h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <defs>
              <linearGradient id="indigo-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4f46e5" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>
              <linearGradient id="purple-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
              <linearGradient id="cyan-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
              <linearGradient id="violet-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <Pie
              data={channelData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelStyle={{ fill: 'white' }}
            >
              {channelData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={GRADIENT_COLORS[index % GRADIENT_COLORS.length]} />
              ))}
            </Pie>
            <Tooltip contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', color: 'white' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// QuickActionsWidget Component
const QuickActionsWidget = ({ isEditMode, onRemove }) => {
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-md mb-8 hover:shadow-lg transition-all border border-gray-700">
      {isEditMode && (
        <button 
          onClick={onRemove}
          className="absolute -top-2 -right-2 bg-gray-700 text-red-400 rounded-full h-6 w-6 flex items-center justify-center shadow-sm hover:bg-gray-600"
        >
          ×
        </button>
      )}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg"></div>
      <div className="px-6 py-4 border-b border-gray-700">
        <h3 className="font-medium text-white">Quick Actions</h3>
      </div>
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        <button className="flex flex-col items-center justify-center bg-indigo-900 hover:bg-indigo-800 text-white rounded-lg p-4 transition-colors h-28 shadow-md border border-indigo-700">
          <FileText className="h-8 w-8 mb-3 text-cyan-400" />
          <span className="text-sm">Create Content</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-purple-900 hover:bg-purple-800 text-white rounded-lg p-4 transition-colors h-28 shadow-md border border-purple-700">
          <Instagram className="h-8 w-8 mb-3 text-cyan-400" />
          <span className="text-sm">Post to Social</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-indigo-900 hover:bg-indigo-800 text-white rounded-lg p-4 transition-colors h-28 shadow-md border border-indigo-700">
          <Mail className="h-8 w-8 mb-3 text-cyan-400" />
          <span className="text-sm">Send Newsletter</span>
        </button>
        <button className="flex flex-col items-center justify-center bg-purple-900 hover:bg-purple-800 text-white rounded-lg p-4 transition-colors h-28 shadow-md border border-purple-700">
          <HelpCircle className="h-8 w-8 mb-3 text-cyan-400" />
          <span className="text-sm">Get Help</span>
        </button>
      </div>
    </div>
  );
};

// AddWidgetButton Component
const AddWidgetButton = ({ onClick }) => {
  return (
    <div 
      className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all hover:border-gray-600"
      onClick={onClick}
    >
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white h-12 w-12 rounded-full flex items-center justify-center mb-3 text-xl font-bold shadow-md">
        +
      </div>
      <p className="text-white font-medium">Add Widget</p>
      <p className="text-gray-400 text-sm mt-1">Choose from available widgets</p>
    </div>
  );
};

// AddWidgetModal Component
const AddWidgetModal = ({ availableWidgets, activeWidgets, onAdd, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full p-6 border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-white">Add Widget</h3>
          <button 
            className="text-gray-400 hover:text-white text-xl"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          {availableWidgets
            .filter(widget => !activeWidgets.includes(widget.id))
            .map((widget) => (
              <div 
                key={widget.id}
                className="border border-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-700 hover:shadow-md transition-all"
                onClick={() => onAdd(widget.id)}
              >
                <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg h-24 mb-3 flex items-center justify-center">
                  <div className="text-cyan-400">
                    {widget.icon}
                  </div>
                </div>
                <p className="font-medium text-white text-center">{widget.name}</p>
              </div>
            ))}
        </div>
        <div className="flex justify-end">
          <button 
            className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            onClick={onClose}  
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isEditMode, setIsEditMode] = useState(false);
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false);
  
  // Available widgets list
  const availableWidgets = [
    { id: 'visitors', name: 'Total Visitors', icon: <Eye className="h-10 w-10 text-blue-500" />, color: 'blue-300' },
    { id: 'conversion', name: 'Conversion Rate', icon: <Check className="h-10 w-10 text-yellow-500" />, color: 'yellow-200' },
    { id: 'time-on-site', name: 'Avg Time on Site', icon: <Clock className="h-10 w-10 text-blue-500" />, color: 'blue-200' },
    { id: 'traffic-analytics', name: 'Traffic Analytics', icon: <BarChart2 className="h-10 w-10 text-blue-500" /> },
    { id: 'quick-actions', name: 'Quick Actions', icon: <Mail className="h-10 w-10 text-blue-500" /> },
    { id: 'activity-feed', name: 'Activity Feed', icon: <Activity className="h-10 w-10 text-blue-500" /> },
    { id: 'traffic-sources', name: 'Traffic Sources', icon: <BarChart2 className="h-10 w-10 text-blue-500" /> }
  ];
  
  // State to track which widgets are visible
  const [activeWidgets, setActiveWidgets] = useState([
    'visitors', 
    'conversion', 
    'time-on-site',
    'traffic-analytics',
    'quick-actions',
    'activity-feed',
    'traffic-sources'
  ]);
  
  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
    setShowAddWidgetModal(false);
  };
  
  const removeWidget = (widgetId) => {
    setActiveWidgets(activeWidgets.filter(id => id !== widgetId));
  };
  
  const addWidget = (widgetId) => {
    if (!activeWidgets.includes(widgetId)) {
      setActiveWidgets([...activeWidgets, widgetId]);
    }
    setShowAddWidgetModal(false);
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      {/* Top Navigation */}
      <header className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white shadow-lg">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <Activity className="h-8 w-8 text-cyan-400" />
            <h1 className="text-xl font-bold">MarketPro Dashboard</h1>
          </div>
          <div className="flex items-center space-x-6">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-gray-800 bg-opacity-50 backdrop-blur-sm text-white placeholder-gray-400 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-opacity-50 border border-gray-700"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-300 cursor-pointer hover:text-cyan-400 transition-colors" />
              <span className="absolute -top-1 -right-1 bg-cyan-400 text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
            </div>
            <Settings className="h-6 w-6 text-gray-300 cursor-pointer hover:text-cyan-400 transition-colors" />
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
              JP
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside className="w-56 bg-gray-900 text-gray-300 flex flex-col py-6 border-r border-gray-800">
          <div className="flex flex-col space-y-1">
            <div 
              className={`flex items-center px-4 py-3 ${activeTab === 'dashboard' ? 'bg-gray-800 text-cyan-400 border-l-2 border-cyan-400' : 'hover:bg-gray-800 hover:text-gray-100'} rounded-r-none cursor-pointer transition-colors`}
              onClick={() => setActiveTab('dashboard')}
            >
              <Home className="h-5 w-5 mr-3" />
              <span className="text-sm font-medium">Dashboard</span>
            </div>
            <div 
              className={`flex items-center px-4 py-3 ${activeTab === 'seo' ? 'bg-gray-800 text-cyan-400 border-l-2 border-cyan-400' : 'hover:bg-gray-800 hover:text-gray-100'} rounded-r-none cursor-pointer transition-colors`}
              onClick={() => setActiveTab('seo')}
            >
              <TrendingUp className="h-5 w-5 mr-3" />
              <span className="text-sm font-medium">SEO</span>
            </div>
            <div 
              className={`flex items-center px-4 py-3 ${activeTab === 'content' ? 'bg-gray-800 text-cyan-400 border-l-2 border-cyan-400' : 'hover:bg-gray-800 hover:text-gray-100'} rounded-r-none cursor-pointer transition-colors`}
              onClick={() => setActiveTab('content')}
            >
              <FileText className="h-5 w-5 mr-3" />
              <span className="text-sm font-medium">Content</span>
            </div>
            <div 
              className={`flex items-center px-4 py-3 ${activeTab === 'social' ? 'bg-gray-800 text-cyan-400 border-l-2 border-cyan-400' : 'hover:bg-gray-800 hover:text-gray-100'} rounded-r-none cursor-pointer transition-colors`}
              onClick={() => setActiveTab('social')}
            >
              <Instagram className="h-5 w-5 mr-3" />
              <span className="text-sm font-medium">Social</span>
            </div>
            <div 
              className={`flex items-center px-4 py-3 ${activeTab === 'campaigns' ? 'bg-gray-800 text-cyan-400 border-l-2 border-cyan-400' : 'hover:bg-gray-800 hover:text-gray-100'} rounded-r-none cursor-pointer transition-colors`}
              onClick={() => setActiveTab('campaigns')}
            >
              <Trello className="h-5 w-5 mr-3" />
              <span className="text-sm font-medium">Campaigns</span>
            </div>
            <div 
              className={`flex items-center px-4 py-3 ${activeTab === 'marketplaces' ? 'bg-gray-800 text-cyan-400 border-l-2 border-cyan-400' : 'hover:bg-gray-800 hover:text-gray-100'} rounded-r-none cursor-pointer transition-colors justify-between`}
              onClick={() => setActiveTab('marketplaces')}
            >
              <div className="flex items-center">
                <ShoppingBag className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">Marketplaces</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </div>
            <div 
              className={`flex items-center px-4 py-3 ${activeTab === 'providers' ? 'bg-gray-800 text-cyan-400 border-l-2 border-cyan-400' : 'hover:bg-gray-800 hover:text-gray-100'} rounded-r-none cursor-pointer transition-colors justify-between`}
              onClick={() => setActiveTab('providers')}
            >
              <div className="flex items-center">
                <Package className="h-5 w-5 mr-3" />
                <span className="text-sm font-medium">Product Providers</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </div>
            <div 
              className={`flex items-center px-4 py-3 ${activeTab === 'competitors' ? 'bg-gray-800 text-cyan-400 border-l-2 border-cyan-400' : 'hover:bg-gray-800 hover:text-gray-100'} rounded-r-none cursor-pointer transition-colors`}
              onClick={() => setActiveTab('competitors')}
            >
              <Users className="h-5 w-5 mr-3" />
              <span className="text-sm font-medium">Competitors</span>
            </div>
            <div 
              className={`flex items-center px-4 py-3 ${activeTab === 'reports' ? 'bg-gray-800 text-cyan-400 border-l-2 border-cyan-400' : 'hover:bg-gray-800 hover:text-gray-100'} rounded-r-none cursor-pointer transition-colors`}
              onClick={() => setActiveTab('reports')}
            >
              <BarChart2 className="h-5 w-5 mr-3" />
              <span className="text-sm font-medium">Reports</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          {activeTab === 'dashboard' && (
            <div className="mb-8">
              {/* Dashboard Header with Edit Controls */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={toggleEditMode}
                    className={`px-4 py-2 rounded-md text-sm flex items-center ${isEditMode ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'}`}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    {isEditMode ? 'Save Layout' : 'Customize Dashboard'}
                  </button>
                  {isEditMode && (
                    <div className="bg-gray-800 text-cyan-400 px-3 py-2 rounded-md text-sm border border-gray-700">
                      Click × to remove widgets
                    </div>
                  )}
                </div>
              </div>
              
              {/* First Row: Metrics Cards */}
              {(activeWidgets.includes('visitors') || activeWidgets.includes('conversion') || activeWidgets.includes('time-on-site')) && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Visitors Card */}
                  {activeWidgets.includes('visitors') && (
                    <div className="col-span-1">
                      <MetricCard 
                        title="Total Visitors"
                        value="28,249"
                        icon={<Eye className="h-6 w-6 text-white" />}
                        color="blue-300"
                        progress={75}
                        target="40,000"
                        isEditMode={isEditMode}
                        onRemove={() => removeWidget('visitors')}
                      />
                    </div>
                  )}
                  
                  {/* Conversion Card */}
                  {activeWidgets.includes('conversion') && (
                    <div className="col-span-1">
                      <MetricCard 
                        title="Conversion Rate"
                        value="5.2%"
                        icon={<Check className="h-6 w-6 text-white" />}
                        color="yellow-200"
                        progress={86}
                        target="6%"
                        isEditMode={isEditMode}
                        onRemove={() => removeWidget('conversion')}
                      />
                    </div>
                  )}
                  
                  {/* Time on Site Card */}
                  {activeWidgets.includes('time-on-site') && (
                    <div className="col-span-1">
                      <MetricCard 
                        title="Avg Time on Site"
                        value="4:32"
                        icon={<Clock className="h-6 w-6 text-white" />}
                        color="blue-200"
                        progress={65}
                        target="6:00"
                        isEditMode={isEditMode}
                        onRemove={() => removeWidget('time-on-site')}
                      />
                    </div>
                  )}
                </div>
              )}
              
              {/* Traffic Analytics */}
              {activeWidgets.includes('traffic-analytics') && (
                <TrafficAnalyticsWidget 
                  isEditMode={isEditMode}
                  onRemove={() => removeWidget('traffic-analytics')}
                />
              )}
              
              {/* Quick Actions */}
              {activeWidgets.includes('quick-actions') && (
                <QuickActionsWidget 
                  isEditMode={isEditMode}
                  onRemove={() => removeWidget('quick-actions')}
                />
              )}
              
              {/* Two Column Layout */}
              {(activeWidgets.includes('activity-feed') || activeWidgets.includes('traffic-sources')) && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  {/* Activity Feed */}
                  {activeWidgets.includes('activity-feed') && (
                    <div className="col-span-1">
                      <ActivityFeedWidget 
                        isEditMode={isEditMode}
                        onRemove={() => removeWidget('activity-feed')}
                      />
                    </div>
                  )}
                  
                  {/* Traffic Sources */}
                  {activeWidgets.includes('traffic-sources') && (
                    <div className="col-span-1">
                      <TrafficSourcesWidget 
                        isEditMode={isEditMode}
                        onRemove={() => removeWidget('traffic-sources')}
                      />
                    </div>
                  )}
                </div>
              )}
              
              {/* Add Widget Button - Only visible in edit mode */}
              {isEditMode && (
                <AddWidgetButton onClick={() => setShowAddWidgetModal(true)} />
              )}
            </div>
          )}
          
          {activeTab === 'marketplaces' && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-indigo-900">Marketplace Management</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Shopify Card */}
                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-t-lg"></div>
                  <div className="flex items-center mb-4 pt-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white mr-4">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Shopify</h3>
                      <p className="text-sm text-gray-500">Connected · Sync active</p>
                    </div>
                    <button className="ml-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-md text-sm shadow-sm">
                      Manage Store
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Products</p>
                      <p className="text-xl font-bold text-gray-900">128</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Orders (30d)</p>
                      <p className="text-xl font-bold text-gray-900">243</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Revenue (30d)</p>
                      <p className="text-xl font-bold text-gray-900">$12,450</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Conversion</p>
                      <p className="text-xl font-bold text-gray-900">3.2%</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-indigo-600 text-sm flex items-center">
                      SEO Analysis <ExternalLink className="h-3 w-3 ml-1" />
                    </button>
                    <button className="text-indigo-600 text-sm flex items-center">
                      Bulk Edit Products <ExternalLink className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
                
                {/* Etsy Card */}
                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-t-lg"></div>
                  <div className="flex items-center mb-4 pt-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center text-white mr-4">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Etsy</h3>
                      <p className="text-sm text-gray-500">Connected · Sync active</p>
                    </div>
                    <button className="ml-auto bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-md text-sm shadow-sm">
                      Manage Store
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Products</p>
                      <p className="text-xl font-bold text-gray-900">86</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Orders (30d)</p>
                      <p className="text-xl font-bold text-gray-900">142</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Revenue (30d)</p>
                      <p className="text-xl font-bold text-gray-900">$8,675</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Conversion</p>
                      <p className="text-xl font-bold text-gray-900">4.1%</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="text-indigo-600 text-sm flex items-center">
                      SEO Analysis <ExternalLink className="h-3 w-3 ml-1" />
                    </button>
                    <button className="text-indigo-600 text-sm flex items-center">
                      Bulk Edit Products <ExternalLink className="h-3 w-3 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect New Marketplace</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center text-white mb-2">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <span className="text-sm text-gray-800">Amazon</span>
                  </button>
                  <button className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-white mb-2">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <span className="text-sm text-gray-800">Walmart</span>
                  </button>
                  <button className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-400 to-red-600 flex items-center justify-center text-white mb-2">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <span className="text-sm text-gray-800">eBay</span>
                  </button>
                  <button className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center text-white mb-2">
                      <ShoppingBag className="h-6 w-6" />
                    </div>
                    <span className="text-sm text-gray-800">Other</span>
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'providers' && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-indigo-900">Product Providers</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {/* Printify Card */}
                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-t-lg"></div>
                  <div className="flex items-center mb-4 pt-3">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center text-white mr-4">
                      <Package className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Printify</h3>
                      <p className="text-sm text-gray-500">Connected · Last sync 2h ago</p>
                    </div>
                    <button className="ml-auto bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-md text-sm shadow-sm">
                      Open Dashboard
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Products</p>
                      <p className="text-xl font-bold text-gray-900">174</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">In Production</p>
                      <p className="text-xl font-bold text-gray-900">12</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Fulfilled</p>
                      <p className="text-xl font-bold text-gray-900">326</p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-sm text-gray-500">Provider Status</p>
                      <div className="flex items-center">
                        <span className="h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                        <p className="font-medium text-gray-900">Operational</p>
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
                
                {/* Add Provider Card */}
                <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center text-white mb-4">
                    <span className="text-2xl font-bold">+</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Add New Provider</h3>
                  <p className="text-center text-gray-500 mb-4">Connect to a print-on-demand or manufacturing service</p>
                  <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2 rounded-md shadow-sm">
                    Connect Provider
                  </button>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Providers</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <button className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center text-white mb-2">
                      <Package className="h-6 w-6" />
                    </div>
                    <span className="text-sm text-gray-800">Printful</span>
                  </button>
                  <button className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-400 to-amber-600 flex items-center justify-center text-white mb-2">
                      <Package className="h-6 w-6" />
                    </div>
                    <span className="text-sm text-gray-800">Gooten</span>
                  </button>
                  <button className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center text-white mb-2">
                      <Package className="h-6 w-6" />
                    </div>
                    <span className="text-sm text-gray-800">SPOD</span>
                  </button>
                  <button className="border border-gray-200 rounded-lg p-4 flex flex-col items-center hover:border-indigo-300 hover:bg-indigo-50 transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-400 to-indigo-600 flex items-center justify-center text-white mb-2">
                      <Package className="h-6 w-6" />
                    </div>
                    <span className="text-sm text-gray-800">Other</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
      
      {/* Widget selection modal */}
      {showAddWidgetModal && (
        <AddWidgetModal 
          availableWidgets={availableWidgets}
          activeWidgets={activeWidgets}
          onAdd={addWidget}
          onClose={() => setShowAddWidgetModal(false)}
        />
      )}
    </div>
  );
}