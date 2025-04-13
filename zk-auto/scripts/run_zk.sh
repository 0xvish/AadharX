#!/bin/bash
set -e  # Exit on error

echo "🔁 Starting ZK Workflow..."

# --- Check Circuit Name Argument ---
if [ -z "$1" ]; then
    echo "Usage: $0 <circuit_name>"
    echo "Example: ./scripts/run_zk.sh dob"
    exit 1
fi

CIRCUIT_NAME="$1"
CIRCUIT_DIR="circuits/$CIRCUIT_NAME"
BUILD_DIR="build/$CIRCUIT_NAME"

CIRCOM_FILE="${CIRCUIT_DIR}/${CIRCUIT_NAME}.circom"
INPUT_FILE="${CIRCUIT_DIR}/input.json"

# --- Sanity Check ---
if [ ! -f "$CIRCOM_FILE" ]; then
    echo "❌ Circuit file not found: $CIRCOM_FILE"
    exit 1
fi

if [ ! -f "$INPUT_FILE" ]; then
    echo "❌ Input file not found: $INPUT_FILE"
    exit 1
fi

echo "📁 Circuit: $CIRCUIT_NAME"
echo "📂 Build dir: $BUILD_DIR"
mkdir -p "$BUILD_DIR"

# --- Compile circuit ---
echo "🛠️ Compiling circuit..."
circom "$CIRCOM_FILE" --r1cs --wasm --sym -o "$BUILD_DIR" -l ./node_modules/

# --- Generate Witness ---
echo "📊 Calculating witness..."
snarkjs wtns calculate \
    "$BUILD_DIR/${CIRCUIT_NAME}_js/${CIRCUIT_NAME}.wasm" \
    "$INPUT_FILE" \
    "$BUILD_DIR/witness.wtns"

# --- Trusted Setup ---
ZKEY_PATH="$BUILD_DIR/${CIRCUIT_NAME}_final.zkey"
if [ ! -f "$ZKEY_PATH" ]; then
    echo "🌀 Performing trusted setup..."

    snarkjs powersoftau new bn128 12 "$BUILD_DIR/pot12.ptau" -v
    snarkjs powersoftau contribute "$BUILD_DIR/pot12.ptau" "$BUILD_DIR/pot13.ptau" --name="Automated Contribution" -v
    snarkjs powersoftau prepare phase2 "$BUILD_DIR/pot13.ptau" "$BUILD_DIR/pot14.ptau"

    snarkjs groth16 setup \
        "$BUILD_DIR/${CIRCUIT_NAME}.r1cs" \
        "$BUILD_DIR/pot14.ptau" \
        "$ZKEY_PATH"
else
    echo "✅ ZKey already exists. Skipping trusted setup."
fi

# --- Export Verification Key ---
echo "🔑 Exporting verification key..."
snarkjs zkey export verificationkey \
    "$ZKEY_PATH" \
    "$BUILD_DIR/verification_key.json"

# --- Generate Proof ---
echo "📜 Generating proof..."
snarkjs groth16 prove \
    "$ZKEY_PATH" \
    "$BUILD_DIR/witness.wtns" \
    "$BUILD_DIR/proof.json" \
    "$BUILD_DIR/public.json"

# --- Verify Proof ---
echo "🔍 Verifying proof..."
snarkjs groth16 verify \
    "$BUILD_DIR/verification_key.json" \
    "$BUILD_DIR/public.json" \
    "$BUILD_DIR/proof.json"

echo "✅ Done: ZK flow completed for ${CIRCUIT_NAME}!"
