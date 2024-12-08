// reference is from: https://github.com/anza-xyz/wallet-adapter/blob/3761cd8cc867da39da7c0b070bbf8779402cff36/APP.md

import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  WalletConnectButton,
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { Airdrop } from './components/Airdrop';

function App() {


  return (
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/NyDfwQ_XmNAwVIkSemy1jhnjPWyhs6iy"}>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <h1>Solana Devnet Faucet</h1>
          <WalletMultiButton /> <br />
          <Airdrop/> <br />
          <WalletDisconnectButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App