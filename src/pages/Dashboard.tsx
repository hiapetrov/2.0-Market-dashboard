import React, { useState, useEffect } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import { MetricCard } from '../widgets/metric-card';
import { TrafficAnalyticsWidget } from '../widgets/traffic-analytics';
import { ActivityFeedWidget } from '../widgets/activity-feed';
import { QuickActionsWidget } from '../widgets/quick-actions';
import { TrafficSourcesWidget } from '../widgets/traffic-sources';
import { AddWidgetButton, AddWidgetModal } from '../features/widget-management';
import { dashboardApi } from '../data/mockApi';
import { Widget } from '../entities/dashboard';
import { Eye, Check, Clock } from 'lucide-react';

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
  
  // Render icon based on metric type
  const renderMetricIcon = (iconName: string) => {
    switch(iconName) {
      case 'Eye':
        return <Eye size={24} />;
      case 'Check':
        return <Check size={24} />;
      case 'Clock':
        return <Clock size={24} />;
      default:
        return <Eye size={24} />;
    }
  };
  
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
                icon={renderMetricIcon(metricsData.visitors.iconName)}
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
                icon={renderMetricIcon(metricsData.conversion.iconName)}
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
                icon={renderMetricIcon(metricsData.timeOnSite.iconName)}
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

export default Dashboard;