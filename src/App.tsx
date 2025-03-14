import React, { useState } from 'react';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './pages/Dashboard';
import Marketplaces from './pages/Marketplaces';
import Providers from './pages/Providers';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };
  
  return (
    <MainLayout defaultTab={activeTab} onTabChange={handleTabChange}>
      {activeTab === 'dashboard' && <Dashboard />}
      {activeTab === 'marketplaces' && <Marketplaces />}
      {activeTab === 'providers' && <Providers />}
      {/* Add other tabs as needed */}
    </MainLayout>
  );
};

export default App;
