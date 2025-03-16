export interface ProviderStats {
  products: number;
  inProduction: number;
  fulfilled: number;
  status: 'operational' | 'issues' | 'down';
}

export interface Provider {
  id: string;
  name: string;
  iconName: string;
  connected: boolean;
  lastSyncTime: string;
  colorFrom: string;
  colorTo: string;
  stats: ProviderStats;
}

export interface AvailableProvider {
  id: string;
  name: string;
  iconName: string;
  colorFrom: string;
  colorTo: string;
}