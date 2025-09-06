### What is Hashing?

Imagine you have a large document, a password, or any kind of data. Now, you want to represent this data in a much smaller, fixed-size "summary" or "fingerprint". This "summary" is called a **hash**.

For example, if you have a long paragraph, a hash function will turn that entire paragraph into a short string of letters and numbers. This string is the **hash** of the paragraph.

Here’s an analogy:

- Think of a hash function like a **magic blender**.
- You put any data into this blender (e.g., text, a file, or an image).
- The blender outputs a fixed-size "smoothie" (the hash) regardless of the size of the input.
- Even if you input the smallest thing, like a single word, or the biggest thing, like a full book, the output smoothie (the hash) is always the same size.

### Key Properties of Hash Functions

Let’s take a look at the key properties of hash functions that make them useful, and break them down in simple terms.

#### 1. **Deterministic** 
This means that **if you put the same input into the hash function, you will always get the same output** (the same hash). No surprises!

- Example: If you hash the word "hello", you'll always get the same hash value every time you run it through the hash function.
  
#### 2. **Fast Computation**
A hash function is designed to compute the hash quickly and efficiently. It doesn’t take long, even for large amounts of data, to produce the hash.

- Example: Whether you hash a short sentence or a huge file, the hash will be calculated very quickly.

#### 3. **Pre-image Resistance**
This is a fancy way of saying that **it's nearly impossible to figure out the original input just by looking at the hash output**. Once the data has been turned into a hash, you can't easily go back to the original data.

- Example: If someone gives you a hash (say, "a59d1f26b2345..."), you can't easily figure out the original text they hashed (like "hello").

#### 4. **Small Changes in Input Produce Large Changes in Output**
Even if you change the smallest thing in the input, the hash will change drastically. This property ensures that you can’t guess the input by looking at the hash.

- Example: 
  - If you hash the word "hello", you get one hash.
  - If you change just one letter to "hella", the hash will be completely different, even though the word is nearly identical.

This property is useful because it makes it clear if the data has been altered even in a very small way.

#### 5. **Collision Resistance**
It should be **impossible (or at least extremely difficult)** to find two different pieces of data that produce the same hash. In other words, no two different inputs should ever result in the same hash value.

- Example: It's like trying to find two different books that have exactly the same ISBN number (which isn't possible). With hash functions, two different inputs should never result in the same hash.

---

### Why is Hashing Important?

Hashing is used in a variety of important applications:

- **Password storage**: Instead of storing passwords directly, websites store the hash of the password. This way, even if someone steals the data, they can’t reverse-engineer your password from the hash.
  
- **Data integrity**: When you download a file from the internet, the website might give you the hash of the file. After you download the file, you can hash it yourself and compare the result with the provided hash. If they match, the file hasn’t been tampered with.

- **Digital signatures**: Cryptocurrencies like Bitcoin use hashes to create a unique "digital fingerprint" of transactions, ensuring that they can't be altered after they've been created.

---

### A Simple Example

Let’s take a very simple example with a hash function that gives us a fixed-size output:

- Input: **"Hello"**
- Output (hash): **"2cf24dba5fb0a30e26e83b2ac5b9e29e1b1691f4c935e7468b7d62d6b460e4d0"**

Now, let's see how changing the input just a little bit changes the hash drastically:

- Input: **"hello"** (note the small change in capitalization)
- Output (hash): **"5d41402abc4b2a76b9719d911017c592"**

As you can see, even a small change in the input ("Hello" vs "hello") gives a completely different hash value.

---

### Conclusion

To summarize:

- **Hashing** is a process where data of any size is turned into a fixed-size output (hash).
- The hash is like a unique fingerprint for the data.
- Hash functions are **fast**, **deterministic**, and **secure**, making them useful for things like storing passwords, checking file integrity, and ensuring data hasn’t been tampered with.

The properties of hash functions—such as determinism, fast computation, and collision resistance—make them incredibly useful in cybersecurity and data integrity applications.



---
---
---


## 🔑 1. What is a Hash?

* A **hash function** (like SHA-256) takes any input (text, file, image, etc.) → and produces a fixed-length output (a “digest”).
* Example:

  ```
  Input: "hello"
  SHA-256: 2cf24dba5fb0a... (64-character string)
  ```
* Even if you change 1 letter, the hash output is completely different.

---

## 🔒 2. Is a Hash Reversible?

* **No.** A hash is **one-way**.
* You cannot take a hash value and directly recover the original text.
* This is why hashes are used for **password storage, blockchain security, file verification**.

So, if you hash your paragraph with SHA-256 and post it online:
👉 Nobody can directly read what you wrote.

---

## 🧩 3. But Is It Impossible?

Not 100% impossible — here’s why:

