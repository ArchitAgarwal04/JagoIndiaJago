"use client"

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
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/dashboard/category/${category.name.toLowerCase().replace(/ & /g, "-")}`}
          className="bg-neutral-700 p-4 rounded-lg hover:bg-neutral-600 transition duration-300"
        >
          <img
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            className="w-full h-24 object-cover rounded-md mb-2"
          />
          <h3 className="text-white font-medium text-center text-sm">{category.name}</h3>
        </Link>
      ))}
    </div>
  )
}

export default ProductCategories

