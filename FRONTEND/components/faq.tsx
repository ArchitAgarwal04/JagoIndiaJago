'use client'
import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "How does the product scanner work?",
    answer:
      "Our product scanner uses your device's camera to scan barcodes. Once scanned, it retrieves detailed nutritional information and health ratings from our extensive database, providing you with instant insights about the product.",
  },
  {
    question: "Is the AI Health Assistant available 24/7?",
    answer:
      "Yes, our AI Health Assistant is available 24/7 to answer your nutrition-related questions, provide meal suggestions, and offer personalized health advice based on your profile and goals.",
  },
  {
    question: "How accurate is the calorie calculator?",
    answer:
      "Our calorie calculator uses scientifically validated formulas to estimate your daily calorie needs. While it provides a good estimate, individual needs may vary. For the most accurate assessment, consult with a healthcare professional.",
  },
  {
    question: "Can I use JagoIndiaJago if I have dietary restrictions or allergies?",
    answer:
      "You can input your dietary restrictions and allergies in your profile, and our AI will take these into account when providing recommendations. Our product scanner also highlights allergens in scanned products.",
  },
  {
    question: "How often is the product database updated?",
    answer:
      "We update our product database regularly to ensure you have the most current information. New products are added weekly, and existing product information is verified and updated monthly.",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-neutral-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-neutral-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md">
              <button
                className="flex justify-between items-center w-full p-4 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-neutral-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-green-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-green-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4">
                  <p className="text-neutral-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

