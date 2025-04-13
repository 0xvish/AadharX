"use client"

import { useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useAccount } from "wagmi"
import { Button } from "@/components/ui/button"
import { Shield, User, ScanLine, LogOut } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ModeToggle } from "@/components/mode-toggle"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const { isConnected } = useAccount()

  // Protect only admin and user dashboards
  useEffect(() => {
    const protectedRoutes = ["/admin", "/user"]
    const isProtected = protectedRoutes.some((route) => pathname.startsWith(route))

    if (isProtected && !isConnected) {
      router.push("/")
    }
  }, [isConnected, pathname, router])

  const getRole = () => {
    if (pathname.includes("/admin")) return "Admin"
    if (pathname.includes("/user")) return "User"
    if (pathname.includes("/verifier")) return "Verifier"
    return ""
  }

  const getIcon = () => {
    if (pathname.includes("/admin")) return <Shield className="h-4 w-4" />
    if (pathname.includes("/user")) return <User className="h-4 w-4" />
    if (pathname.includes("/verifier")) return <ScanLine className="h-4 w-4" />
    return null
  }

  const handleLogout = () => {
    router.push("/")
  }

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Left: Logo and Role Info */}
        <div className="flex sm:flex-row sm:items-center gap-2 sm:gap-6">
          <Link href="/" className="flex items-center gap-2">
            <Shield className="h-6 w-6" />
            <span className="text-xl font-bold">AadharX</span>
          </Link>


          {getRole() && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              {getIcon()}
              <span>{getRole()} Dashboard</span>
            </div>
          )}

        </div>

        {/* Right: Mode toggle and dropdown */}
        <div className="flex items-center gap-2 sm:gap-4">
          <ConnectButton />
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>{getRole().charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{getRole()}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {getRole() === "Admin" && "authority@aadharx.io"}
                    {getRole() === "User" && "user@example.com"}
                    {getRole() === "Verifier" && "verifier@aadharx.io"}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
