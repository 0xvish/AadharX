const snarkjs = require("snarkjs");

export async function verifyZKProof({
  vkey,
  proof,
  publicSignals,
}: {
  vkey: any;
  proof: any;
  publicSignals: any;
}) {
  try {
    const isValid = await snarkjs.groth16.verify(vkey, publicSignals, proof);
    return isValid;
  } catch (error) {
    console.error("ZK Verification error:", error);
    return false;
  }
}
