"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Calculator, HelpCircle, LogOut } from "lucide-react"

const Sidebar = () => {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Calculator", href: "/dashboard/calculator", icon: Calculator },
    { name: "Support", href: "/dashboard/support", icon: HelpCircle },
  ]

  return (
    <div className="bg-neutral-900 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <Link href="/dashboard" className="text-white flex items-center space-x-2 px-4">
        <span className="text-2xl font-bold">JagoIndiaJago</span>
      </Link>

      <nav className="mt-10">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`flex items-center space-x-2 py-2.5 px-4 rounded transition duration-200 ${
              pathname === item.href ? "bg-green-600 text-white" : "text-gray-400 hover:bg-neutral-800"
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      <div className="absolute bottom-0 w-full p-4">
        <Link href="/" className="flex items-center space-x-2 text-gray-400 hover:text-white transition duration-200">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar

