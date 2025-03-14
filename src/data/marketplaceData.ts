import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Marketplace, AvailableMarketplace } from '../types/marketplace.types';

// Connected marketplaces
export const connectedMarketplaces: Marketplace[] = [
  {
    id: 'shopify',
    name: 'Shopify',
    icon: <ShoppingBag />,
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
    icon: <ShoppingBag />,
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
export const availableMarketplaces: AvailableMarketplace[] = [
  {
    id: 'amazon',
    name: 'Amazon',
    icon: <ShoppingBag />,
    colorFrom: 'from-blue-400',
    colorTo: 'to-blue-600'
  },
  {
    id: 'walmart',
    name: 'Walmart',
    icon: <ShoppingBag />,
    colorFrom: 'from-purple-400',
    colorTo: 'to-purple-600'
  },
  {
    id: 'ebay',
    name: 'eBay',
    icon: <ShoppingBag />,
    colorFrom: 'from-red-400',
    colorTo: 'to-red-600'
  },
  {
    id: 'other',
    name: 'Other',
    icon: <ShoppingBag />,
    colorFrom: 'from-indigo-400',
    colorTo: 'to-indigo-600'
  }
];
