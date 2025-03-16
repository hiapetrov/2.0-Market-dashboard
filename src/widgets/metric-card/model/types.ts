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