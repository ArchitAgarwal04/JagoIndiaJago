'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // If input is numeric and 8-13 digits, treat as barcode
      if (/^\d{8,13}$/.test(searchQuery.trim())) {
        router.push(`/dashboard/product/${searchQuery.trim()}`);
      } else {
        router.push(`/dashboard/search?q=${encodeURIComponent(searchQuery.trim())}`);
      }
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-xl">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search products or enter barcode..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white bg-opacity-20 text-white rounded-l-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-r-lg"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;