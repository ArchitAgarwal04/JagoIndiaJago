"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav id="navbar" className="fixed w-full z-50 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              JagoIndiaJago
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#hero" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="#features" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Features
              </Link>
              <Link href="#productScanner" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Scanner
              </Link>
              <Link href="#aiAssistant" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                AI Assistant
              </Link>
              <Link href="#calorieCalculator" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Calculator
              </Link>
              <Link href="#pricing" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </Link>
              <Link href="#contact" className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
              <Link href="#" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-neutral-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#hero" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">
              Home
            </Link>
            <Link href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">
              Features
            </Link>
            <Link
              href="#productScanner"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
            >
              Scanner
            </Link>
            <Link href="#aiAssistant" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">
              AI Assistant
            </Link>
            <Link
              href="#calorieCalculator"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700"
            >
              Calculator
            </Link>
            <Link href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">
              Pricing
            </Link>
            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-700">
              Contact
            </Link>
            <Link
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium bg-green-600 hover:bg-green-700 text-center"
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

