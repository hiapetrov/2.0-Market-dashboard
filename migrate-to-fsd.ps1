# MarketPro Dashboard - Complete FSD Migration Script

# Create main FSD directory structure
Write-Host "Creating FSD directory structure..." -ForegroundColor Green
New-Item -Path "src\app", "src\entities", "src\features", "src\pages", "src\shared", "src\widgets" -ItemType Directory -Force

# Create shared layer subdirectories
New-Item -Path "src\shared\ui", "src\shared\lib", "src\shared\api", "src\shared\config" -ItemType Directory -Force
New-Item -Path "src\shared\ui\card" -ItemType Directory -Force
New-Item -Path "src\shared\lib\icons", "src\shared\lib\environment" -ItemType Directory -Force

# Create entities layer subdirectories
New-Item -Path "src\entities\marketplace\model", "src\entities\dashboard\model", "src\entities\provider\model" -ItemType Directory -Force

# Create features layer subdirectories
New-Item -Path "src\features\widget-management\model", "src\features\widget-management\ui" -ItemType Directory -Force

# Create widgets layer subdirectories
New-Item -Path "src\widgets\metric-card\model", "src\widgets\metric-card\ui" -ItemType Directory -Force

# Create shared/ui files
Write-Host "Creating shared UI files..." -ForegroundColor Yellow

