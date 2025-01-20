import { Check } from "lucide-react"

const plans = [
  {
    name: "Basic",
    price: "₹0",
    features: ["Basic Product Scanner", "Calorie Calculator", "Basic Health Insights"],
    cta: "Get Started Free",
    popular: false,
  },
  {
    name: "Premium",
    price: "₹299",
    features: [
      "Everything in Basic",
      "Advanced AI Assistant",
      "Personalized Meal Plans",
      "Detailed Health Analytics",
      "Priority Customer Support",
    ],
    cta: "Get Premium",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Everything in Premium", "Custom API Integration", "Dedicated Account Manager", "Custom Reporting"],
    cta: "Contact Sales",
    popular: false,
  },
]

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Choose Your <span className="text-green-500">Health Journey</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Select the plan that best fits your wellness goals and dietary needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.popular ? "bg-neutral-900 text-white" : "bg-neutral-50"} rounded-2xl p-8 ${
                plan.popular ? "shadow-xl transform md:-translate-y-4" : "border border-neutral-200"
              } hover:shadow-xl transition duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 right-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-neutral-400">/month</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 ${
                  plan.popular ? "bg-green-500 text-white" : "border-2 border-neutral-900 text-neutral-900"
                } rounded-lg font-semibold hover:bg-opacity-90 transition duration-300`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing

