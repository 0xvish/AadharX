"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, User, ScanLine } from "lucide-react"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function Home() {
  const [role, setRole] = useState<string>("")
  const router = useRouter()

  const handleLogin = () => {
    if (role) {
      router.push(`/${role.toLowerCase()}`)
    }
  }

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

          <div className="space-y-2">
            <label className="text-sm font-medium">Select your role</label>
            <div className="flex gap-4 space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={role === "admin"}
                  onChange={(e) => setRole(e.target.value)}
                  className="accent-primary"
                />
                <Shield className="h-4 w-4" />
                <span>Admin</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={role === "user"}
                  onChange={(e) => setRole(e.target.value)}
                  className="accent-primary"
                />
                <User className="h-4 w-4" />
                <span>User</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value="verifier"
                  checked={role === "verifier"}
                  onChange={(e) => setRole(e.target.value)}
                  className="accent-primary"
                />
                <ScanLine className="h-4 w-4" />
                <span>Verifier</span>
              </label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4"> 
          <ConnectButton />
        </CardFooter>
      </Card>
    </div>
  )
}
