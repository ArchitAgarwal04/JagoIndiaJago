import type { Metadata } from "next"
import { Inter } from "next/font/google"
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import './globals.css'

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "JagoIndiaJago - Your Health Companion",
  description: "Make smarter, healthier choices with JagoIndiaJago, your AI-powered nutrition guide.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>          
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
