// zk/zk.config.ts

export type CircuitName = "dob_age"; // Add more as needed

export const circuits: Record<
  CircuitName,
  {
    wasmPath: string;
    zkeyPath: string;
    vkeyPath: string;
  }
> = {
  dob_age: {
    wasmPath: "../../zk-auto/build/dob/dob_js/dob.wasm",
    zkeyPath: "../../zk-auto/build/dob/dob_final.zkey",
    vkeyPath: "../../zk-auto/build/dob/verification_key.json",
  },
};
