In the context of an Automated Market Maker (AMM) liquidity pool, the price of assets like Solana (SOL) and USDC depends on the **constant product formula**:

### Constant Product Formula:
\[
x \cdot y = k
\]

Where:
- \( x \): The quantity of SOL in the pool (e.g., 2000 SOL).
- \( y \): The quantity of USDC in the pool (e.g., 10,000 USDC).
- \( k \): A constant that remains unchanged (e.g., \( k = 2000 \cdot 10000 = 20,000,000 \)).

The relative price of each token is determined by the ratio of their quantities in the pool:
\[
\text{Price of SOL} = \frac{\text{Total USDC}}{\text{Total SOL}} = \frac{10000}{2000} = 5 \, \text{USDC per SOL}.
\]

---

### Price Change Mechanism During Transactions

#### 1. **If a Trade Happens on SOL (SOL is bought/sold):**
- If someone **buys SOL**:
  - They add USDC to the pool and remove SOL.
  - The quantity of SOL in the pool decreases (\( x \)), and the quantity of USDC increases (\( y \)).
  - The price of SOL goes **up** because SOL becomes scarcer, and the ratio of USDC to SOL increases.
  
  Example:
  If a trader adds 500 USDC to the pool:
  \[
  \text{New SOL in pool} = \frac{k}{\text{New USDC in pool}} = \frac{20,000,000}{10,500} \approx 1904.76 \, \text{SOL}.
  \]
  \( \text{SOL removed from the pool} = 2000 - 1904.76 = 95.24 \).

  Updated SOL price:
  \[
  \frac{\text{New USDC in pool}}{\text{New SOL in pool}} = \frac{10,500}{1904.76} \approx 5.51 \, \text{USDC per SOL}.
  \]

- If someone **sells SOL**:
  - They remove USDC and add SOL to the pool.
  - The quantity of SOL in the pool increases (\( x \)), and the quantity of USDC decreases (\( y \)).
  - The price of SOL goes **down** because SOL becomes more abundant, and the ratio of USDC to SOL decreases.

---

#### 2. **If a Trade Happens on USDC (USDC is bought/sold):**
- If someone **buys USDC**:
  - They add SOL to the pool and remove USDC.
  - The quantity of USDC in the pool decreases (\( y \)), and the quantity of SOL increases (\( x \)).
  - The price of USDC goes **up** because it becomes scarcer, and the ratio of SOL to USDC increases.

- If someone **sells USDC**:
  - They add USDC to the pool and remove SOL.
  - The quantity of USDC in the pool increases (\( y \)), and the quantity of SOL decreases (\( x \)).
  - The price of USDC goes **down** because it becomes more abundant, and the ratio of SOL to USDC decreases.

---

### Key Factors
- **Larger Trades** lead to more significant price changes because of the slippage effect.
- **Arbitrage Traders** help stabilize prices when discrepancies exist between the pool's ratio and external market prices.
