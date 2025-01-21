const ProductScanner = () => {
    return (
      <section id="productScanner" className="py-20 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Scan Products for
                <span className="text-green-500"> Instant Health Insights</span>
              </h2>
              <p className="text-lg text-gray-300">
                Simply scan any product's barcode to get detailed nutritional information, health ratings, and
                personalized recommendations instantly.
              </p>
  
              <div className="space-y-4">
                {[
                  {
                    title: "Nutritional Values",
                    description: "Get detailed breakdown of calories, proteins, carbs, and fats",
                  },
                  {
                    title: "Allergen Warnings",
                    description: "Instant alerts for common allergens and dietary restrictions",
                  },
                  { title: "Health Ratings", description: "Personalized health impact scores based on your profile" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="relative">
              <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 rounded-2xl p-6">
                <div className="bg-neutral-800 rounded-xl p-6 shadow-2xl">
                  <div className="aspect-w-9 aspect-h-16 bg-neutral-900 rounded-lg mb-6">
                    <div className="flex items-center justify-center">
                      <div className="w-48 h-48 border-2 border-green-500 relative rounded-lg">
                        <div className="absolute inset-0 flex items-center">
                          <div className="h-0.5 w-full bg-green-500 animate-scan"></div>
                        </div>
                      </div>
                    </div>
                  </div>
  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Scanning...</span>
                      <span className="text-green-500">67%</span>
                    </div>
                    <div className="w-full bg-neutral-700 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "67%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default ProductScanner
  
  