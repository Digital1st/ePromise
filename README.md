# ePromise
Track and log promises of government,  organisations and people
To create a low-cost blockchain app on Solana for logging political promises, you can take advantage of Solana's high throughput and low fees, which make it an ideal choice for your project. Here’s a step-by-step guide to building the app:

Steps to Build a Low-Cost Solana App:

1. Set Up Your Development Environment

Before you start developing on Solana, you need to set up your environment with the necessary tools.

Tools You’ll Need:

Solana CLI: Command-line interface to interact with Solana blockchain.

Rust: Since Solana uses Rust for writing on-chain programs (smart contracts), you'll need to install Rust.

Anchor Framework: A framework for Solana smart contracts that simplifies development.


Installation Steps:

Install Solana CLI: Run the following in your terminal to install the Solana CLI.

sh -c "$(curl -sSfL https://release.solana.com/v1.14.5/install)"

After installation, verify with:

solana --version

Install Rust: Install Rust using the following command:

curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

After installation, check with:

rustc --version

Install Anchor Framework: Anchor simplifies Solana smart contract development. Install it using:

cargo install --git https://github.com/project-serum/anchor --tag v0.24.2 anchor-cli --locked


2. Create a Solana Wallet

You need a wallet to interact with the Solana blockchain. You can create one using the Solana CLI:

solana-keygen new --outfile ~/.config/solana/id.json

This will generate a new wallet keypair. You can also use popular Solana wallets like Phantom for easier interaction with your app.

3. Deploy the Smart Contract (Solana Program)

Solana uses programs (on-chain smart contracts) written in Rust. Below is an outline of a Solana program that allows you to log political promises.
