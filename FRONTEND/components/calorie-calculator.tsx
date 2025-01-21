'use client'
import { useState } from "react"

const CalorieCalculator = () => {
  const [calories, setCalories] = useState(2150)

  return (
    <section id="calorieCalculator" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your <span className="text-green-500">Daily Calories</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get personalized calorie recommendations and track your nutrition goals with our smart calculator
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="bg-neutral-800 rounded-2xl p-6 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Age</label>
                  <input
                    type="number"
                    className="w-full bg-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Gender</label>
                  <select className="w-full bg-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    className="w-full bg-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Height (cm)</label>
                  <input
                    type="number"
                    className="w-full bg-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Activity Level</label>
                <select className="w-full bg-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Sedentary (office job)</option>
                  <option>Light Exercise (1-2 days/week)</option>
                  <option>Moderate Exercise (3-5 days/week)</option>
                  <option>Heavy Exercise (6-7 days/week)</option>
                  <option>Athlete (2x per day)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Goal</label>
                <select className="w-full bg-neutral-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>Weight Loss</option>
                  <option>Maintenance</option>
                  <option>Weight Gain</option>
                  <option>Muscle Building</option>
                </select>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-neutral-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Your Daily Calories</h3>
              <div className="text-4xl font-bold text-green-500 mb-4">{calories} kcal</div>

              <div className="space-y-4">
                {[
                  { name: "Proteins", amount: "107g", percentage: 25 },
                  { name: "Carbohydrates", amount: "269g", percentage: 50 },
                  { name: "Fats", amount: "48g", percentage: 25 },
                ].map((macro, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span>{macro.name}</span>
                      <span>
                        {macro.amount} ({macro.percentage}%)
                      </span>
                    </div>
                    <div className="w-full bg-neutral-700 rounded-full h-2">
                      <div
                        className={`bg-${index === 0 ? "green" : index === 1 ? "blue" : "yellow"}-500 h-2 rounded-full`}
                        style={{ width: `${macro.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-neutral-800 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
              <ul className="space-y-3">
                {[
                  "Spread your meals across 4-6 servings",
                  "Include protein with every meal",
                  "Stay hydrated with 8-10 glasses of water",
                ].map((tip, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CalorieCalculator