# UI Card component
$cardContent = @'
import React, { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
  hasShadow?: boolean;
  hasBorder?: boolean;
  gradient?: {
    from: string;
    to: string;
  };
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hasShadow = true,
  hasBorder = false,
  gradient,
  onClick
}) => {
  const shadowClass = hasShadow ? 'shadow-sm hover:shadow-md' : '';
  const borderClass = hasBorder ? 'border border-gray-200' : '';
  const cursorClass = onClick ? 'cursor-pointer' : '';
  
  return (
    <div 
      className={`bg-white rounded-lg p-6 ${shadowClass} ${borderClass} ${cursorClass} transition-shadow ${className}`}
      onClick={onClick}
    >
      {gradient && (
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient.from} ${gradient.to} rounded-t-lg`}></div>
      )}
      {children}
    </div>
  );
};
'@
New-Item -Path "src\shared\ui\card\Card.tsx" -ItemType File -Force -Value $cardContent

$cardIndexContent = @'
export * from './Card';
'@
New-Item -Path "src\shared\ui\card\index.ts" -ItemType File -Force -Value $cardIndexContent

$sharedUiIndexContent = @'
export * from './card';
'@
New-Item -Path "src\shared\ui\index.ts" -ItemType File -Force -Value $sharedUiIndexContent

# Icon helper
$iconHelperContent = @'
import React from 'react';
import { 
  Activity, Eye, FileText, Package, 
  ShoppingBag, BarChart2, Check, 
  Clock, Instagram, Mail, HelpCircle 
} from 'lucide-react';

export const renderIcon = (iconName: string, className: string = "h-5 w-5") => {
  const props = { className };
  
  switch(iconName) {
    case 'Activity':
      return <Activity {...props} />;
    case 'Eye':
      return <Eye {...props} />;
    case 'FileText':
      return <FileText {...props} />;
    case 'Package':
      return <Package {...props} />;
    case 'ShoppingBag':
      return <ShoppingBag {...props} />;
    case 'BarChart2':
      return <BarChart2 {...props} />;
    case 'Check':
      return <Check {...props} />;
    case 'Clock':
      return <Clock {...props} />;
    case 'Instagram':
      return <Instagram {...props} />;
    case 'Mail':
      return <Mail {...props} />;
    case 'HelpCircle':
      return <HelpCircle {...props} />;
    default:
      return <Activity {...props} />;
  }
};
'@
New-Item -Path "src\shared\lib\icons\renderIcon.tsx" -ItemType File -Force -Value $iconHelperContent

# Environment utility
$envUtilContent = @'
export const getEnv = (name: string, defaultValue: string = ''): string => {
  const viteVar = import.meta.env[`VITE_${name}`];
  if (viteVar !== undefined) {
    return viteVar as string;
  }
  
  // Fall back to CRA format if needed (legacy support)
  // @ts-ignore - process.env may not be defined in Vite
  const craVar = process?.env?.[`REACT_APP_${name}`];
  if (craVar !== undefined) {
    console.warn(`Using legacy REACT_APP_ environment variable. Please migrate to VITE_ prefix.`);
    return craVar;
  }
  
  return defaultValue;
};

export const isDev = (): boolean => {
  return import.meta.env.DEV === true;
};

export const isProd = (): boolean => {
  return import.meta.env.PROD === true;
};
'@
New-Item -Path "src\shared\lib\environment\env.ts" -ItemType File -Force -Value $envUtilContent

$sharedLibIndexContent = @'
export * from './icons/renderIcon';
export * from './environment/env';
'@
New-Item -Path "src\shared\lib\index.ts" -ItemType File -Force -Value $sharedLibIndexContent

# Entity types
$marketplaceTypesContent = @'
export interface MarketplaceStats {
  products: number;
  orders: number;
  revenue: number;
  conversion: number;
}

export interface Marketplace {
  id: string;
  name: string;
  iconName: string;
  connected: boolean;
  syncStatus: string;
  colorFrom: string;
  colorTo: string;
  stats: MarketplaceStats;
}

export interface AvailableMarketplace {
  id: string;
  name: string;
  iconName: string;
  colorFrom: string;
  colorTo: string;
}
'@
New-Item -Path "src\entities\marketplace\model\types.ts" -ItemType File -Force -Value $marketplaceTypesContent

$marketplaceIndexContent = @'
export * from './model/types';
'@
New-Item -Path "src\entities\marketplace\index.ts" -ItemType File -Force -Value $marketplaceIndexContent

$dashboardTypesContent = @'
import { ReactNode } from 'react';

export interface TrafficDataPoint {
  name: string;
  organic: number;
  direct: number;
  social: number;
  referral: number;
}

export interface ChannelDataPoint {
  name: string;
  value: number;
}

export interface ActivityItem {
  id: number;
  event: string;
  time: string;
  iconName?: string;
}

export interface Widget {
  id: string;
  name: string;
  iconName: string;
  color?: string;
}

export interface WidgetProps {
  isEditMode?: boolean;
  onRemove?: () => void;
}

export interface MetricData {
  title: string;
  value: string;
  iconName: string;
  color?: string;
  progress: number;
  target: string;
}

export interface QuickAction {
  id: string;
  label: string;
  iconName: string;
  bgColor: string;
  borderColor: string;
  hoverColor: string;
}
'@
New-Item -Path "src\entities\dashboard\model\types.ts" -ItemType File -Force -Value $dashboardTypesContent

$dashboardIndexContent = @'
export * from './model/types';
'@
New-Item -Path "src\entities\dashboard\index.ts" -ItemType File -Force -Value $dashboardIndexContent

$providerTypesContent = @'
export interface ProviderStats {
  products: number;
  inProduction: number;
  fulfilled: number;
  status: 'operational' | 'issues' | 'down';
}

export interface Provider {
  id: string;
  name: string;
  iconName: string;
  connected: boolean;
  lastSyncTime: string;
  colorFrom: string;
  colorTo: string;
  stats: ProviderStats;
}

export interface AvailableProvider {
  id: string;
  name: string;
  iconName: string;
  colorFrom: string;
  colorTo: string;
}
'@
New-Item -Path "src\entities\provider\model\types.ts" -ItemType File -Force -Value $providerTypesContent

$providerIndexContent = @'
export * from './model/types';
'@
New-Item -Path "src\entities\provider\index.ts" -ItemType File -Force -Value $providerIndexContent

# Features
$widgetManagementTypesContent = @'
import { Widget } from '../../../entities/dashboard';

export interface WidgetManagementState {
  availableWidgets: Widget[];
  activeWidgets: string[];
  isEditMode: boolean;
}

export interface AddWidgetButtonProps {
  onClick: () => void;
}

export interface AddWidgetModalProps {
  availableWidgets: Widget[];
  activeWidgets: string[];
  onAdd: (widgetId: string) => void;
  onClose: () => void;
}
'@
New-Item -Path "src\features\widget-management\model\types.ts" -ItemType File -Force -Value $widgetManagementTypesContent

$addWidgetButtonContent = @'
import React from 'react';
import { AddWidgetButtonProps } from '../model/types';

export const AddWidgetButton: React.FC<AddWidgetButtonProps> = ({ onClick }) => {
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
'@
New-Item -Path "src\features\widget-management\ui\AddWidgetButton.tsx" -ItemType File -Force -Value $addWidgetButtonContent

$widgetManagementIndexContent = @'
export * from './ui/AddWidgetButton';
export * from './model/types';
'@
New-Item -Path "src\features\widget-management\index.ts" -ItemType File -Force -Value $widgetManagementIndexContent

# Widgets
$metricCardTypesContent = @'
import { ReactNode } from 'react';
import { WidgetProps } from '../../../entities/dashboard';

export interface MetricCardProps extends WidgetProps {
  title: string;
  value: string;
  icon: ReactNode;
  color?: string;
  progress: number;
  target: string;
}
'@
New-Item -Path "src\widgets\metric-card\model\types.ts" -ItemType File -Force -Value $metricCardTypesContent

$metricCardContent = @'
import React, { ReactNode } from 'react';
import { MetricCardProps } from '../model/types';
import { renderIcon } from '../../../shared/lib/icons/renderIcon';

export const MetricCard: React.FC<MetricCardProps> = ({
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
'@
New-Item -Path "src\widgets\metric-card\ui\MetricCard.tsx" -ItemType File -Force -Value $metricCardContent

$metricCardIndexContent = @'
export * from './ui/MetricCard';
export * from './model/types';
'@
New-Item -Path "src\widgets\metric-card\index.ts" -ItemType File -Force -Value $metricCardIndexContent

Write-Host "FSD migration structure created successfully!" -ForegroundColor Green
Write-Host "All files have been created with their implementation content." -ForegroundColor Cyan