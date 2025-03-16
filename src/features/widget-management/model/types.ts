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