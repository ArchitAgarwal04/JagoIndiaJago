"use client"

import { useState } from "react"
import { ArrowRight, User } from "lucide-react"

const AIAssistant = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! How can I help you with your nutrition goals today?" },
  ])
  const [input, setInput] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }])
      // Here you would typically send the input to your AI service and get a response
      // For now, we'll just echo the user's input
      setTimeout(() => {
        setMessages((prev) => [...prev, { role: "assistant", content: `You said: ${input}` }])
      }, 1000)
      setInput("")
    }
  }

  return (
    <div className="bg-neutral-800 rounded-xl overflow-hidden shadow-xl">
      <div className="bg-neutral-900 p-4 flex items-center space-x-3">
        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
          <ArrowRight className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold">AI Health Assistant</h3>
          <p className="text-green-500 text-sm">Online</p>
        </div>
      </div>

      <div className="p-4 h-96 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex items-start space-x-3 ${message.role === "user" ? "justify-end" : ""}`}>
            {message.role === "assistant" && (
              <div className="w-8 h-8 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
            )}
            <div
              className={`rounded-lg p-3 max-w-xs ${message.role === "user" ? "bg-green-500 text-white" : "bg-neutral-700 text-white"}`}
            >
              <p>{message.content}</p>
            </div>
            {message.role === "user" && (
              <div className="w-8 h-8 bg-blue-500 rounded-full flex-shrink-0 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-700">
        <div className="flex space-x-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about nutrition, meals, or products..."
            className="flex-1 p-2 bg-neutral-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  )
}

export default AIAssistant

