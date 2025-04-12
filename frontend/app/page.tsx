import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Shield,
  Lock,
  Scan,
  UserCheck,
  Database,
  ChevronRight,
  Github,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-800/40 backdrop-blur-xl bg-gray-950/70">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-blue-500" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              AadharX
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
              How It Works
            </Link>
            <Link href="#modules" className="text-sm text-gray-300 hover:text-white transition-colors">
              Modules
            </Link>
            <Link href="#security" className="text-sm text-gray-300 hover:text-white transition-colors">
              Security
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-300 hover:bg-gray-800 hover:text-white">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400 backdrop-blur-md border border-blue-500/20">
              Decentralized Identity Verification
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
              Secure Identity Verification with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Zero Knowledge
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-[600px]">
              AadharX is a decentralized identity system built with blockchain and zero-knowledge proofs, protecting
              your data while enabling secure verification.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button size="lg" variant="outline" className="border-none text-gray-300 bg-transparent hover:bg-gray-800 hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] w-full rounded-xl overflow-hidden border border-gray-800/50 backdrop-blur-sm bg-gray-900/30">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20 z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
                <div className="absolute inset-4 rounded-full bg-blue-500/30 backdrop-blur-md"></div>
                <div className="absolute inset-8 rounded-full bg-blue-600/40 backdrop-blur-md flex items-center justify-center">
                  <Shield className="h-20 w-20 text-white" />
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Key Features</h2>
          <p className="text-xl text-gray-400 max-w-[800px] mx-auto">
            AadharX combines cutting-edge blockchain technology with zero-knowledge proofs to revolutionize identity
            verification
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/30 p-6 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-gray-900/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Lock className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Zero-Knowledge Proofs</h3>
            <p className="text-gray-400">
              Verify your identity without revealing sensitive personal data, maintaining complete privacy.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/30 p-6 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-gray-900/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Database className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Blockchain Security</h3>
            <p className="text-gray-400">
              Your identity is secured by immutable blockchain technology, preventing tampering and fraud.
            </p>
          </div>
          <div className="group relative overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/30 p-6 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-gray-900/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Scan className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">QR Code Sharing</h3>
            <p className="text-gray-400">
              Share your verifiable proofs instantly via QR codes for seamless verification.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-12 md:py-24 bg-gray-950/80 border-y border-gray-800/40">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white">How AadharX Works</h2>
            <p className="text-xl text-gray-400 max-w-[800px] mx-auto">
              A simple, secure process for identity verification without compromising your privacy
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-px bg-gradient-to-b from-blue-500 to-transparent md:hidden"></div>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/50 bg-gray-900 text-blue-500 shadow-glow-blue">
                <span className="text-lg font-bold">1</span>
              </div>
              <div className="mt-4 ml-12 md:ml-0">
                <h3 className="text-xl font-bold text-white mb-2">Register Your Identity</h3>
                <p className="text-gray-400">
                  Visit an authorized center to register your identity securely on the blockchain.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-6 h-full w-px bg-gradient-to-b from-blue-500 to-transparent md:hidden"></div>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/50 bg-gray-900 text-blue-500 shadow-glow-blue">
                <span className="text-lg font-bold">2</span>
              </div>
              <div className="mt-4 ml-12 md:ml-0">
                <h3 className="text-xl font-bold text-white mb-2">Generate Zero-Knowledge Proofs</h3>
                <p className="text-gray-400">
                  Create verifiable proofs of your identity without revealing your personal data.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-blue-500/50 bg-gray-900 text-blue-500 shadow-glow-blue">
                <span className="text-lg font-bold">3</span>
              </div>
              <div className="mt-4 ml-12 md:ml-0">
                <h3 className="text-xl font-bold text-white mb-2">Share & Verify</h3>
                <p className="text-gray-400">
                  Share your proof via QR code with verifiers who can instantly validate your identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="container py-12 md:py-24">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">AadharX Modules</h2>
          <p className="text-xl text-gray-400 max-w-[800px] mx-auto">
            Our platform serves different roles in the identity verification ecosystem
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="group relative overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/30 p-8 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-gray-900/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <UserCheck className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">User Module</h3>
            <p className="text-gray-400 mb-4">
              For individuals who need to verify their identity while maintaining privacy.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                Generate identity proofs
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                Share via QR codes
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                Manage verification history
              </li>
            </ul>
          </div>
          <div className="group relative overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/30 p-8 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-gray-900/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Scan className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Verifier Module</h3>
            <p className="text-gray-400 mb-4">
              For organizations that need to verify identities without accessing sensitive data.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                Scan QR codes
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                Instant verification
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                Verification logs
              </li>
            </ul>
          </div>
          <div className="group relative overflow-hidden rounded-xl border border-gray-800/50 bg-gray-900/30 p-8 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-gray-900/50">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <Shield className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Admin Module</h3>
            <p className="text-gray-400 mb-4">
              For authorized centers that register and manage identities on the blockchain.
            </p>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                Register new identities
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                Manage verification authorities
              </li>
              <li className="flex items-center">
                <ChevronRight className="h-4 w-4 text-blue-500 mr-2" />
                System monitoring
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-12 md:py-24 bg-gray-950/80 border-y border-gray-800/40">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden border border-gray-800/50 backdrop-blur-sm bg-gray-900/30">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 z-10"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <Lock className="h-32 w-32 text-blue-500" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400 backdrop-blur-md border border-blue-500/20">
                Security First
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Your Data, Your Control</h2>
              <p className="text-xl text-gray-400">
                AadharX is built with privacy and security as core principles. Your data never leaves your control.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Zero-Knowledge Architecture</h3>
                    <p className="text-gray-400">Your personal data is never exposed during verification.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Blockchain Immutability</h3>
                    <p className="text-gray-400">Once registered, your identity cannot be tampered with.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 text-blue-500">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">End-to-End Encryption</h3>
                    <p className="text-gray-400">All communications are encrypted to prevent interception.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-24">
        <div className="relative overflow-hidden rounded-2xl border border-gray-800/50 bg-gray-900/30 backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience Secure Identity Verification?
            </h2>
            <p className="text-xl text-gray-300 max-w-[800px] mx-auto mb-8">
              Join AadharX today and take control of your digital identity with blockchain-powered security and
              zero-knowledge privacy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-none text-gray-300 bg-transparent hover:bg-gray-800 hover:text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/40 bg-gray-950/80 backdrop-blur-md">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="h-8 w-8 text-blue-500" />
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                  AadharX
                </span>
              </div>
              <p className="text-gray-400">
                Decentralized identity verification system built with blockchain and zero-knowledge proofs.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#modules" className="text-gray-400 hover:text-white transition-colors">
                    Modules
                  </Link>
                </li>
                <li>
                  <Link href="#security" className="text-gray-400 hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="text-gray-400 hover:text-white transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800/40 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} AadharX. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
