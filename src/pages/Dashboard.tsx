import React, { useState } from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import { MetricCard } from '../widgets/metric-card';
import { TrafficAnalyticsWidget } from '../widgets/traffic-analytics';
import { ActivityFeedWidget } from '../widgets/activity-feed';
import { QuickActionsWidget } from '../widgets/quick-actions';
import { TrafficSourcesWidget } from '../widgets/traffic-sources';
import { AddWidgetButton, AddWidgetModal } from '../features/widget-management';
import { Eye, Check, Clock } from 'lucide-react';
import { useDashboard } from '../app/providers'
import { WidgetSkeleton } from '../shared/ui/loading';

const Dashboard: React.FC = () => {
  const { 
    isEditMode, 
    activeWidgets, 
    availableWidgets, 
    metricsData, 
    loading,
    toggleEditMode,
    addWidget,
    removeWidget
  } = useDashboard();
  
  const [showAddWidgetModal, setShowAddWidgetModal] = useState(false);
  
  if (loading) {
    return (
      <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <WidgetSkeleton hasTitle={true} hasContent={false} className="w-full h-12" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <WidgetSkeleton />
        <WidgetSkeleton />
        <WidgetSkeleton />
      </div>
      
      <WidgetSkeleton contentRows={6} className="mb-8" />
      <WidgetSkeleton contentRows={4} className="mb-6" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <WidgetSkeleton contentRows={4} />
        <WidgetSkeleton contentRows={4} />
      </div>
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
          onAdd={(widgetId) => {
            addWidget(widgetId);
            setShowAddWidgetModal(false);
          }}
          onClose={() => setShowAddWidgetModal(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;

