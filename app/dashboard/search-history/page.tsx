'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { Loader2 } from "lucide-react";

interface SearchHistoryItem {
  id: string;
  barcode: string;
  name: string;
  image?: string;
  timestamp: string;
}

export default function SearchHistory() {
  const [history, setHistory] = useState<SearchHistoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { isLoaded, isSignedIn } = useAuth();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3001/api/history/search-history');
        if (!response.ok) throw new Error('Failed to fetch history');
        const data = await response.json();
        setHistory(data);
      } catch (err) {
        setError('Failed to load search history');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (isLoaded && isSignedIn) {
      fetchHistory();
    }
  }, [isLoaded, isSignedIn]);

  if (!isLoaded || loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 text-red-500 text-center">
        {error}
      </div>
    );
  }

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Search History</h1>
      {history.length === 0 ? (
        <p className="text-center text-gray-500">No search history found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {history.map((item) => (
            <div key={item.id} className="border rounded-lg shadow-sm p-4">
              {item.image && (
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
              )}
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(item.timestamp).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}