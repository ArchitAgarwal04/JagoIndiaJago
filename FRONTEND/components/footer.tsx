import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer id="footer" className="bg-neutral-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-white text-2xl font-bold mb-6">JagoIndiaJago</h3>
            <p className="text-neutral-400 mb-6">
              Making healthier choices simpler for every Indian. Your personal guide to nutrition and wellness.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-neutral-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="text-neutral-400 mb-4">Stay updated with our latest features and health tips.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-neutral-800 rounded-l-lg px-4 py-2 text-white border border-neutral-700 focus:outline-none focus:border-green-500"
              />
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded-r-lg hover:bg-green-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <p className="text-neutral-400 text-center">&copy; 2024 JagoIndiaJago. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

