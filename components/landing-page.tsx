'use client'

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { LogIn } from 'lucide-react';
import { SignInButton, UserButton, useUser } from '@clerk/nextjs';

const LandingPage = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-green-900 text-white">
      <header className="p-5">
        <nav className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="text-2xl font-bold">JagoIndiaJago</div>
          <div className="space-x-4">
          {user && (
          <Button asChild variant={'link'}>
            <Link href={'/dashboard'} className='text-lg'>
              Dashboard
            </Link>
          </Button>
        )}
        {user && <UserButton/>}
        {!user && (
          <Button
            variant={'secondary'}
            className="flex items-center gap-2 font-bold text-foreground">
            <LogIn className="h-5 w-5" />
            <SignInButton forceRedirectUrl="/dashboard" mode='modal' />
          </Button>
        )}
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-bold leading-tight">
            Make <span className="text-green-500">Smarter</span>, Healthier Choices
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            JagoIndiaJago is your AI-powered companion for making informed decisions about food, groceries, and personal
            care products in India.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/sign-up"
              className="bg-green-600 hover:bg-green-700 px-8 py-3 rounded-lg font-semibold inline-flex items-center animate-pulse"
            >
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="#features"
              className="border border-white hover:bg-white hover:text-neutral-900 px-8 py-3 rounded-lg font-semibold transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div id="features" className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Smart Product Scanner", description: "Scan barcodes for instant nutritional insights" },
              { title: "AI Health Assistant", description: "Get personalized nutrition advice and recommendations" },
              { title: "Calorie Calculator", description: "Track your daily intake and set health goals" },
              { title: "Product Categories", description: "Browse and compare products across categories" },
              { title: "Health Ratings", description: "Make informed choices with our proprietary TIRS system" },
              { title: "Educational Resources", description: "Learn about nutrition and healthy living" },
            ].map((feature, index) => (
              <div key={index} className="bg-neutral-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-neutral-900 py-8 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
          <p>&copy; 2024 JagoIndiaJago. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage

