### **What is Impermanent Loss (IL)?**
Impermanent Loss (IL) occurs when you provide liquidity to an Automated Market Maker (AMM) and the price of the assets changes compared to when you deposited them. This loss is called "impermanent" because it only becomes permanent if you withdraw liquidity while the prices are still changed. If prices revert to their original ratio, the impermanent loss disappears.

---

### **Why Does IL Happen?**
- Liquidity providers deposit assets in a **50:50 ratio by value** (e.g., $1000 USDC and $1000 SOL in a USDC-SOL pool).
- When prices shift due to trades, the AMM rebalances the pool to maintain the **constant product rule**, which causes the amount of tokens held in the pool to change.

---

### **Impermanent Loss Calculation:**
For a pool where prices change, you can calculate IL as follows:

1. **Initial State:**
   Let:
   - **\( P_0 \): Initial price ratio of tokens (e.g., 1 SOL = 5 USDC).**
   - **\( k = x \cdot y \): Constant product of the pool, where \( x \) is SOL and \( y \) is USDC.**

2. **Price Changes:**
   If SOL price changes from \( P_0 \) to \( P_1 \), the AMM rebalances such that:
   \[
   x_{\text{new}} \cdot y_{\text{new}} = k.
   \]

3. **Final Portfolio Value:**
   Compare the value of assets in the pool with what you’d have if you had just **held the assets instead**:
   - Value if you HODL: \( (\text{initial SOL amount}) \cdot P_1 + (\text{initial USDC amount}) \).
   - Value in pool: The value of \( x_{\text{new}} \) SOL + \( y_{\text{new}} \) USDC.

4. **IL Formula:**
   \[
   \text{IL Percentage} = \frac{\text{Value if HODL - Value in Pool}}{\text{Value if HODL}} \times 100.
   \]

---

### **Example Calculation of Impermanent Loss**
**Scenario:**
- Initial deposit into a USDC-SOL pool:
  - \( 10 SOL \) @ \( 1 SOL = 10 USDC \): Total 100 USDC.
  - \( 100 USDC \).
  - **Total value deposited**: \( 200 USDC \).

- New SOL price increases from \( 10 \) USDC to \( 20 \) USDC.

---

#### **Step 1: Initial State**
The pool initially has:
\[
\text{10 SOL} \cdot \text{100 USDC} = \text{1,000}.
\]

#### **Step 2: Rebalance Pool After Price Change**
New price: \( 1 SOL = 20 USDC \).

The AMM rebalances, ensuring \( x \cdot y = k \) and that:
\[
\text{Price of SOL in pool} = \frac{\text{USDC}}{\text{SOL}} = 20.
\]

Solve for new token balances:
\[
y_{\text{new}} = \sqrt{k \cdot P_1}, \quad x_{\text{new}} = \sqrt{\frac{k}{P_1}}.
\]

\[
x_{\text{new}} = \sqrt{\frac{1,000}{20}} = 7.07 \, \text{SOL}, \quad y_{\text{new}} = 7.07 \cdot 20 = 141.42 \, \text{USDC}.
\]

---

#### **Step 3: Final Value of Liquidity in Pool**
- **Pool Value in USD**:
  - Value of SOL: \( 7.07 \cdot 20 = 141.42 \) USDC.
  - Total pool value: \( 141.42 + 141.42 = 282.84 \) USDC.

#### **Step 4: Value if HODL**
If you had held the assets instead:
- \( 10 SOL \cdot 20 = 200 \) USDC.
- Original 100 USDC.
- Total value: \( 200 + 100 = 300 \) USDC.

---

#### **Step 5: Calculate Impermanent Loss**
\[
\text{IL Percentage} = \frac{300 - 282.84}{300} \times 100 = 5.72\%.
\]

---

### **Key Takeaways**
- The impermanent loss depends on the percentage change in the token price.
- Even if IL occurs, liquidity providers also earn trading fees and rewards, which might offset or exceed IL.
- IL only becomes permanent if liquidity is withdrawn when the prices differ from their original ratio.


---
---
---

Sure! Let’s break **impermanent loss** down into a real-life example while maintaining the original features of a liquidity pool.

---

### **The Scenario**
You're a farmer who owns two goods:
1. **Apples** (worth $1 each).  
2. **Bananas** (worth $1 each).

You decide to contribute to a **Fruit Market (Liquidity Pool)** where:
- You provide **$100 worth of Apples (100 Apples)**.
- You provide **$100 worth of Bananas (100 Bananas)**.

The market (liquidity pool) now holds $200 worth of goods:
- **100 Apples + 100 Bananas** ($1 each initially).  
- The pool ensures the **product of the quantities stays constant** (this is a constant product formula for liquidity pools: `X * Y = K`).

Here, `X` = 100 Apples, `Y` = 100 Bananas, so:  
`K = 100 * 100 = 10,000`.

---

### **1. Prices Change**
Suddenly, Bananas become popular, and their price rises to **$2 each**, while Apples stay at **$1**.  

Now people will **arbitrage** the pool:
- Traders swap Apples for Bananas to balance prices inside the pool with external market rates.  
- Remember: The constant product formula (`X * Y = K`) applies, so the pool automatically adjusts.

Here’s what happens step-by-step:
1. A trader wants to profit:
   - Bananas in the pool are undervalued (still $1 each).
   - Bananas in the market cost $2 each.  
   - The trader swaps **Apples** for Bananas until prices match the external market rate.

2. As traders swap Apples for Bananas:
   - **Bananas decrease in the pool** because traders take them out.
   - **Apples increase in the pool** because traders add them.

---

### **After Adjustment**:
The price ratio becomes 2:1 in the pool:
- **Bananas (Y)** = 70.
- **Apples (X)** = 142.85.

Let’s verify the math:
- The product (`X * Y`) must remain constant:  
  `142.85 * 70 ≈ 10,000`.

- The price ratio: `Apples/Bananas` = `142.85/70 = 2:1`.

Now in the pool:
- **1 Banana = $2**.
- **1 Apple = $1**.

---

### **Impermanent Loss**
You, as the liquidity provider, still own the same percentage of the pool. If the total pool value is now $213:
- Your share is still 50% → **$106.50**.

Let’s calculate how much you'd have if you hadn’t provided liquidity:
1. Originally, you had 100 Apples ($1 each) + 100 Bananas ($1 each) → **$200**.
2. If you had held onto these, after the price change:
   - 100 Apples ($1 each) = $100.
   - 100 Bananas ($2 each) = $200.  
   **Total = $300.**

Now, as a liquidity provider, your **actual value ($213)** is less than what you could’ve had by simply holding.  
This loss of $87 is the **impermanent loss**.

---

### **Key Takeaway**
Impermanent loss happens when the **price of one token in a liquidity pool changes significantly** compared to when you deposited it. This is because liquidity pools automatically rebalance token quantities to maintain the constant product formula.

---

### **What Makes the Loss Impermanent?**
The loss is "impermanent" because if the price eventually returns to its original level (e.g., Bananas go back to $1), the loss disappears, and your position regains full value. However, if prices never return, the loss becomes **permanent**.

---
---
---


Would you like an example involving another token pair (e.g., ETH/USDC) or more math?

Alright! Let’s dive into an example using the **SOL/USDC** pair with detailed math to explain impermanent loss.

---

### **Setup: Initial Conditions**
You contribute liquidity to a **SOL/USDC pool**. Here’s the setup:

1. **Initial Prices**:
   - 1 SOL = $25 (in USDC).

2. **Liquidity Contribution**:
   - You provide equal value of both tokens to the pool.
   - You deposit:
     - **10 SOL** (worth $250).
     - **250 USDC**.  

   Total value of your contribution = $500.

