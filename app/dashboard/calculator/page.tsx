"use client"

import { useState } from "react"
import { ArrowRight, RotateCcw, Flame, Dumbbell, Apple } from "lucide-react"

export default function Calculator() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("male")
  const [activityLevel, setActivityLevel] = useState("moderate")
  const [result, setResult] = useState<number | null>(null)

  const calculateBMR = () => {
    const w = Number.parseFloat(weight)
    const h = Number.parseFloat(height)
    const a = Number.parseFloat(age)

    if (isNaN(w) || isNaN(h) || isNaN(a)) {
      alert("Please enter valid numbers for weight, height, and age.")
      return
    }

    let bmr
    if (gender === "male") {
      bmr = 88.362 + 13.397 * w + 4.799 * h - 5.677 * a
    } else {
      bmr = 447.593 + 9.247 * w + 3.098 * h - 4.33 * a
    }

    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    }

    const totalCalories = bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers]
    setResult(Math.round(totalCalories))
  }

  const resetCalculator = () => {
    setWeight("")
    setHeight("")
    setAge("")
    setGender("male")
    setActivityLevel("moderate")
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-green-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Calorie Calculator</h1>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Enter Your Details</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  calculateBMR()
                }}
                className="space-y-4"
              >
                <div>
                  <label htmlFor="weight" className="block text-sm font-medium text-gray-300 mb-1">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full px-4 py-2 bg-white bg-opacity-20 border border-gray-300 border-opacity-20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="height" className="block text-sm font-medium text-gray-300 mb-1">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full px-4 py-2 bg-white bg-opacity-20 border border-gray-300 border-opacity-20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="age" className="block text-sm font-medium text-gray-300 mb-1">
                    Age
                  </label>
                  <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full px-4 py-2 bg-white bg-opacity-20 border border-gray-300 border-opacity-20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-300 mb-1">
                    Gender
                  </label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-4 py-2 bg-white bg-opacity-20 border border-gray-300 border-opacity-20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-300 mb-1">
                    Activity Level
                  </label>
                  <select
                    id="activityLevel"
                    value={activityLevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="w-full px-4 py-2 bg-white bg-opacity-20 border border-gray-300 border-opacity-20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
                  >
                    <option value="sedentary">Sedentary</option>
                    <option value="light">Light Exercise</option>
                    <option value="moderate">Moderate Exercise</option>
                    <option value="active">Active</option>
                    <option value="veryActive">Very Active</option>
                  </select>
                </div>
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 flex items-center justify-center"
                  >
                    Calculate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  {result !== null && (
                    <button
                      type="button"
                      onClick={resetCalculator}
                      className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 flex items-center justify-center"
                    >
                      Reset
                      <RotateCcw className="ml-2 h-5 w-5" />
                    </button>
                  )}
                </div>
              </form>
            </div>
            <div className="space-y-6">
              {result !== null ? (
                <div className="bg-white bg-opacity-20 rounded-2xl p-6 shadow-lg">
                  <h2 className="text-2xl font-semibold text-white mb-4">Your Daily Calorie Needs:</h2>
                  <div className="text-6xl font-bold text-green-400 mb-4">{result}</div>
                  <p className="text-gray-300 mb-4">calories per day</p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Flame className="h-6 w-6 text-orange-400" />
                      <span>
                        To lose weight: {result - 500} to {result - 250} calories
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Dumbbell className="h-6 w-6 text-blue-400" />
                      <span>
                        To gain weight: {result + 250} to {result + 500} calories
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-white bg-opacity-20 rounded-2xl p-6 shadow-lg flex items-center justify-center h-72">
                  <p className="text-2xl text-gray-400 text-center">
                    Enter your details and calculate to see your results
                  </p>
                </div>
              )}
              <div className="bg-white bg-opacity-20 rounded-2xl p-6 shadow-lg">
                <h2 className="text-xl font-semibold text-white mb-4">Tips for a Healthy Lifestyle</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <Apple className="h-5 w-5 text-green-400" />
                    <span>Eat a variety of colorful fruits and vegetables</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Dumbbell className="h-5 w-5 text-blue-400" />
                    <span>Engage in regular physical activity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Flame className="h-5 w-5 text-orange-400" />
                    <span>Stay hydrated throughout the day</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

