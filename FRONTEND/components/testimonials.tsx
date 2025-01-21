'use client'
import { useState } from "react"

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Lost 15kg in 6 months",
    content:
      "The AI recommendations and barcode scanner have completely changed how I shop for groceries. Making healthier choices has never been easier!",
  },
  {
    name: "Priya Patel",
    role: "Fitness Enthusiast",
    content:
      "The calorie calculator and meal recommendations have helped me maintain my fitness goals. Love the personalized approach!",
  },
  {
    name: "Amit Kumar",
    role: "Health Conscious Parent",
    content:
      "Making healthy choices for my family is so much easier now. The allergen warnings and nutritional insights are invaluable!",
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Are <span className="text-green-500">Saying</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Join thousands of satisfied users who have transformed their health journey with JagoIndiaJago
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-neutral-800 rounded-2xl p-6 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center font-bold text-xl">
                        {testimonial.name[0]}
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300">{testimonial.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-500 p-2 rounded-full hover:bg-green-600 transition duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-500 p-2 rounded-full hover:bg-green-600 transition duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

