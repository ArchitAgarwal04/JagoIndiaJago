"use client"

import { useState } from "react"
import { Search, User, QrCode } from "lucide-react"
import ProfileDetails from "./profile-details"

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [showProfile, setShowProfile] = useState(false)

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
      <div className="flex flex-col md:flex-row items-center justify-between">
        <form onSubmit={handleSearch} className="w-full md:w-auto mb-4 md:mb-0 md:mr-4">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-96 lg:w-[400px] bg-neutral-800 text-white rounded-l-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button
              type="button"
              onClick={handleScan}
              className="bg-green-600 text-white px-4 py-3 rounded-r-lg hover:bg-green-700 transition duration-300 h-full flex items-center"
            >
              <QrCode className="h-6 w-6" />
            </button>
          </div>
        </form>
        <button
          onClick={() => setShowProfile(true)}
          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition duration-300"
        >
          <User />
        </button>
      </div>
      {showProfile && <ProfileDetails onClose={() => setShowProfile(false)} />}
    </nav>
  )
}

export default Navbar
