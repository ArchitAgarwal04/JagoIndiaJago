"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

// Dummy product data
const product = {
  id: 1,
  name: "Apple",
  image: "/placeholder.svg?height=200&width=200",
  description: "Fresh, crisp apples from local orchards.",
  nutritionalInfo: {
    calories: 95,
    protein: "0.5g",
    carbs: "25g",
    fat: "0.3g",
    fiber: "4g",
  },
  healthBenefits: ["Rich in antioxidants", "May lower risk of diabetes", "Supports heart health"],
  healthDisadvantages: [
    "Overeating may lead to increased sugar intake.",
    "Pesticide residues can sometimes be present.",
    "Can cause digestive issues in some individuals.",
  ],
}

export default function ProductPage() {
  const params = useParams()
  const category = params.category as string

  return (
    <div className="w-full min-h-screen bg-black text-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center text-gray-400 mb-6">
          <Link href="/dashboard" className="hover:text-white transition duration-300">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link
            href={`/dashboard/category/${category}`}
            className="text-white hover:text-green-400 transition duration-300 capitalize"
          >
            {category.replace("-", " & ")}
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-gray-500" />
          <span className="text-white font-semibold">{product.name}</span>
        </div>

        {/* Product Title */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-8">
          {product.name}
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Image and Description */}
          <div>
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            </div>
            <p className="mt-6 text-lg leading-relaxed">{product.description}</p>
          </div>

          {/* Nutritional Information and Health Benefits */}
          <div className="mt-12 bg-gradient-to-r from-neutral-800 to-black rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-green-500 mb-4">Nutritional Information</h2>
            <ul className="space-y-3">
              <li className="flex justify-between hover:bg-neutral-700 transition duration-200 p-2 rounded-md">
                <span>Calories:</span> <span>{product.nutritionalInfo.calories}</span>
              </li>
              <li className="flex justify-between hover:bg-neutral-700 transition duration-200 p-2 rounded-md">
                <span>Protein:</span> <span>{product.nutritionalInfo.protein}</span>
              </li>
              <li className="flex justify-between hover:bg-neutral-700 transition duration-200 p-2 rounded-md">
                <span>Carbs:</span> <span>{product.nutritionalInfo.carbs}</span>
              </li>
              <li className="flex justify-between hover:bg-neutral-700 transition duration-200 p-2 rounded-md">
                <span>Fat:</span> <span>{product.nutritionalInfo.fat}</span>
              </li>
              <li className="flex justify-between hover:bg-neutral-700 transition duration-200 p-2 rounded-md">
                <span>Fiber:</span> <span>{product.nutritionalInfo.fiber}</span>
              </li>
            </ul>
            <h2 className="text-2xl font-semibold text-green-500 mt-6 mb-4">Health Benefits</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {product.healthBenefits.map((benefit, index) => (
                <li key={index} className="hover:text-green-400 transition duration-200">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Health Disadvantages Section */}
        <div className="mt-12 bg-gradient-to-r from-neutral-800 to-black rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-red-500 mb-4">Health Disadvantages</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {product.healthDisadvantages.map((disadvantage, index) => (
              <li key={index} className="hover:text-red-400 transition duration-200">
                {disadvantage}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