3. **The Pool**:
   - Let’s assume, after your deposit, the pool holds:
     - **100 SOL**
     - **2500 USDC**
   - The constant product formula applies:  
     \[
     X \times Y = K
     \]
     where:
     - \( X \) = 100 (SOL in the pool),
     - \( Y \) = 2500 (USDC in the pool),
     - \( K = 100 \times 2500 = 250,000 \).

Your share of the pool is **10%**.

---

### **Price Change: SOL Appreciates**
The price of SOL increases from $25 to **$50**.  
This means traders will adjust the pool (arbitrage), buying SOL and adding USDC to maintain balance.

---

### **Adjusting the Pool**
To balance the pool, the product \( X \times Y \) must remain constant, but \( X \) (SOL) and \( Y \) (USDC) adjust to reflect the new price.

1. New price in the pool is determined by:
   \[
   \text{Price of SOL} = \frac{Y}{X}
   \]
   We know the new price of SOL is $50, so:
   \[
   \frac{Y}{X} = 50
   \]

2. From the constant product formula \( X \times Y = K \):
   \[
   X \times Y = 250,000
   \]
   and \( Y = 50X \).

3. Substituting \( Y = 50X \) into \( X \times Y = 250,000 \):
   \[
   X \times (50X) = 250,000
   \]
   \[
   50X^2 = 250,000
   \]
   \[
   X^2 = 5000
   \]
   \[
   X = \sqrt{5000} \approx 70.71 \, \text{SOL (remaining in the pool)}.
   \]

4. Calculate \( Y \) (new USDC in the pool):
   \[
   Y = 50X
   \]
   \[
   Y = 50 \times 70.71 \approx 3535.5 \, \text{USDC}.
   \]

Now the pool has:
- **70.71 SOL**
- **3535.5 USDC**

---

### **Your Share of the Pool**
You own **10%** of the pool, so your share now consists of:
- **7.071 SOL** (10% of 70.71 SOL).
- **353.55 USDC** (10% of 3535.5 USDC).

---

### **Calculate Total Value After Price Change**
Let’s calculate the value of your share using the new SOL price ($50):

1. Value of 7.071 SOL:
   \[
   7.071 \times 50 \, \text{USDC} = 353.55 \, \text{USDC}.
   \]

2. Value of 353.55 USDC = **353.55 USDC**.

Total value = \( 353.55 + 353.55 = 707.1 \, \text{USDC} \).

---

### **Compare to HODLing**
If you hadn’t provided liquidity and simply held your tokens:
1. Initial assets: 10 SOL and 250 USDC.
2. After the price change:
   - 10 SOL = \( 10 \times 50 \, \text{USDC} = 500 \, \text{USDC} \).
   - 250 USDC = 250 USDC.

Total value = \( 500 + 250 = 750 \, \text{USDC} \).

---

### **Impermanent Loss**
Impermanent loss is the difference between the value of your assets in the pool and the value if you had simply held them:

\[
\text{Impermanent Loss} = \text{HODL Value} - \text{Pool Value}
\]
\[
\text{Impermanent Loss} = 750 \, \text{USDC} - 707.1 \, \text{USDC} = 42.9 \, \text{USDC}.
\]

---

### **Percentage Loss**
To express this as a percentage of the HODL value:
\[
\text{Percentage Loss} = \frac{\text{Impermanent Loss}}{\text{HODL Value}} \times 100
\]
\[
\text{Percentage Loss} = \frac{42.9}{750} \times 100 \approx 5.72\%.
\]

So, you’ve lost about **5.72%** of potential gains compared to simply holding your assets.

---

### **Key Insights**
1. **Why Loss?**: The loss occurs because the pool rebalances the ratio of SOL/USDC to match market prices, requiring you to hold more of the token that has appreciated less (USDC in this case).
2. **Offsetting the Loss**: Liquidity providers earn **trading fees** on every swap in the pool. These fees can often offset or even outweigh impermanent loss over time.
3. **What If SOL’s Price Returns?**: The loss is impermanent because if SOL returns to $25, your liquidity value will align with the original value, eliminating the loss.