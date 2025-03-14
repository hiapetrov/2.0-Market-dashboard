import { ReactNode } from 'react';

export interface ProviderStats {
  products: number;
  inProduction: number;
  fulfilled: number;
  status: 'operational' | 'issues' | 'down';
}

export interface Provider {
  id: string;
  name: string;
  icon: ReactNode;
  connected: boolean;
  lastSyncTime: string;
  colorFrom: string;
  colorTo: string;
  stats: ProviderStats;
}

export interface AvailableProvider {
  id: string;
  name: string;
  icon: ReactNode;
  colorFrom: string;
  colorTo: string;
}

export interface ProviderCardProps {
  provider: Provider;
}

export interface ConnectProviderProps {
  availableProviders: AvailableProvider[];
  onConnect: (providerId: string) => void;
}
