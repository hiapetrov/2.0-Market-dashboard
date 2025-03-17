import React, { useState, useEffect } from 'react';
import { QuickActionsWidgetProps } from '../model/types';
import { QuickAction } from '../../../entities/dashboard';
import { dashboardApi } from '../../../shared/api';
import { renderIcon } from '../../../shared/lib';

export const QuickActionsWidget: React.FC<QuickActionsWidgetProps> = ({ isEditMode, onRemove }) => {
  const [actions, setActions] = useState<QuickAction[]>([]);
  
  useEffect(() => {
    // In a real implementation, we would fetch this from the API
    // For now, we'll use the mock data directly
    import('../../../data/dashboardData').then(module => {
      setActions(module.quickActionsData);
    });
  }, []);
  
  const handleActionClick = (actionId: string) => {
    console.log(`Action clicked: ${actionId}`);
    // Here you would handle the action
  };
  
  return (
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
        {actions.map(action => (
          <button 
            key={action.id}
            className={`${action.bgColor} border ${action.borderColor} rounded-lg p-4 flex flex-col items-center ${action.hoverColor}`}
            onClick={() => handleActionClick(action.id)}
          >
            <div className="text-cyan-400 mb-3">
              {renderIcon(action.iconName)}
            </div>
            <span className="text-sm text-white">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};