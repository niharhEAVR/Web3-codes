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
import { ShowSolBalance } from './components/SolBalance';

import { SendSolToUser } from './components/SendToken';

function App() {


  return (
    <ConnectionProvider endpoint={"https://api.devnet.solana.com"}> {/* sometimes devnet api doesnot take many request for airdrop, so do in after some interval or find any other way of link to request some airdrop, like (alchemy) */}
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <h1>Solana Devnet Faucet</h1>
          <WalletMultiButton /> <br />
          <Airdrop/> <br />
          <ShowSolBalance/> <br />

          <SendSolToUser/> <br /> <br />

          <WalletDisconnectButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App