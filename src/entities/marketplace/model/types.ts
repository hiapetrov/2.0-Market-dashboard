export interface MarketplaceStats {
  products: number;
  orders: number;
  revenue: number;
  conversion: number;
}

export interface Marketplace {
  id: string;
  name: string;
  iconName: string;
  connected: boolean;
  syncStatus: string;
  colorFrom: string;
  colorTo: string;
  stats: MarketplaceStats;
}

export interface AvailableMarketplace {
  id: string;
  name: string;
  iconName: string;
  colorFrom: string;
  colorTo: string;
}