"use client"

import { useState } from "react"
import { Search, QrCode } from "lucide-react"

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log("Searching for:", searchQuery)
  }

  const handleScan = () => {
    // Implement QR code scanning functionality here
    console.log("Opening QR code scanner")
  }

  return (
    <nav className="bg-neutral-900 p-4">
      <div className="flex items-center justify-between">
        <form onSubmit={handleSearch} className="flex-1 mr-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-800 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </form>
        <button
          onClick={handleScan}
          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition duration-300"
        >
          <QrCode />
        </button>
      </div>
    </nav>
  )
}

export default Navbar

