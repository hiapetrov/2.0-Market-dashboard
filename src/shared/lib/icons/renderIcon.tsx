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