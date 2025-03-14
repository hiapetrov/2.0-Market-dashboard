import React from 'react';
import { Settings } from 'lucide-react';

interface DashboardHeaderProps {
  isEditMode: boolean;
  onToggleEditMode: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  isEditMode,
  onToggleEditMode
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-white">Dashboard Overview</h2>
      <div className="flex items-center space-x-3">
        <button 
          onClick={onToggleEditMode}
          className={`px-4 py-2 rounded-md text-sm flex items-center ${
            isEditMode 
              ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
          }`}
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
  );
};

export default DashboardHeader;
import React from 'react';
import { Activity, Bell, Search, Settings } from 'lucide-react';

interface HeaderProps {
  username?: string;
  notificationsCount?: number;
}

const Header: React.FC<HeaderProps> = ({ 
  username = 'JP', 
  notificationsCount = 3 
}) => {
  return (
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
            {notificationsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-cyan-400 text-gray-900 text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notificationsCount}
              </span>
            )}
          </div>
          <Settings className="h-6 w-6 text-gray-300 cursor-pointer hover:text-cyan-400 transition-colors" />
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold">
            {username.substring(0, 2)}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
