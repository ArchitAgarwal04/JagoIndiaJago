"use client"

import { useState } from "react"

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

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-white mb-6">Calorie Calculator</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          calculateBMR()
        }}
        className="space-y-4"
      >
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-gray-300">
            Weight (kg)
          </label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label htmlFor="height" className="block text-sm font-medium text-gray-300">
            Height (cm)
          </label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-300">
            Age
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <label htmlFor="gender" className="block text-sm font-medium text-gray-300">
            Gender
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-300">
            Activity Level
          </label>
          <select
            id="activityLevel"
            value={activityLevel}
            onChange={(e) => setActivityLevel(e.target.value)}
            className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="sedentary">Sedentary</option>
            <option value="light">Light Exercise</option>
            <option value="moderate">Moderate Exercise</option>
            <option value="active">Active</option>
            <option value="veryActive">Very Active</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
        >
          Calculate
        </button>
      </form>
      {result !== null && (
        <div className="mt-6 p-4 bg-neutral-700 rounded-lg">
          <h2 className="text-xl font-semibold text-white mb-2">Your Daily Calorie Needs:</h2>
          <p className="text-2xl font-bold text-green-500">{result} calories</p>
        </div>
      )}
    </div>
  )
}

