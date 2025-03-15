// Connected providers
export const connectedProviders = [
  {
    id: 'printify',
    name: 'Printify',
    iconName: 'Package',
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
export const availableProviders = [
  {
    id: 'printful',
    name: 'Printful',
    iconName: 'Package',
    colorFrom: 'from-purple-400',
    colorTo: 'to-purple-600'
  },
  {
    id: 'gooten',
    name: 'Gooten',
    iconName: 'Package',
    colorFrom: 'from-amber-400',
    colorTo: 'to-amber-600'
  },
  {
    id: 'spod',
    name: 'SPOD',
    iconName: 'Package',
    colorFrom: 'from-green-400',
    colorTo: 'to-green-600'
  },
  {
    id: 'other',
    name: 'Other',
    iconName: 'Package',
    colorFrom: 'from-indigo-400',
    colorTo: 'to-indigo-600'
  }
];
