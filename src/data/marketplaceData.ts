// Connected marketplaces
export const connectedMarketplaces = [
  {
    id: 'shopify',
    name: 'Shopify',
    iconName: 'ShoppingBag',
    connected: true,
    syncStatus: 'Sync active',
    colorFrom: 'from-green-400',
    colorTo: 'to-green-600',
    stats: {
      products: 128,
      orders: 243,
      revenue: 12450,
      conversion: 3.2
    }
  },
  {
    id: 'etsy',
    name: 'Etsy',
    iconName: 'ShoppingBag',
    connected: true,
    syncStatus: 'Sync active',
    colorFrom: 'from-orange-400',
    colorTo: 'to-red-500',
    stats: {
      products: 86,
      orders: 142,
      revenue: 8675,
      conversion: 4.1
    }
  }
];

// Available marketplaces to connect
export const availableMarketplaces = [
  {
    id: 'amazon',
    name: 'Amazon',
    iconName: 'ShoppingBag',
    colorFrom: 'from-blue-400',
    colorTo: 'to-blue-600'
  },
  {
    id: 'walmart',
    name: 'Walmart',
    iconName: 'ShoppingBag',
    colorFrom: 'from-purple-400',
    colorTo: 'to-purple-600'
  },
  {
    id: 'ebay',
    name: 'eBay',
    iconName: 'ShoppingBag',
    colorFrom: 'from-red-400',
    colorTo: 'to-red-600'
  },
  {
    id: 'other',
    name: 'Other',
    iconName: 'ShoppingBag',
    colorFrom: 'from-indigo-400',
    colorTo: 'to-indigo-600'
  }
];
