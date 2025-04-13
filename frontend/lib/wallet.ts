import { createConfig, configureChains, sepolia } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [publicProvider()],
);

export const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});