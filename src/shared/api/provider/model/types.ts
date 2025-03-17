import { Provider, AvailableProvider} from '../../../../entities/provider';

export interface ProviderApiMethods {
  getConnectedProviders: () => Promise<Provider[]>;
  getAvailableProviders: () => Promise<AvailableProvider[]>;
  connectProvider: (providerId: string) => Promise<{ success: boolean; providerId: string }>;
}
