"use client"

import { useState } from "react"
import Link from "next/link"

const categories = [
  { name: "Fruits & Vegetables", image: "/placeholder.svg?height=100&width=100" },
  { name: "Dairy & Eggs", image: "/placeholder.svg?height=100&width=100" },
  { name: "Bakery", image: "/placeholder.svg?height=100&width=100" },
  { name: "Snacks", image: "/placeholder.svg?height=100&width=100" },
  { name: "Beverages", image: "/placeholder.svg?height=100&width=100" },
  { name: "Personal Care", image: "/placeholder.svg?height=100&width=100" },
]

const ProductCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="bg-neutral-800 rounded-xl p-4 shadow-xl">
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`bg-neutral-700 p-4 rounded-lg cursor-pointer transition duration-300 ${
              selectedCategory === category.name ? "ring-2 ring-green-500" : ""
            }`}
            onClick={() => setSelectedCategory(category.name)}
          >
            <img
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              className="w-full h-24 object-cover rounded-md mb-2"
            />
            <h3 className="text-white font-medium text-center text-sm">{category.name}</h3>
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div className="mt-4 p-4 bg-neutral-700 rounded-lg">
          <h3 className="text-lg font-semibold text-white mb-2">Products in {selectedCategory}</h3>
          <p className="text-gray-400 text-sm">
            Here you would display a list or grid of products for the selected category. For now, this is a placeholder.
            You can implement the product listing functionality later.
          </p>
        </div>
      )}
    </div>
  )
}

export default ProductCategories

