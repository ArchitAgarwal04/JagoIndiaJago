'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Loader2 } from "lucide-react";

interface ProductDetails {
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
  ingredients: string;
  allergens: string;
  servingSize: string;
}

export default function ProductDetails() {
  const { barcode } = useParams();
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      if (!barcode) return;
      
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:3001/api/products/${barcode}`);
        
        if (!response.ok) {
          throw new Error('Product not found');
        }
        
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError('Failed to load product details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [barcode]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500 text-lg">{error || 'Product not found'}</p>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-10 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {product.image && (
            <div className="relative h-[400px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain rounded-lg"
              />
            </div>
          )}
          <div className="space-y-6">
            <h1 className="text-2xl font-bold text-white">{product.name}</h1>
            <p className="text-gray-400">{product.brand}</p>
            
            <div className="bg-black bg-opacity-20 p-4 rounded-lg">
              <h2 className="text-lg font-semibold text-white mb-2">Nutrition Facts</h2>
              <div className="grid grid-cols-2 gap-2 text-gray-300">
                <p>Calories: {product.nutrients.calories}kcal</p>
                <p>Protein: {product.nutrients.protein}g</p>
                <p>Carbs: {product.nutrients.carbs}g</p>
                <p>Fat: {product.nutrients.fat}g</p>
              </div>
            </div>

            {product.ingredients && (
              <div className="bg-black bg-opacity-20 p-4 rounded-lg">
                <h2 className="text-lg font-semibold text-white mb-2">Ingredients</h2>
                <p className="text-gray-300">{product.ingredients}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}