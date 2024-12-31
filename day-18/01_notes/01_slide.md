### Todays class slide link:

```link
https://petal-estimate-4e9.notion.site/Ganache-Trufle-Hardhat-and-Foundry-1537dfd1073580029822c7874ed1f37c
```



### to run the solidity code local machine then first install Foundry

- open the ubuntu first then type this command:

```bash
curl -L https://foundry.paradigm.xyz | bash
```

- after that this command will find the folder for to install foundry

```bash
source /home/nihar/.bashrc
```

- then type foundryup to install the foundry

```bash
foundryup
```

### after istalling the foundry then to initialize a froundry porject in the VScoe then type this command

-  first in the vscode terminal open the ubuntu then type: 

```bash
git config --global user.email "gmail"     
git config --global user.name "username"
```

- then type this command to initialize the empty foundry project:

```bash
forge init --template https://github.com/foundry-rs/forge-template <name of the project>
```

- after completing writing the code if you want to test then go to the foundry project folder then type this:

```bash
forge test
```

- then on the same foundry folder i first intiate the npm init then installed the openzplin library

```bash
npm init -y
npm install @openzeppelin/contracts
```


- you can type this command to verbose the code or know about the error occured, and logs also:

```bash
forge test -v
forge test -vv
forge test -vvv
```

