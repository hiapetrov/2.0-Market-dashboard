import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Widget } from '../../../entities/dashboard';
import { dashboardApi } from '../../../shared/api';

interface DashboardContextType {
  isEditMode: boolean;
  activeWidgets: string[];
  availableWidgets: Widget[];
  metricsData: any;
  loading: boolean;
  toggleEditMode: () => void;
  addWidget: (widgetId: string) => void;
  removeWidget: (widgetId: string) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export interface DashboardProviderProps {
  children: ReactNode;
}

export const DashboardProvider: React.FC<DashboardProviderProps> = ({ children }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [activeWidgets, setActiveWidgets] = useState<string[]>([]);
  const [availableWidgets, setAvailableWidgets] = useState<Widget[]>([]);
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
  };

  const addWidget = (widgetId: string) => {
    if (!activeWidgets.includes(widgetId)) {
      setActiveWidgets(prev => [...prev, widgetId]);
    }
  };

  const removeWidget = (widgetId: string) => {
    setActiveWidgets(prev => prev.filter(id => id !== widgetId));
  };

  return (
    <DashboardContext.Provider
      value={{
        isEditMode,
        activeWidgets,
        availableWidgets,
        metricsData,
        loading,
        toggleEditMode,
        addWidget,
        removeWidget
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
};
