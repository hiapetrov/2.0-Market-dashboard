import React, { useState, useEffect } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import { MetricCard } from '../widgets/metric-card';
import TrafficAnalyticsWidget from '../components/dashboard/widgets/TrafficAnalyticsWidget';
import ActivityFeedWidget from '../components/dashboard/widgets/ActivityFeedWidget';
//import QuickActionsWidget from '../components/dashboard/widgets/QuickActionsWidget';
//import TrafficSourcesWidget from '../components/dashboard/widgets/TrafficSourcesWidget';
//import AddWidgetModal from '../components/dashboard/AddWidgetModal';
import { dashboardApi } from '../data/mockApi';
import { Widget, WidgetProps } from '../entities/dashboard';
import { AddWidgetButton } from '../features/widget-management';

// Mock the missing component (this would be replaced with actual components)
const AddWidgetModal: React.FC<{
  onClose: () => void, 
  onAdd: (widgetId: string) => void, 
  availableWidgets: Widget[], 
  activeWidgets: string[]
}> = ({ onClose, onAdd, availableWidgets, activeWidgets }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
    <div className="bg-gray-800 p-6 rounded-lg max-w-lg w-full">
      <h2 className="text-white text-xl mb-4">Select Widget</h2>
      <div className="grid grid-cols-2 gap-3">
        {availableWidgets.filter(w => !activeWidgets.includes(w.id)).map(widget => (
          <button
            key={widget.id}
            className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg flex flex-col items-center"
            onClick={() => onAdd(widget.id)}
          >
            <div className="mb-2">{widget.iconName}</div>
            <span className="text-sm text-white">{widget.name}</span>
          </button>
        ))}
      </div>
      <div className="mt-4 flex justify-end">
        <button onClick={onClose} className="bg-gray-700 text-white px-4 py-2 rounded-md">
          Cancel
        </button>
      </div>
    </div>
  </div>
);

// Placeholder QuickActionsWidget component
const QuickActionsWidget: React.FC<WidgetProps> = ({ isEditMode, onRemove }) => (
  <div className="relative bg-gray-800 rounded-lg shadow-md p-6 mb-6 hover:shadow-lg transition-all border border-gray-700">
    {isEditMode && onRemove && (
      <button 
        onClick={onRemove}
        className="absolute -top-2 -right-2 bg-gray-700 text-red-400 rounded-full h-6 w-6 flex items-center justify-center shadow-sm hover:bg-gray-600"
      >
        ×
      </button>
    )}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg"></div>
    <h3 className="text-lg font-medium text-white mb-4 pt-3">Quick Actions</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
      {/* Quick action buttons would be rendered here */}
      <div className="bg-indigo-900 border border-indigo-700 rounded-lg p-4 flex flex-col items-center hover:bg-indigo-800">
        <span className="text-cyan-400 mb-3">📝</span>
        <span className="text-sm text-white">Create Content</span>
      </div>
      <div className="bg-purple-900 border border-purple-700 rounded-lg p-4 flex flex-col items-center hover:bg-purple-800">
        <span className="text-cyan-400 mb-3">📱</span>
        <span className="text-sm text-white">Post to Social</span>
      </div>
    </div>
  </div>
);

// Placeholder TrafficSourcesWidget component
const TrafficSourcesWidget: React.FC<WidgetProps> = ({ isEditMode, onRemove }) => (
  <div className="relative bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all border border-gray-700">
    {isEditMode && onRemove && (
      <button 
        onClick={onRemove}
        className="absolute -top-2 -right-2 bg-gray-700 text-red-400 rounded-full h-6 w-6 flex items-center justify-center shadow-sm hover:bg-gray-600"
      >
        ×
      </button>
    )}
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg"></div>
    <h3 className="text-lg font-medium text-white mb-4 pt-3">Traffic Sources</h3>
    <div className="flex justify-center items-center h-64">
      <div className="text-white">Pie chart placeholder</div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false);
  const [availableWidgets, setAvailableWidgets] = useState<Widget[]>([]);
  const [activeWidgets, setActiveWidgets] = useState<string[]>([]);
  const [metricsData, setMetricsData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch all data in parallel
        const [widgetsData, activeWidgetsData, metrics] = await Promise.all([
          dashboardApi.getAvailableWidgets(),
          dashboardApi.getActiveWidgets(),
          dashboardApi.getMetricsData()
        ]);
        
        setAvailableWidgets(widgetsData);
        setActiveWidgets(activeWidgetsData);
        setMetricsData(metrics);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  const toggleEditMode = () => {
    if (isEditMode) {
      // If we're exiting edit mode, save the current layout
      dashboardApi.updateActiveWidgets(activeWidgets);
    }
    setIsEditMode(!isEditMode);
    setShowAddWidgetModal(false);
  };
  
  const removeWidget = (widgetId: string) => {
    setActiveWidgets(activeWidgets.filter(id => id !== widgetId));
  };
  
  const addWidget = (widgetId: string) => {
    if (!activeWidgets.includes(widgetId)) {
      setActiveWidgets([...activeWidgets, widgetId]);
    }
    setShowAddWidgetModal(false);
  };
  
  if (loading) {
    return (
      <div className="h-full w-full flex items-center justify-center p-12">
        <div className="text-white text-xl">Loading dashboard...</div>
      </div>
    );
  }
  
  return (
    <div className="mb-8">
      {/* Dashboard Header with Edit Controls */}
      <DashboardHeader 
        isEditMode={isEditMode} 
        onToggleEditMode={toggleEditMode} 
      />
      
      {/* First Row: Metrics Cards */}
      {(activeWidgets.includes('visitors') || activeWidgets.includes('conversion') || activeWidgets.includes('time-on-site')) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Visitors Card */}
          {activeWidgets.includes('visitors') && metricsData?.visitors && (
            <div className="col-span-1">
              <MetricCard 
                title={metricsData.visitors.title}
                value={metricsData.visitors.value}
                icon={metricsData.visitors.icon}
                color={metricsData.visitors.color}
                progress={metricsData.visitors.progress}
                target={metricsData.visitors.target}
                isEditMode={isEditMode}
                onRemove={() => removeWidget('visitors')}
              />
            </div>
          )}
          
          {/* Conversion Card */}
          {activeWidgets.includes('conversion') && metricsData?.conversion && (
            <div className="col-span-1">
              <MetricCard 
                title={metricsData.conversion.title}
                value={metricsData.conversion.value}
                icon={metricsData.conversion.icon}
                color={metricsData.conversion.color}
                progress={metricsData.conversion.progress}
                target={metricsData.conversion.target}
                isEditMode={isEditMode}
                onRemove={() => removeWidget('conversion')}
              />
            </div>
          )}
          
          {/* Time on Site Card */}
          {activeWidgets.includes('time-on-site') && metricsData?.timeOnSite && (
            <div className="col-span-1">
              <MetricCard 
                title={metricsData.timeOnSite.title}
                value={metricsData.timeOnSite.value}
                icon={metricsData.timeOnSite.icon}
                color={metricsData.timeOnSite.color}
                progress={metricsData.timeOnSite.progress}
                target={metricsData.timeOnSite.target}
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
};

export default Dashboard