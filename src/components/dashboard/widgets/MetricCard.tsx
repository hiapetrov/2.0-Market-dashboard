import React from 'react';
import { MetricCardProps } from '../../../widgets/metric-card';
import { renderIcon } from '../../../shared/lib';

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  icon,
  color = 'blue-300',
  progress,
  target,
  isEditMode = false,
  onRemove
}) => {
  let bgColor, iconBg;
  
  switch(color) {
    case 'blue-300':
      bgColor = 'bg-gradient-to-r from-indigo-600 to-purple-600';
      iconBg = 'bg-indigo-800';
      break;
    case 'yellow-200':
      bgColor = 'bg-gradient-to-r from-purple-600 to-indigo-600';
      iconBg = 'bg-purple-800';
      break;
    case 'blue-200':
      bgColor = 'bg-gradient-to-r from-indigo-600 to-indigo-700';
      iconBg = 'bg-indigo-800';
      break;
    default:
      bgColor = 'bg-gradient-to-r from-indigo-600 to-purple-600';
      iconBg = 'bg-indigo-800';
  }
  
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all border border-gray-700">
      {isEditMode && onRemove && (
        <button 
          onClick={onRemove}
          className="absolute -top-2 -right-2 bg-gray-700 text-red-400 rounded-full h-6 w-6 flex items-center justify-center shadow-sm hover:bg-gray-600"
        >
          ×
        </button>
      )}
      <div className={`absolute top-0 left-0 w-full h-1 ${bgColor} rounded-t-lg`}></div>
      <div className="flex justify-between items-start pt-3">
        <div>
          <p className="text-sm font-medium text-gray-400">{title}</p>
          <p className="text-3xl font-bold text-white mt-2">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${iconBg} text-cyan-400`}>
          {icon}
        </div>
      </div>
      <div className="mt-6">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div className={`${bgColor} h-2 rounded-full`} style={{ width: `${progress}%` }}></div>
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-2">
          <span>Target: {target}</span>
          <span>{progress}% Complete</span>
        </div>
      </div>
    </div>
  );
};

export default MetricCard;