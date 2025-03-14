import React from 'react';
import { Package } from 'lucide-react';
import { Provider, AvailableProvider } from '../types/provider.types';

// Connected providers
export const connectedProviders: Provider[] = [
  {
    id: 'printify',
    name: 'Printify',
    icon: <Package />,
    connected: true,
    lastSyncTime: '2h ago',
    colorFrom: 'from-blue-400',
    colorTo: 'to-cyan-500',
    stats: {
      products: 174,
      inProduction: 12,
      fulfilled: 326,
      status: 'operational'
    }
  }
];

// Available providers to connect
export const availableProviders: AvailableProvider[] = [
  {
    id: 'printful',
    name: 'Printful',
    icon: <Package />,
    colorFrom: 'from-purple-400',
    colorTo: 'to-purple-600'
  },
  {
    id: 'gooten',
    name: 'Gooten',
    icon: <Package />,
    colorFrom: 'from-amber-400',
    colorTo: 'to-amber-600'
  },
  {
    id: 'spod',
    name: 'SPOD',
    icon: <Package />,
    colorFrom: 'from-green-400',
    colorTo: 'to-green-600'
  },
  {
    id: 'other',
    name: 'Other',
    icon: <Package />,
    colorFrom: 'from-indigo-400',
    colorTo: 'to-indigo-600'
  }
];
