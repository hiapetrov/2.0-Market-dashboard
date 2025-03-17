import React from 'react';

interface ErrorAlertProps {
  message: string;
  onDismiss?: () => void;
  variant?: 'error' | 'warning' | 'info';
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ 
  message, 
  onDismiss,
  variant = 'error'
}) => {
  // Different styling based on variant
  const bgColor = {
    error: 'bg-red-900',
    warning: 'bg-yellow-900',
    info: 'bg-blue-900'
  }[variant];
  
  const borderColor = {
    error: 'border-red-700',
    warning: 'border-yellow-700',
    info: 'border-blue-700'
  }[variant];
  
  const icon = {
    error: '⚠️',
    warning: '⚡',
    info: 'ℹ️'
  }[variant];

  return (
    <div className={`p-3 rounded-lg ${bgColor} ${borderColor} border text-white flex items-start`}>
      <span className="mr-2 text-lg">{icon}</span>
      <div className="flex-1">
        {message}
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          className="ml-2 text-white opacity-70 hover:opacity-100"
          aria-label="Dismiss"
        >
          ✕
        </button>
      )}
    </div>
  );
};