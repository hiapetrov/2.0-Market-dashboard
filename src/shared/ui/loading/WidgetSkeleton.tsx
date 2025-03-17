import React from 'react';
import { Skeleton } from './Skeleton';

interface WidgetSkeletonProps {
  hasTitle?: boolean;
  hasContent?: boolean;
  contentRows?: number;
  className?: string;
}

export const WidgetSkeleton: React.FC<WidgetSkeletonProps> = ({
  hasTitle = true,
  hasContent = true,
  contentRows = 3,
  className = ''
}) => {
  return (
    <div className={`relative bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all border border-gray-700 ${className}`}>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-t-lg"></div>
      
      {hasTitle && (
        <div className="flex justify-between items-center mb-6 pt-3">
          <Skeleton variant="text" width="1/3" className="h-6" />
          <Skeleton variant="text" width="1/4" className="h-4" />
        </div>
      )}
      
      {hasContent && (
        <div className="space-y-4">
          {Array.from({ length: contentRows }, (_, index) => (
            <Skeleton key={index} variant="text" width="full" className={`h-${3 + (index % 2)}`} />
          ))}
        </div>
      )}
    </div>
  );
};