import React from 'react';
import { AddWidgetButtonProps } from '../../types/dashboard.types';

const AddWidgetButton: React.FC<AddWidgetButtonProps> = ({ onClick }) => {
  return (
    <div 
      className="bg-gray-800 border-2 border-dashed border-gray-700 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:shadow-lg transition-all hover:border-gray-600"
      onClick={onClick}
    >
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white h-12 w-12 rounded-full flex items-center justify-center mb-3 text-xl font-bold shadow-md">
        +
      </div>
      <p className="text-white font-medium">Add Widget</p>
      <p className="text-gray-400 text-sm mt-1">Choose from available widgets</p>
    </div>
  );
};

export default AddWidgetButton;
