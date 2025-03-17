export * from './dashboard';
export * from './ui';

import React, { ReactNode } from 'react';
import { DashboardProvider } from './dashboard';
import { UIProvider } from './ui';

export const AppProviders: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <UIProvider>
      <DashboardProvider>
        {children}
      </DashboardProvider>
    </UIProvider>
);
};