"use client";

import { useState } from "react";
import { Search, User, QrCode } from "lucide-react";
import ProfileDetails from "./profile-details";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleScan = () => {
    console.log("Opening QR code scanner");
  };

  return (
    <nav className="bg-white bg-neutral-900 bg-opacity-10 backdrop-filter border-b border-gray-200 border-opacity-20 p-4 relative z-50">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <form
          onSubmit={handleSearch}
          className="w-full md:w-auto mb-4 md:mb-0 md:mr-4"
        >
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-96 bg-white bg-opacity-20 text-white rounded-l-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <button
              type="button"
              onClick={handleScan}
              className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-r-lg transition duration-300 h-full"
            >
              <QrCode className="h-5 w-5" />
            </button>
          </div>
        </form>
        <button
          onClick={() => setShowProfile(!showProfile)}
          className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full transition duration-300"
        >
          <User />
        </button>
      </div>
      {showProfile && (
          <ProfileDetails onClose={() => setShowProfile(false)} />
      )}
    </nav>
  );
};

export default Navbar;
