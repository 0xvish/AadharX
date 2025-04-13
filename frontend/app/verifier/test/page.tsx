"use client";

import { useEffect, useState } from "react";
import { verifyZKProof } from "@/lib/zk/verifier";

export default function ZKTest() {
  const [status, setStatus] = useState("🧪 Verifying...");

  useEffect(() => {
    const verify = async () => {
      try {
        const [proof, publicSignals, vkey] = await Promise.all([
          fetch("/testdata/proof.json").then((res) => res.json()),
          fetch("/testdata/public.json").then((res) => res.json()),
          fetch("/testdata/verification_key.json").then((res) => res.json()),
        ]);

        const result = await verifyZKProof({ proof, publicSignals, vkey });
        setStatus(result ? "✅ Valid Proof" : "❌ Invalid Proof");
      } catch (err) {
        console.error(err);
        setStatus("❌ Error loading or verifying");
      }
    };

    verify();
  }, []);

  return <div className="text-xl font-mono">{status}</div>;
}
