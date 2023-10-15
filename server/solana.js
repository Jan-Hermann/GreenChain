const solanaWeb3 = require('@solana/web3.js');

// Connect to the cluster (mainnet-beta is the main Solana network)
const connection = new solanaWeb3.Connection(
  solanaWeb3.clusterApiUrl('mainnet-beta')
);

// Generate a new random keypair
const keypair = solanaWeb3.Keypair.generate();

// Print out the public key/address
console.log('PublicKey:', keypair.publicKey.toBase58());

// Send and confirm a transaction
async function sendAndConfirmTransaction(transaction) {
  let txid = await connection.sendTransaction(transaction, [keypair]);
  await connection.confirmTransaction(txid);
  return txid;
}

// Add more functions to interact with Solana blockchain, like:
// - Fetch account info
// - Submit data to blockchain
// - Verify data on blockchain

module.exports = {
  connection,
  keypair,
  sendAndConfirmTransaction
};
