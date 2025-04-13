"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Shield, Upload, Copy, CheckCircle } from "lucide-react"

// Mock data for registered users
const mockUsers = [
  {
    id: "001",
    name: "John Doe",
    dob: "1990-05-15",
    nationality: "Indian",
    licenseClass: "A",
    registeredOn: "2023-10-12",
  },
  {
    id: "002",
    name: "Jane Smith",
    dob: "1985-08-22",
    nationality: "Indian",
    licenseClass: "B",
    registeredOn: "2023-11-05",
  },
  {
    id: "003",
    name: "Alex Johnson",
    dob: "1992-03-10",
    nationality: "Indian",
    licenseClass: "C",
    registeredOn: "2023-12-18",
  },
]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("register")
  const [users, setUsers] = useState(mockUsers)
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    nationality: "Indian",
    licenseClass: "",
    photo: null as File | null,
  })
  const [showCredentials, setShowCredentials] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [recoveryPhrase, setRecoveryPhrase] = useState("")

  const generateUniqueId = (): string => {
    const lastUser = mockUsers.at(mockUsers.length - 1);
    return lastUser ? (parseInt(lastUser.id) + 1).toString().padStart(3, "0") : "001";
  };

  const createUserFromForm = (formData: any) => {
    return {
      id: generateUniqueId(), // you can implement this function or use a library
      name: formData.fullName,
      dob: formData.dob,
      nationality: formData.nationality,
      licenseClass: formData.licenseClass,
      registeredOn: new Date().toISOString().split("T")[0], // format as YYYY-MM-DD
      // photo is excluded if not part of the final user object
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, photo: e.target.files[0] })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Generate mock wallet address and recovery phrase
    const mockWalletAddress = "0x" + Math.random().toString(16).substring(2, 42)
    const mockRecoveryPhrase = "word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12"

    let newUser = createUserFromForm(formData);

    setUsers([...users, newUser])

    setWalletAddress(mockWalletAddress)
    setRecoveryPhrase(mockRecoveryPhrase)
    setShowCredentials(true)
  }

  const handleCloseCredentials = () => {
    setShowCredentials(false)
    setFormData({
      fullName: "",
      dob: "",
      nationality: "Indian",
      licenseClass: "",
      photo: null,
    })
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Register new users and manage identity credentials</p>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
          <Shield className="h-6 w-6 text-primary" />
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="register">Register User</TabsTrigger>
          <TabsTrigger value="manage">Manage Users</TabsTrigger>
        </TabsList>

        <TabsContent value="register" className="space-y-4">
          <Card>
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle>Register New User</CardTitle>
                <CardDescription>Enter user details to register them in the AadharX system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input id="dob" name="dob" type="date" value={formData.dob} onChange={handleInputChange} required />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nationality">Nationality Proof</Label>
                    <Select
                      value={formData.nationality}
                      onValueChange={(value) => handleSelectChange("nationality", value)}
                    >
                      <SelectTrigger id="nationality">
                        <SelectValue placeholder="Select nationality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Indian">Indian</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="licenseClass">License Class (Optional)</Label>
                    <Select
                      value={formData.licenseClass}
                      onValueChange={(value) => handleSelectChange("licenseClass", value)}
                    >
                      <SelectTrigger id="licenseClass">
                        <SelectValue placeholder="Select license class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A">Class A</SelectItem>
                        <SelectItem value="B">Class B</SelectItem>
                        <SelectItem value="C">Class C</SelectItem>
                        <SelectItem value="None">None</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="photo">Photo Upload</Label>
                  <div className="flex items-center gap-4">
                    <div className="w-24 h-24 border rounded-md flex items-center justify-center bg-muted">
                      {formData.photo ? (
                        <img
                          src={URL.createObjectURL(formData.photo) || "/placeholder.svg"}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-md"
                        />
                      ) : (
                        <Upload className="h-8 w-8 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <Input
                        id="photo"
                        name="photo"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Upload a clear photo. Will be stored on IPFS.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">
                  Register User
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>

        <TabsContent value="manage">
          <Card>
            <CardHeader>
              <CardTitle>Registered Users</CardTitle>
              <CardDescription>View and manage all registered users in the AadharX system</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Date of Birth</TableHead>
                    <TableHead>Nationality</TableHead>
                    <TableHead>License Class</TableHead>
                    <TableHead>Registered On</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.id}</TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.dob}</TableCell>
                      <TableCell>{user.nationality}</TableCell>
                      <TableCell>{user.licenseClass}</TableCell>
                      <TableCell>{user.registeredOn}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Dialog open={showCredentials} onOpenChange={setShowCredentials}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>User Registration Successful</DialogTitle>
            <DialogDescription>
              The user has been registered successfully. Share these credentials securely with the user.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label>Wallet Address</Label>
              <div className="flex items-center gap-2">
                <Input value={walletAddress} readOnly />
                <Button variant="outline" size="icon" onClick={() => copyToClipboard(walletAddress)}>
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Recovery Phrase</Label>
              <div className="p-3 bg-muted rounded-md relative">
                <p className="text-sm font-mono break-all">{recoveryPhrase}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1 right-1"
                  onClick={() => copyToClipboard(recoveryPhrase)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Important: Store this recovery phrase in a secure location. It cannot be recovered if lost.
              </p>
            </div>
            <div className="rounded-md bg-primary/10 p-4 flex items-center gap-3">
              <CheckCircle className="h-5 w-5 text-primary" />
              <p className="text-sm">User identity credentials have been generated and are ready to use.</p>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCloseCredentials}>Done</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
