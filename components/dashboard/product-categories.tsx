"use client"

import Link from "next/link"
import { Apple, Milk, CroissantIcon as Bread, Cookie, Coffee, SprayCanIcon as Spray } from "lucide-react"

const categories = [
  { name: "Fruits & Vegetables", image: Apple },
  { name: "Dairy & Eggs", image: Milk },
  { name: "Bakery", image: Bread },
  { name: "Snacks", image: Cookie },
  { name: "Beverages", image: Coffee },
  { name: "Personal Care", image: Spray },
]

const ProductCategories = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          href={`/dashboard/category/${category.name.toLowerCase().replace(/ & /g, "-")}`}
          className="bg-white bg-opacity-20 p-6 rounded-xl hover:bg-opacity-30 transition duration-300 flex flex-col items-center justify-center text-center"
        >
          <category.image className="w-12 h-12 text-green-400 mb-4" />
          <h3 className="text-white font-medium">{category.name}</h3>
        </Link>
      ))}
    </div>
  )
}

export default ProductCategories

