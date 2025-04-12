"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, User, ScanLine } from "lucide-react"

export default function Home() {
  const [role, setRole] = useState<string>("")
  const router = useRouter()

  const handleLogin = () => {
    if (role) {
      router.push(`/${role.toLowerCase()}`)
    }
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800"
      style={{ 
        backgroundImage: "url('/landscape.jpeg')", 
        backgroundSize: "cover",
        backgroundPositionY: "bottom"
       }}
    >
      <Card 
        className="w-full max-w-md"
        style={{
          background: "hsl(var(--card) / 0.5)",
          border: "2px solid hsl(var(--card) / 0.1)",
          backdropFilter: "blur(20px)",
        }}
      >
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
            <label htmlFor="role" className="text-sm font-medium">
              Select your role
            </label>
            <Select onValueChange={setRole} value={role}>
              <SelectTrigger>
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>Admin</span>
                  </div>
                </SelectItem>
                <SelectItem value="user">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>User</span>
                  </div>
                </SelectItem>
                <SelectItem value="verifier">
                  <div className="flex items-center gap-2">
                    <ScanLine className="h-4 w-4" />
                    <span>Verifier</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={handleLogin} disabled={!role}>
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
