import React, { useState } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { Program, AnchorProvider, web3 } from "@project-serum/anchor";
import idl from "./idl.json";  // IDL file generated after deploying your program
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';

const programID = new PublicKey("YOUR_PROGRAM_ID_HERE");
const network = clusterApiUrl("devnet");
const opts = { preflightCommitment: "processed" };

const LogPromise = () => {
  const [description, setDescription] = useState("");
  const [politician, setPolitician] = useState("");
  const wallet = new PhantomWalletAdapter();

  const logPromise = async () => {
    const connection = new Connection(network, opts.preflightCommitment);
    const provider = new AnchorProvider(connection, wallet, opts.preflightCommitment);
    const program = new Program(idl, programID, provider);

    try {
      await program.rpc.logPromise(description, politician, {
        accounts: {
          promise: web3.Keypair.generate().publicKey,
          user: provider.wallet.publicKey,
          systemProgram: web3.SystemProgram.programId,
        },
        signers: [],
      });
      console.log("Promise logged!");
    } catch (err) {
      console.error("Error logging promise:", err);
    }
  };

  return (
    <div>
      <input type="text" placeholder="Promise description" onChange={e => setDescription(e.target.value)} />
      <input type="text" placeholder="Politician name" onChange={e => setPolitician(e.target.value)} />
      <button onClick={logPromise}>Log Promise</button>
    </div>
  );
};

export default LogPromise;
