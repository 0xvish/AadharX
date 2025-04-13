const snarkjs = require("snarkjs");
const fs = require("fs");
const path = require("path");

async function run() {
  const circuitName = "dob_age";
  const wasmPath = path.join(
    __dirname,
    `../build/${circuitName}_js/${circuitName}.wasm`
  );
  const zkeyPath = path.join(__dirname, `../build/${circuitName}_final.zkey`);
  const inputPath = path.join(__dirname, "../input.json");

  const input = JSON.parse(fs.readFileSync(inputPath, "utf-8"));

  // Step 1: Generate witness
  const {
    witnessCalculator,
  } = require(`../build/${circuitName}_js/witness_calculator.js`);
  const buffer = fs.readFileSync(wasmPath);
  const wc = await witnessCalculator(buffer);
  const witness = await wc.calculateWTNSBin(input, 0);

  fs.writeFileSync(`build/witness.wtns`, witness);

  // Step 2: Generate proof
  const { proof, publicSignals } = await snarkjs.groth16.prove(
    zkeyPath,
    "build/witness.wtns"
  );

  fs.writeFileSync("build/proof.json", JSON.stringify(proof, null, 2));
  fs.writeFileSync("build/public.json", JSON.stringify(publicSignals, null, 2));

  // Step 3: Verify proof
  const vKey = JSON.parse(
    fs.readFileSync("build/verification_key.json", "utf-8")
  );
  const verified = await snarkjs.groth16.verify(vKey, publicSignals, proof);

  console.log("\n✅ Verification:", verified ? "SUCCESS" : "FAILED");
  console.log("📦 Public Signals:", publicSignals);
  console.log("📁 Proof saved to build/proof.json");
}

run().catch(console.error);
