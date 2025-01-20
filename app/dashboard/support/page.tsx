export default function Support() {
    return (
      <div className="p-6 max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Contact Support</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-300">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full px-3 py-2 bg-neutral-700 border border-neutral-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Send Message
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-white mb-4">FAQs</h2>
          <div className="space-y-4">
            {[
              {
                q: "How do I scan a product?",
                a: "Use the QR code scanner button in the top right of the dashboard to scan product barcodes.",
              },
              {
                q: "What is TIRS?",
                a: "TIRS (Total Indian Rating System) is our proprietary health rating system for food products.",
              },
              {
                q: "How accurate is the calorie calculator?",
                a: "Our calculator provides an estimate based on general formulas. For precise measurements, consult a healthcare professional.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-neutral-700 p-4 rounded-lg">
                <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  