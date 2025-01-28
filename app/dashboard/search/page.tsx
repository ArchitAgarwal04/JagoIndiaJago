'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Loader2 } from "lucide-react";

interface Product {
  id: string;
  name: string;
  brand: string;
  image: string;
  nutrients: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      if (!query) return;
      
      setLoading(true);
      try {
        const response = await fetch(`http://localhost:3001/api/products/search?query=${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError('Failed to load products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-white mb-6">
        Search Results for "{query}"
      </h1>
      
      {error && (
        <div className="text-red-500 text-center">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white bg-opacity-10 rounded-lg p-6">
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}
            <h2 className="text-xl font-semibold text-white mb-2">{product.name}</h2>
            <p className="text-gray-400 mb-4">{product.brand}</p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Calories: {product.nutrients.calories}kcal</p>
              <p>Protein: {product.nutrients.protein}g</p>
              <p>Carbs: {product.nutrients.carbs}g</p>
              <p>Fat: {product.nutrients.fat}g</p>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && !loading && !error && (
        <div className="text-center text-gray-400">
          No products found
        </div>
      )}
    </div>
  );
}