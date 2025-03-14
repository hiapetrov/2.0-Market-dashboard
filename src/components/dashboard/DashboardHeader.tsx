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
