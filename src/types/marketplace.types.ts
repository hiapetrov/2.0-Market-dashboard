import { ReactNode } from 'react';

export interface MarketplaceStats {
  products: number;
  orders: number;
  revenue: number;
  conversion: number;
}

export interface Marketplace {
  id: string;
  name: string;
  icon: ReactNode;
  connected: boolean;
  syncStatus: string;
  colorFrom: string;
  colorTo: string;
  stats: MarketplaceStats;
}

export interface AvailableMarketplace {
  id: string;
  name: string;
  icon: ReactNode;
  colorFrom: string;
  colorTo: string;
}

export interface MarketplaceCardProps {
  marketplace: Marketplace;
}

export interface ConnectMarketplaceProps {
  availableMarketplaces: AvailableMarketplace[];
  onConnect: (marketplaceId: string) => void;
}
