#!/bin/bash
set -e  # Exit on error

echo "🔁 Starting ZK Workflow..."

# --- Check Circom File Argument ---
if [ -z "$1" ]; then
    echo "Usage: $0 <circuits/circuit_file.circom>"
    exit 1
fi

CIRCOM_FILE="$1"
CIRCUIT_NAME=$(basename "$CIRCOM_FILE" .circom)  # e.g., dob_age
BUILD_DIR="build/${CIRCUIT_NAME}_js"

echo "📁 Circuit: $CIRCUIT_NAME"
echo "📂 Using build dir: $BUILD_DIR"

mkdir -p build

# --- Compilation ---
echo "🛠️ Compiling circuit..."
circom "$CIRCOM_FILE" --r1cs --wasm --sym -o build -l ./node_modules/

# --- Witness Generation ---
echo "📊 Calculating witness..."
snarkjs wtns calculate "build/${CIRCUIT_NAME}_js/${CIRCUIT_NAME}.wasm" input.json build/witness.wtns

# --- Trusted Setup (skip if already exists) ---
if [ ! -f "build/${CIRCUIT_NAME}_final.zkey" ]; then
    echo "🌀 Trusted setup starting..."

    snarkjs powersoftau new bn128 12 build/pot12.ptau -v
    snarkjs powersoftau contribute build/pot12.ptau build/pot13.ptau --name="Automated Contribution" -v
    snarkjs powersoftau prepare phase2 build/pot13.ptau build/pot14.ptau

    echo "🔐 Generating zkey..."
    snarkjs groth16 setup build/${CIRCUIT_NAME}.r1cs build/pot14.ptau build/${CIRCUIT_NAME}_final.zkey
else
    echo "✅ Final zkey already exists. Skipping setup."
fi

# --- Export Verification Key ---
echo "🔑 Exporting verification key..."
snarkjs zkey export verificationkey build/${CIRCUIT_NAME}_final.zkey build/verification_key.json

# --- Generate Proof ---
echo "📜 Generating proof..."
snarkjs groth16 prove build/${CIRCUIT_NAME}_final.zkey build/witness.wtns build/proof.json build/public.json

# --- Verify Proof ---
echo "🔍 Verifying proof..."
snarkjs groth16 verify build/verification_key.json build/public.json build/proof.json

echo "✅ Done: ZK flow completed for ${CIRCUIT_NAME}!"
