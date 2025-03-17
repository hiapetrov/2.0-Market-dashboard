import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Marketplaces from './pages/Marketplaces';
import Providers from './pages/Providers';
import { AppProviders } from './app/providers';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  return (
    <AppProviders>
      {/* The outer div is full-width with background color */}
      <div className="min-h-screen bg-gray-900 w-full">
        {/* The inner div constrains the content width */}
        <div className="max-w-[1400px] mx-auto">
          <MainLayout defaultTab={activeTab} onTabChange={handleTabChange}>
            {activeTab === 'dashboard' && <Dashboard />}
            {activeTab === 'marketplaces' && <Marketplaces />}
            {activeTab === 'providers' && <Providers />}
          </MainLayout>
        </div>
      </div>
    </AppProviders>
  );
};

export default App;
