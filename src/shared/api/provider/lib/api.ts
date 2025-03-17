import { connectedProviders, availableProviders } from '../../../../data/providerData';
import { ProviderApiMethods } from '../model/types';
import { delay } from '../../utils';
import { isDev } from '../../../lib';

// Add some randomness to delay in dev mode
const getDelay = () => isDev() ? Math.random() * 300 + 300 : 0;

export const providerApi: ProviderApiMethods = {
  getConnectedProviders: async () => {
    await delay(getDelay());
    return connectedProviders;
  },
  
  getAvailableProviders: async () => {
    await delay(getDelay());
    return availableProviders;
  },
  
  connectProvider: async (providerId: string) => {
    await delay(getDelay() + 500); // Longer delay for connection simulation
    // Simulate connecting to a provider
    return { success: true, providerId };
  }
};