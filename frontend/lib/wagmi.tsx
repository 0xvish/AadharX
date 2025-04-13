"use client"

import {getDefaultConfig} from '@rainbow-me/rainbowkit';
import { sepolia } from 'viem/chains';

export const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [sepolia],
    ssr: true,
});