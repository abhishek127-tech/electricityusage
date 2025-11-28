# README.md

# 🗳️ Simple Voting DApp

## **Contract Address**
`0x6d6012aB81F6A8Ef28590ed564878787aEBcFAeE`  
Explorer: https://coston2-explorer.flare.network/address/0x6d6012aB81F6A8Ef28590ed564878787aEBcFAeE

---

## 📌 **Project Description**

This project is a fully on-chain **decentralized voting system** built on the Flare Coston2 network.  
It demonstrates how to interact with a smart contract using modern Web3 front-end tools (Next.js, Wagmi, Viem).

The smart contract contains a predefined list of candidates and allows any wallet address to vote **once**.  
The front-end UI interacts seamlessly with the contract, displaying candidate information and transaction status.

---

## ✨ **Features**

### 🔸 Smart Contract Features
- Predefined list of candidates (Alice, Bob, Charlie)
- Anyone can vote one time per wallet address
- Fully transparent vote count on-chain
- Public functions to read candidates and results

### 🔸 Front-End Features
- Wallet-gated UI (only shows features after wallet connection)
- Candidate count display
- Vote submission with transaction status (loading, confirming, confirmed)
- Error handling for invalid or failed transactions
- Fully typed hooks using viem + wagmi
- Clean, minimal, responsive UI

---

## 💡 **How It Solves the Problem**

Traditional voting systems suffer from:
- Lack of transparency  
- Possibility of tampering  
- Need for central authorities  
- Limited verifiability for users  

This DApp solves those issues by providing:

### ✔ Full Transparency  
Votes are stored publicly on-chain. Anyone can verify them at any time.

### ✔ Decentralization  
No central server or authority controls the vote count. The network enforces fairness.

### ✔ One Person = One Vote  
The contract prevents double voting using a wallet-based verification system.

### ✔ Open, Verifiable, Trustless  
Every vote is cryptographically signed and stored permanently.

### ✔ Easy to Use  
The UI offers a smooth, simple experience for beginners exploring blockchain voting.

---

## 🚀 **Use Cases**
- Student council elections  
- DAO governance  
- Polling systems  
- Blockchain learning projects  
- Transparent community voting  

---

If you want an extended UI, real-time candidate list rendering, or full DApp deployment setup (Vercel + Hardhat), just ask!