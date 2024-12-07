### To install solana cli and use it, we have to follow some steps

for windows go to this link:
```link
https://github.com/solana-labs/solana/releases
```
and download the file name called -> `solana-release-x86_64-pc-windows-msvc.tar.bz2`

then unzip the the file, and store it on some place.

then open the terminal and change the directory to the unzipped file direcotory and go the bin directory.

then type this command: 

```bash
.\solana-keygen
```
this line will show us the commands we can use

```bash
.\solana-keygen new
```


this line will create a public-private key wallet on our local machine.

after typing this line we will get to see some output like this 
```bash
Generating a new keypair

For added security, enter a BIP39 passphrase

NOTE! This passphrase improves security of the recovery seed phrase NOT the
keypair file itself, which is stored as insecure plain text

BIP39 Passphrase (empty for none):

Enter same passphrase again:


Wrote new keypair to C:\Users\HP\.config\solana\id.json
==========================================================================
pubkey: 2Jn2D8bZHRUP9GM1jzibBkZwXMvfMGNZ1hQmqux4dxcu
==========================================================================
Save this seed phrase and your BIP39 passphrase to recover your new keypair:
lesson crop lock genre sock loyal village object pave mom lecture innocent
==========================================================================
```

then we have to type some BIP39 Passphrase (which need to be store like a password)

in screen we will only see the public key,
to view the private key we have to type another command

```bash
cat C:\Users\HP\.config\solana\id.json
```

 - After getting the private key we can add it to our phantom, backpack, metamask wallets, just by importing the raw (array type) private key



then in the bin directore if we wrote the 
```bash
.\solana address
```
we will get to see our public key


then after that if we write 
```bash
.\solana config get
```
we will get to see some outputs like 
```bash
Config File: C:\Users\HP\.config\solana\cli\config.yml
RPC URL: https://api.mainnet-beta.solana.com
WebSocket URL: wss://api.mainnet-beta.solana.com/ (computed)
Keypair Path: C:\Users\HP\.config\solana\id.json
Commitment: confirmed
```

in cryptocurrency like this we can have four types of rpc url, mainnet, devnet, testnet, and custom urls

mainnet is is the original network for our wallet.we cant do airdrop over here, so many people will become rich without anything

to change the rpc url from mainnet to devnet type this command
```bash
.\solana config set --url https://api.devnet.solana.com
```

after this you will get to see that 
```bash
Config File: C:\Users\HP\.config\solana\cli\config.yml
RPC URL: https://api.devnet.solana.com
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: C:\Users\HP\.config\solana\id.json
Commitment: confirmed
```

if you do airdrop now onto your local wallet which created using solana cli
```bash
.\solana airdrop 1
```

to see the balance now 
```bash
.\solana balance
```

devnet is the dummy network for our wallet, here we can airdrop amount of solana as many as we want.

testnet is for localhost url, here can also airdrop
to get your own testnet url type this command in admin terminal
```bash
.\solana-test-validator
```
after running this command we will get to see some output like 
```bash
logrotate is not supported on this platform
Ledger location: test-ledger
Log: test-ledger\validator.log
⠒ Initializing...
Waiting for fees to stabilize 1...
Identity: 4TgBb8kf3pJvmj9i42Nct4NhguHgag3MrRiKSdrFdhxT
Genesis Hash: BE3vYJCcD3t1GZ72BLXqgb1RVXsJVEbxuvGvvcJ6Y612
Version: 1.18.26
Shred Version: 31072
Gossip Address: 127.0.0.1:1024
TPU Address: 127.0.0.1:1027
JSON RPC URL: http://127.0.0.1:8899
WebSocket PubSub URL: ws://127.0.0.1:8900
⠈ 00:04:39 | Processed Slot: 296 | Confirmed Slot: 296 | Finalized Slot: 264 | Full Snapshot Slot: 200 | Incremental Snaps
```
continues running.....
and the JSON RPC URL is our test network.

i dont know why i have 50000000 sol on my testnet
```bash
PS C:\Users\HP\Downloads\solana-release-x86_64-pc-windows-msvc\solana-release\bin> .\solana config set --url http://127.0.0.1:8899

Config File: C:\Users\HP\.config\solana\cli\config.yml
RPC URL: http://127.0.0.1:8899
WebSocket URL: ws://127.0.0.1:8900/ (computed)
Keypair Path: C:\Users\HP\.config\solana\id.json
Commitment: confirmed
```
testnet is set

then 
```bash
PS C:\Users\HP\Downloads\solana-release-x86_64-pc-windows-msvc\solana-release\bin> .\solana balance
500000000 SOL
```
this much sol i have


this wallet private key is 
```text
BXKf6EPkyUPttPEdJhNYj7vQTXBjiBjjgAdE4fcJKgY8oGvVn3oe5PwumoCayKtUN9cizicQZkR6qLSPRY7WPHF
```

---

### So the basic difference between these mainnet, devnet and testnet is that 
- mainnet is depend on the real world miner and we cant simpley do airdrop by our choice
- devnet is also depend on some miners but we can do airdrop over here but we cant access that money
- testnet is not depend on miners, it runs on our localhost network 


### **Conclusion**
- **Mainnet**: Use it when deploying real-world applications or interacting with real tokens.  
- **Devnet**: Use it for testing with free SOL in a shared environment.  
- **Testnet**: Use it for isolated testing on your own local validator.