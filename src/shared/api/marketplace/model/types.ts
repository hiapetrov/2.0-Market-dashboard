import { Marketplace, AvailableMarketplace } from '../../../../entities/marketplace';

export interface MarketplaceApiMethods {
  getConnectedMarketplaces: () => Promise<Marketplace[]>;
  getAvailableMarketplaces: () => Promise<AvailableMarketplace[]>;
  connectMarketplace: (marketplaceId: string) => Promise<{ success: boolean; marketplaceId: string }>;
}