"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Star, ChevronRight, Filter } from "lucide-react"

// Dummy data for categories and products
const subCategories = [
  { id: 1, name: "Fresh Fruits" },
  { id: 2, name: "Seasonal Fruits" },
  { id: 3, name: "Exotic Fruits" },
  { id: 4, name: "Organic Fruits" },
]

const products = [
  {
    id: 1,
    name: "Apple",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.5,
    price: "₹50/kg",
    discount: "10% off",
    subCategory: 1,
  },
  {
    id: 2,
    name: "Banana",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.2,
    price: "₹40/dozen",
    discount: "5% off",
    subCategory: 1,
  },
  {
    id: 3,
    name: "Orange",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    price: "₹60/kg",
    discount: "15% off",
    subCategory: 2,
  },
  {
    id: 4,
    name: "Strawberry",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    price: "₹120/box",
    discount: "20% off",
    subCategory: 2,
  },
  {
    id: 5,
    name: "Blueberry",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    price: "₹180/box",
    discount: "8% off",
    subCategory: 3,
  },
  {
    id: 6,
    name: "Mango",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    price: "₹80/kg",
    discount: "12% off",
    subCategory: 3,
  },
]

export default function CategoryPage() {
  const params = useParams()
  const category = params?.category as string
  const [selectedSubCategory, setSelectedSubCategory] = useState<number | null>(null)

  const filteredProducts = selectedSubCategory
    ? products.filter((product) => product.subCategory === selectedSubCategory)
    : products

  return (
    <div className="w-full min-h-screen bg-black text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center text-gray-400 mb-6">
          <Link href="/dashboard" className="hover:text-white transition duration-300">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          {category ? (
            <span className="text-white capitalize">{category.replace("-", " & ")}</span>
          ) : (
            <span className="text-red-500">Invalid category</span>
          )}
        </div>

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white capitalize">{category.replace("-", " & ")}</h1>
          <button className="flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition duration-300">
            <Filter className="h-5 w-5 mr-2" />
            Filter
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Subcategories Sidebar */}
          <div className="w-full md:w-64 mb-6 md:mb-0 md:mr-6 overflow-y-auto max-h-screen bg-gray-800 rounded-lg p-4 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-700 hover:scrollbar-thumb-green-400">
            <h2 className="text-xl font-semibold text-white mb-4">Categories</h2>
            <ul className="space-y-2">
              {subCategories.map((subCategory) => (
                <li key={subCategory.id}>
                  <button
                    onClick={() => setSelectedSubCategory(subCategory.id)}
                    className={`w-full text-left px-6 py-3 rounded-lg transition duration-300 ${
                      selectedSubCategory === subCategory.id
                        ? "bg-gradient-to-r from-green-500 to-green-600 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {subCategory.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Grid */}
          <div className="flex-1 overflow-y-auto max-h-screen scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-700 hover:scrollbar-thumb-green-400">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/dashboard/category/${category}/${product.id}`}
                    className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={`Image of ${product.name}`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {product.discount}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-white font-semibold text-lg mb-3">{product.name}</h3>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-green-500 font-bold">{product.price}</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-gray-300 text-sm">{product.rating}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-gray-300 text-center py-10">No products found in this category.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
