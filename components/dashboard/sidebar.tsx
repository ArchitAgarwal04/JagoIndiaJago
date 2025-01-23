"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calculator, HelpCircle, LogOut, MessageSquare, Menu } from "lucide-react"
import { useState } from "react"
import AIAssistant from "./ai-assistant"

const Sidebar = () => {
  const pathname = usePathname()
  const [showAIAssistant, setShowAIAssistant] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Calculator", href: "/dashboard/calculator", icon: Calculator },
    { name: "Support", href: "/dashboard/support", icon: HelpCircle },
  ]

  return (
    <>
      <div className="md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-4 left-4 z-50 bg-green-600 p-2 rounded-md"
        >
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>
      <div
        className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out z-30`}
      >
        <Link href="/dashboard" className="text-white flex items-center space-x-2 px-4">
          <span className="text-2xl font-bold">JagoIndiaJago</span>
        </Link>

        <nav className="mt-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
                pathname === item.href ? "bg-green-600 text-white" : "text-gray-300 hover:bg-white hover:bg-opacity-10"
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
          <button
            onClick={() => setShowAIAssistant(true)}
            className="flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 text-gray-300 hover:bg-white hover:bg-opacity-10 w-full text-left"
          >
            <MessageSquare className="h-5 w-5" />
            <span>AI Assistant</span>
          </button>
        </nav>

        <div className="absolute bottom-0 w-full p-4">
          <Link href="/" className="flex items-center space-x-2 text-gray-300 hover:text-white transition duration-200">
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
      {showAIAssistant && <AIAssistant onClose={() => setShowAIAssistant(false)} />}
    </>
  )
}

export default Sidebar

