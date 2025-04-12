"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScanLine, CheckCircle, XCircle, RotateCcw, Clock, Shield } from "lucide-react"

type VerificationStatus = "idle" | "scanning" | "success" | "error"

export default function VerifierPage() {
  const [activeTab, setActiveTab] = useState("scanner")
  const [verificationStatus, setVerificationStatus] = useState<VerificationStatus>("idle")
  const [verificationData, setVerificationData] = useState<any>(null)

  const handleScan = () => {
    setVerificationStatus("scanning")

    // Simulate scanning process
    setTimeout(() => {
      // Randomly decide if verification is successful or not (for demo purposes)
      const isSuccess = Math.random() > 0.3

      if (isSuccess) {
        setVerificationStatus("success")
        setVerificationData({
          proofType: "Age Verification",
          claim: "User is over 18 years old",
          verified: true,
          timestamp: new Date().toISOString(),
          photoUrl: "/placeholder.svg?height=100&width=100",
        })
      } else {
        setVerificationStatus("error")
        setVerificationData({
          error: "Invalid or expired proof",
          timestamp: new Date().toISOString(),
        })
      }
    }, 2000)
  }

  const handleReset = () => {
    setVerificationStatus("idle")
    setVerificationData(null)
  }

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Verifier Dashboard</h1>
          <p className="text-muted-foreground">Scan and verify zero-knowledge proofs</p>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
          <ScanLine className="h-6 w-6 text-primary" />
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="scanner">QR Scanner</TabsTrigger>
          <TabsTrigger value="history">Verification History</TabsTrigger>
        </TabsList>

        <TabsContent value="scanner">
          <Card className="overflow-hidden">
            <CardHeader>
              <CardTitle>Scan ZK Proof</CardTitle>
              <CardDescription>Scan a QR code to verify a zero-knowledge proof</CardDescription>
            </CardHeader>
            <CardContent>
              {verificationStatus === "idle" && (
                <div className="flex flex-col items-center justify-center p-8 bg-muted rounded-md">
                  <div className="w-64 h-64 border-2 border-dashed border-muted-foreground rounded-md flex items-center justify-center mb-4">
                    <ScanLine className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <p className="text-center text-muted-foreground">Position the QR code within the frame to scan</p>
                </div>
              )}

              {verificationStatus === "scanning" && (
                <div className="flex flex-col items-center justify-center p-8 bg-muted rounded-md">
                  <div className="w-64 h-64 border-2 border-primary border-dashed rounded-md flex items-center justify-center mb-4 relative">
                    <div className="absolute inset-0 bg-primary/5 animate-pulse rounded-md"></div>
                    <ScanLine className="h-16 w-16 text-primary animate-pulse" />
                  </div>
                  <p className="text-center text-muted-foreground flex items-center">
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Scanning and verifying proof...
                  </p>
                </div>
              )}

              {verificationStatus === "success" && verificationData && (
                <div className="flex flex-col items-center p-6 bg-green-50 dark:bg-green-950/20 rounded-md">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-2">Verification Successful</h3>
                  <p className="text-center text-muted-foreground mb-4">The zero-knowledge proof is valid</p>

                  <div className="w-full max-w-md bg-background p-4 rounded-md shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={verificationData.photoUrl || "/placeholder.svg"}
                        alt="User"
                        className="w-16 h-16 rounded-md object-cover"
                      />
                      <div>
                        <h4 className="font-medium">{verificationData.proofType}</h4>
                        <p className="text-sm text-muted-foreground">{verificationData.claim}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4" />
                      <span>
                        Cryptographically verified at {new Date(verificationData.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {verificationStatus === "error" && verificationData && (
                <div className="flex flex-col items-center p-6 bg-red-50 dark:bg-red-950/20 rounded-md">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
                    <XCircle className="h-8 w-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Verification Failed</h3>
                  <p className="text-center text-muted-foreground mb-4">{verificationData.error}</p>

                  <div className="w-full max-w-md bg-background p-4 rounded-md shadow-sm">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Attempted verification at {new Date(verificationData.timestamp).toLocaleTimeString()}</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col sm:flex-row gap-2">
              {verificationStatus === "idle" && (
                <Button className="w-full" onClick={handleScan}>
                  Start Scanning
                </Button>
              )}

              {verificationStatus === "scanning" && (
                <Button className="w-full" disabled>
                  Scanning...
                </Button>
              )}

              {(verificationStatus === "success" || verificationStatus === "error") && (
                <Button className="w-full" onClick={handleReset}>
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Scan Again
                </Button>
              )}
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Verification History</CardTitle>
              <CardDescription>View your recent verification activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Age Verification</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-muted-foreground">Verified on April 12, 2025 at 10:45 AM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">License Verification</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-muted-foreground">Verified on April 11, 2025 at 2:30 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30">
                      <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">Identity Verification</h3>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-muted-foreground">Failed on April 10, 2025 at 9:15 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
