import React from 'react';
import { ChevronRight, Eye, Activity, FileText, Instagram, ShoppingBag, Package, BarChart2 } from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  iconName: string;
  hasChildren?: boolean;
}

interface SidebarProps {
  navigationItems: NavigationItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

// Helper function to render icon based on iconName
const renderIcon = (iconName: string) => {
  switch(iconName) {
    case 'Eye':
      return <Eye className="h-5 w-5 mr-3" />;
    case 'Activity':
      return <Activity className="h-5 w-5 mr-3" />;
    case 'FileText':
      return <FileText className="h-5 w-5 mr-3" />;
    case 'Instagram':
      return <Instagram className="h-5 w-5 mr-3" />;
    case 'ShoppingBag':
      return <ShoppingBag className="h-5 w-5 mr-3" />;
    case 'Package':
      return <Package className="h-5 w-5 mr-3" />;
    case 'BarChart2':
      return <BarChart2 className="h-5 w-5 mr-3" />;
    default:
      return <Activity className="h-5 w-5 mr-3" />;
  }
};

const Sidebar: React.FC<SidebarProps> = ({
  navigationItems,
  activeTab,
  onTabChange
}) => {
  return (
    <aside className="w-56 bg-gray-900 text-gray-300 flex flex-col py-6 border-r border-gray-800">
      <div className="flex flex-col space-y-1">
        {navigationItems.map((item) => (
          <div 
            key={item.id}
            className={`flex items-center px-4 py-3 ${
              activeTab === item.id 
                ? 'bg-gray-800 text-cyan-400 border-l-2 border-cyan-400' 
                : 'hover:bg-gray-800 hover:text-gray-100'} rounded-r-none cursor-pointer transition-colors ${item.hasChildren ? 'justify-between' : ''}`}
            onClick={() => onTabChange(item.id)}
          >
            <div className="flex items-center">
              {renderIcon(item.iconName)}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            {item.hasChildren && <ChevronRight className="h-4 w-4" />}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;