* **Brute force / dictionary attack**:
  If your paragraph is short or common (like “I love pizza”), attackers could try hashing billions of guesses until they find the same hash.

  * Example: Websites often publish “rainbow tables” of pre-computed hashes of common passwords.

* **Long & unique inputs are safe**:
  If your paragraph is long, complex, and unique (like a random essay), brute forcing it is practically impossible.

  * SHA-256 has **2²⁵⁶ possibilities** — more than atoms in the universe.

So, security depends on how **predictable** your input is.

---

## ✅ 4. Final Answer

* If you hash a paragraph with SHA-256 and release only the hash:

  * **No one can directly know what you wrote.**
  * If it’s something short or common → someone *might* guess it.
  * If it’s long, unique, and random → it’s practically unbreakable.

---

💡 That’s why Bitcoin addresses & block security use SHA-256: it’s secure, irreversible, and nearly impossible to guess.


---
---
---




## 🔑 1. Hash Function vs. Key

* **Hashing (like SHA-256)** is **not encryption**.
* In encryption, if someone knows the algorithm **and** the key → they can decrypt.
* In hashing, there is **no key** → just an algorithm that always produces the same output.

So even if someone knows you used **SHA-256**, they still **cannot reverse** the hash back to your text.

---

## 🧩 2. But What Can Attackers Do If They Know the Algorithm?

* Hashing algorithms are public — everyone knows SHA-256.
* Attackers can try **brute force**: guess possible inputs, hash them with SHA-256, and see if the result matches your hash.
* This only works if your input is **short, predictable, or common**.

Example:

* Hash: `2cf24dba...`
* Attacker guesses “hello” → hashes it with SHA-256 → gets the same hash → input revealed.

But if your input was a **long paragraph** or **random string**, brute force would take longer than the lifetime of the universe.

---

## 🔒 3. Real-World Analogy

Think of SHA-256 like a **blender**:

* Input = your paragraph.
* Output = smoothie (hash).
* Everyone knows which blender you used, but nobody can take the smoothie and turn it back into the exact fruits.
* The only way to “guess” is to try blending the same combination of fruits until they get the identical smoothie.

---

## ✅ Final Answer

* Even if attackers know the hashing algorithm (SHA-256), they **cannot directly reverse it**.
* They can only guess inputs → hash them → compare.
* If your input is long and unique, it’s practically impossible to recover.

---

⚡ Pro tip: That’s why sensitive data often uses **hash + salt** (adding random data before hashing) to make brute forcing even harder.


---
---
---



## **Your Code**

```javascript
const crypto = require('crypto');

const input = "100xdevs";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)
```

---

## **1️⃣ `const crypto = require('crypto');`**

* Node.js has a built-in module called **`crypto`** for cryptography.
* This module provides hashing, encryption, and other cryptographic functions.
* Here, you’re importing it so you can use **SHA-256 hashing**.

---

## **2️⃣ `const input = "100xdevs";`**

* This is the **text** you want to hash.
* In this case, the string `"100xdevs"`.

---

## **3️⃣ `crypto.createHash('sha256')`**

* This creates a **hash object** using the **SHA-256 algorithm**.
* SHA-256 is a **cryptographic hash function**:

  * Takes input of **any length** → outputs **256-bit fixed-length hash**.
  * Even changing **one character** in input gives a completely different hash.

---

## **4️⃣ `.update(input)`**

* This feeds your input text into the hash function.
* You can also call `.update()` multiple times to feed chunks of data.

---

## **5️⃣ `.digest('hex')`**

* This finalizes the hash and outputs it.
* `'hex'` → converts the hash from binary to **hexadecimal string** (0–9, a–f).

---

## **6️⃣ `console.log(hash)`**

* Prints the resulting SHA-256 hash of `"100xdevs"` to the console.

---

## **🔑 Output Characteristics**

* Example output for `"100xdevs"`:

```
0b6e3c6d1e5e2f3a4f7a4c3d2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c
```

> Note: actual hash will be **different**, but it will **always be 64 hex characters** (because 256 bits ÷ 4 bits per hex digit = 64).

* **Fixed length**: SHA-256 always outputs **256 bits**, no matter how long or short the input is.

  * `"a"` → 64-character hex string
  * `"100xdevs"` → 64-character hex string
  * `"Lorem ipsum …"` → 64-character hex string

* **Deterministic**: Same input → same hash every time.

---

## **📌 Why Fixed Length Matters**

1. Predictable storage: databases know every hash is 256 bits.
2. Security: hard to infer original input because the output is “mixed up” and uniform.
3. Cryptography: consistent block size is required for blockchain and digital signatures.

---

✅ **In short:**

* The code takes `"100xdevs"`, applies SHA-256, and prints a **fixed-length 64-character hexadecimal hash**.
* You cannot reverse it to get `"100xdevs"`, but the same input will always give the same hash.
