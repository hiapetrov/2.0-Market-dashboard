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
  icon?: ReactNode;
}

export interface Widget {
  id: string;
  name: string;
  icon: ReactNode;
  color?: string;
}

export interface WidgetProps {
  isEditMode?: boolean;
  onRemove?: () => void;
}

export interface MetricCardProps extends WidgetProps {
  title: string;
  value: string;
  icon: ReactNode;
  color?: string;
  progress: number;
  target: string;
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

export interface QuickAction {
  id: string;
  label: string;
  icon: ReactNode;
  bgColor: string;
  borderColor: string;
  hoverColor: string;
}
