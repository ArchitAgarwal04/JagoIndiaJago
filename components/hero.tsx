'use client'
import Link from "next/link";
import { Button } from "./ui/button";
import { LogIn } from "lucide-react";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";

const Hero = () => {
  const { user } = useUser();

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-green-900 text-white pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <nav className="flex justify-between items-center mb-16">
          <div className="text-2xl font-bold">JagoIndiaJago</div>
          <div className="space-x-4">
            {user && (
              <Button asChild variant={"link"}>
                <Link href={"/dashboard"} className="text-xl font-semibold text-yellow-100 hover:underline">
                  Dashboard
                </Link>
              </Button>
            )}
            {user && <UserButton
              appearance={{
                elements: {
                  userButtonBox:
                    "w-12 h-12 rounded-full border-2 border-blue-600 shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center bg-white text-blue-600 hover:bg-blue-100"
                }
              }}
            />
            }
            {!user && (
              <SignInButton mode="modal" forceRedirectUrl="/dashboard">
                <Button
                  className="text-white hover:text-green-500 transition-colors py-6 text-xl"
                >
                  <LogIn className="h-5 w-5" />
                  Sign In
                </Button>
              </SignInButton>
            )}
          </div>
        </nav>
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-10rem)]">
          <div className="space-y-6 animate-fade-in-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Make <span className="text-green-500">Smarter</span>,
              <br />
              Healthier Choices
            </h1>
            <p className="text-xl text-gray-300">
              Your AI-powered companion for making informed decisions about
              food, groceries, and personal care products.
            </p>
            <div className="flex flex-wrap gap-4">
            {user ? (
            <Button asChild>
              <Button className='bg-green-600 hover:bg-green-700 px-8 py-6 rounded-lg font-semibold inline-flex items-center'>
                Dashboard
              </Button>
            </Button>
          ) : (
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
            <Button className='bg-green-600 hover:bg-green-700 px-8 py-6 rounded-lg font-semibold inline-flex items-center'>
                Get Started
            </Button>
            </SignInButton>
          )}
              
              <Link
                href="#"
                className="border border-white hover:bg-white hover:text-neutral-900 px-8 py-3 rounded-lg font-semibold transition duration-300"
              >
                Watch Demo
              </Link>
            </div>
            <div className="pt-6 flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <span className="text-sm">5K+</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                  <span className="text-sm">⭐</span>
                </div>
              </div>
              <p className="text-gray-300">
                Trusted by 5000+ users with 4.8/5 rating
              </p>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-2xl p-8">
              <div className="bg-neutral-800/80 backdrop-blur-sm rounded-xl p-6 shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Scan & Learn</h3>
                    <p className="text-gray-400">Instant nutritional insights</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-neutral-700/50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span>Calories</span>
                      <span className="text-green-500">120 kcal</span>
                    </div>
                  </div>
                  <div className="bg-neutral-700/50 p-4 rounded-lg">
                    <div className="flex justify-between">
                      <span>Health Score</span>
                      <span className="text-green-500">8.5/10</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-500/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
