import React from 'react';
import { ChevronRight } from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  hasChildren?: boolean;
}

interface SidebarProps {
  navigationItems: NavigationItem[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

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
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            {item.hasChildren && <ChevronRight className="h-4 w-4" />}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;