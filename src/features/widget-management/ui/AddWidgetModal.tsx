import React from 'react';
import { AddWidgetModalProps } from '../model/types';
import { renderIcon } from '../../../shared/lib';

export const AddWidgetModal: React.FC<AddWidgetModalProps> = ({ 
  availableWidgets, 
  activeWidgets, 
  onAdd, 
  onClose 
}) => {
  const availableWidgetsToAdd = availableWidgets.filter(widget => !activeWidgets.includes(widget.id));
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 p-6 rounded-lg max-w-lg w-full">
        <h2 className="text-white text-xl mb-4">Select Widget</h2>
        
        {availableWidgetsToAdd.length === 0 ? (
          <p className="text-gray-400 text-center py-4">All available widgets are already added to your dashboard.</p>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {availableWidgetsToAdd.map(widget => (
              <button
                key={widget.id}
                className="bg-gray-700 hover:bg-gray-600 p-3 rounded-lg flex flex-col items-center"
                onClick={() => onAdd(widget.id)}
              >
                <div className="mb-2 text-cyan-400">
                  {renderIcon(widget.iconName)}
                </div>
                <span className="text-sm text-white">{widget.name}</span>
              </button>
            ))}
          </div>
        )}
        
        <div className="mt-4 flex justify-end">
          <button 
            onClick={onClose} 
            className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};