"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAccount } from "wagmi"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ConnectButton } from "@rainbow-me/rainbowkit"

// Import the authority.json file directly (public folder)
import authorityData from "../../lib/authority.json"
import { Shield } from "lucide-react"

export default function Home() {
  const router = useRouter()
  const { address, isConnected } = useAccount()
  const [redirecting, setRedirecting] = useState(false)

  useEffect(() => {
    const checkAuthority = async () => {
      if (!isConnected || !address) return

      setRedirecting(true)

      try {
        // Check if the address is in the authority list
        const isAdmin = authorityData.authorities?.includes(address)
        router.push(isAdmin ? "/admin" : "/user")
      } catch (error) {
        console.error("Failed to check authority.json:", error)
        router.push("/user") // fallback
      }
    }

    checkAuthority()
  }, [isConnected, address])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">AadharX</CardTitle>
          <CardDescription>Decentralized Identity Verification System</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="h-12 w-12 text-primary" />
            </div>
          </div>

          <p className="text-center text-muted-foreground text-sm">
            {redirecting ? "Verifying role..." : "Connect your wallet to continue"}
          </p>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4">
          <ConnectButton />
        </CardFooter>
      </Card>
    </div>
  )
}
