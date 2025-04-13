const snarkjs = require("snarkjs");
// lib/zk.ts
import { circuits } from "@/zk/zk.config";

type CircuitConfig = {
  wasmPath: string;
  zkeyPath: string;
  vkeyPath: string;
};

// Function to generate proof on the client-side (via snarkjs)
export const generateProof = async (
  circuitName: keyof typeof circuits,
  input: any
) => {
  const config: CircuitConfig = circuits[circuitName];

  // snarkjs requires the paths to wasm, zkey files
  const { wasmPath, zkeyPath } = config;

  // Generating proof using snarkjs groth16
  const { proof, publicSignals } = await snarkjs.groth16.fullProve(
    input,
    wasmPath,
    zkeyPath
  );

  return { proof, publicSignals };
};
