import React from 'react';

interface SkeletonProps {
  variant?: 'card' | 'text' | 'circle' | 'rect';
  width?: string;
  height?: string;
  className?: string;
  count?: number;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'text',
  width = 'full',
  height = 'auto',
  className = '',
  count = 1
}) => {
  const baseClass = "animate-pulse bg-gray-700 rounded";
  
  let variantClass = '';
  switch (variant) {
    case 'card':
      variantClass = "h-40";
      break;
    case 'text':
      variantClass = "h-4";
      break;
    case 'circle':
      variantClass = "rounded-full";
      break;
    case 'rect':
      variantClass = "";
      break;
  }
  
  const widthClass = width === 'full' ? 'w-full' : `w-${width}`;
  const heightClass = height === 'auto' ? '' : `h-${height}`;
  
  const skeletons = Array.from({ length: count }, (_, index) => (
    <div 
      key={index}
      className={`${baseClass} ${variantClass} ${widthClass} ${heightClass} ${className} ${index > 0 ? 'mt-2' : ''}`}
    />
  ));
  
  return <>{skeletons}</>;
};