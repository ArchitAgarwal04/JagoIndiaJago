const AIAssistant = () => {
  return (
    <section id="aiAssistant" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-neutral-100 rounded-2xl p-6 shadow-xl">
            <div className="bg-white rounded-xl overflow-hidden">
              <div className="bg-neutral-900 p-4 flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">AI Health Assistant</h3>
                  <p className="text-green-500 text-sm">Online</p>
                </div>
              </div>

              <div className="p-4 h-96 overflow-y-auto space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div className="bg-neutral-100 rounded-lg p-3 max-w-xs">
                    <p>Hello! How can I help you with your nutrition goals today?</p>
                  </div>
                </div>

                <div className="flex items-start justify-end space-x-3">
                  <div className="bg-green-500 text-white rounded-lg p-3 max-w-xs">
                    <p>What's a healthy snack option under 200 calories?</p>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <div className="bg-neutral-100 rounded-lg p-3 max-w-xs">
                    <p>I recommend:</p>
                    <ul className="list-disc ml-4 mt-2">
                      <li>Greek yogurt with berries (150 cal)</li>
                      <li>Apple slices with almond butter (180 cal)</li>
                      <li>Baby carrots with hummus (120 cal)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 border-t">
                <div className="flex space-x-3">
                  <input
                    type="text"
                    placeholder="Ask about nutrition, meals, or products..."
                    className="flex-1 p-2 border rounded-lg focus:outline-none focus:border-green-500"
                  />
                  <button className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-300">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
              Your Personal <span className="text-green-500">AI Health Assistant</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Get instant, personalized nutrition advice and product recommendations from our advanced AI assistant.
            </p>

            <div className="space-y-6">
              {[
                {
                  title: "Personalized Meal Planning",
                  description: "Get customized meal suggestions based on your dietary preferences and goals",
                },
                {
                  title: "Nutritional Guidance",
                  description: "Ask questions about nutrition, ingredients, and healthy alternatives",
                },
                {
                  title: "Smart Recommendations",
                  description: "Receive product alternatives and healthier options based on your preferences",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900">{item.title}</h3>
                    <p className="text-neutral-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AIAssistant

