import React, { useState, ReactNode } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { navigationItems } from '../../data/dashboardData';

interface MainLayoutProps {
  children: ReactNode;
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ 
  children, 
  defaultTab = 'dashboard',
  onTabChange
}) => {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      
      <div className="flex flex-1">
        <Sidebar 
          navigationItems={navigationItems}
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
