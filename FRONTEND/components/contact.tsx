import { Mail, Phone, MapPin } from "lucide-react"

const Contact = () => {
  return (
    <section id="contact" className="bg-neutral-900 py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-neutral-300 mb-8">
                Have questions about JagoIndiaJago? We're here to help you make smarter, healthier choices.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-neutral-800 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-neutral-400">support@jagoindiajagoapp.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-neutral-800 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Phone</h3>
                    <p className="text-neutral-400">+91 1800-123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-neutral-800 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-neutral-400">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-neutral-800 rounded-2xl p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-neutral-300 mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-neutral-700 rounded-lg px-4 py-3 text-white border border-neutral-600 focus:border-green-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-neutral-700 rounded-lg px-4 py-3 text-white border border-neutral-600 focus:border-green-500 focus:outline-none"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 mb-2" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full bg-neutral-700 rounded-lg px-4 py-3 text-white border border-neutral-600 focus:border-green-500 focus:outline-none"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 mb-2" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-neutral-700 rounded-lg px-4 py-3 text-white border border-neutral-600 focus:border-green-500 focus:outline-none"
                    placeholder="Your message"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white rounded-lg px-6 py-3 font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

