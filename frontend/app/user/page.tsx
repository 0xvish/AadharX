"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, ShieldCheck, CreditCard, Calendar, Download, Share2 } from "lucide-react"

// Mock proof types
const proofTypes = [
  { id: "age", title: "Age Verification", description: "Prove I'm over 18 years old", icon: Calendar },
  {
    id: "identity",
    title: "Identity Verification",
    description: "Prove my identity without revealing personal data",
    icon: User,
  },
  {
    id: "license",
    title: "License Verification",
    description: "Prove I have a valid Class A license",
    icon: CreditCard,
  },
  {
    id: "nationality",
    title: "Nationality Verification",
    description: "Prove my nationality status",
    icon: ShieldCheck,
  },
]

export default function UserPage() {
  const [activeTab, setActiveTab] = useState("proofs")
  const [selectedProof, setSelectedProof] = useState<string | null>(null)
  const [showQRDialog, setShowQRDialog] = useState(false)

  const handleProofSelection = (proofId: string) => {
    setSelectedProof(proofId)
    setShowQRDialog(true)
  }

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">User Dashboard</h1>
          <p className="text-muted-foreground">Generate and share zero-knowledge proofs</p>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
          <User className="h-6 w-6 text-primary" />
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="proofs">Generate Proofs</TabsTrigger>
          <TabsTrigger value="history">Proof History</TabsTrigger>
        </TabsList>

        <TabsContent value="proofs" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {proofTypes.map((proof) => (
              <Card key={proof.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <proof.icon className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{proof.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{proof.description}</CardDescription>
                </CardContent>
                <CardFooter className="bg-muted/50 pt-2">
                  <Button variant="default" className="w-full" onClick={() => handleProofSelection(proof.id)}>
                    Generate Proof
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Identity Wallet</CardTitle>
              <CardDescription>Manage your decentralized identity and credentials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-md">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-md bg-background flex items-center justify-center">
                    <img src="/placeholder.svg?height=64&width=64" alt="User" className="rounded-md" />
                  </div>
                  <div>
                    <h3 className="font-medium">John Doe</h3>
                    <p className="text-sm text-muted-foreground">ID: AX-12345-ABCDE</p>
                    <p className="text-xs text-muted-foreground mt-1">Wallet: 0x71C...F3E2</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card>
            <CardHeader>
              <CardTitle>Proof History</CardTitle>
              <CardDescription>View your previously generated proofs and their usage history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <div>
                        <h3 className="font-medium">Age Verification</h3>
                        <p className="text-sm text-muted-foreground">Generated on April 10, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <p>Used 2 times • Last used: 2 days ago</p>
                  </div>
                </div>

                <div className="p-4 border rounded-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="h-4 w-4 text-primary" />
                      <div>
                        <h3 className="font-medium">License Verification</h3>
                        <p className="text-sm text-muted-foreground">Generated on April 5, 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    <p>Used 1 time • Last used: 5 days ago</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={showQRDialog} onOpenChange={setShowQRDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {selectedProof === "age" && "Age Verification Proof"}
              {selectedProof === "identity" && "Identity Verification Proof"}
              {selectedProof === "license" && "License Verification Proof"}
              {selectedProof === "nationality" && "Nationality Verification Proof"}
            </DialogTitle>
            <DialogDescription>
              Your zero-knowledge proof has been generated. Share this QR code with verifiers.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center py-4">
            <div className="w-64 h-64 bg-white p-4 rounded-md flex items-center justify-center">
              <img
                src="/placeholder.svg?height=200&width=200&text=ZK-Proof+QR"
                alt="QR Code"
                className="w-full h-full"
              />
            </div>
            <p className="text-sm text-center mt-4 text-muted-foreground">
              This proof verifies your information without revealing any personal data.
            </p>
          </div>
          <DialogFooter className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" className="sm:flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button className="sm:flex-1">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
