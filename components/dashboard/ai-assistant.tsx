"use client"

import { useState } from "react"
import { X, User, Send } from "lucide-react"

interface AIAssistantProps {
  onClose: () => void
}

const AIAssistant = ({ onClose }: AIAssistantProps) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-neutral-800 w-full max-w-md rounded-lg shadow-xl overflow-hidden">
        <div className="bg-neutral-900 p-4 flex justify-between items-center">
          <h2 className="text-white text-lg font-semibold">AI Assistant</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs ${message.role === "user" ? "bg-green-600" : "bg-neutral-700"} rounded-lg p-3`}>
                <p className="text-white">{message.content}</p>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="p-4 border-t border-neutral-700">
          <div className="flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-neutral-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="bg-green-600 text-white rounded-lg px-4 py-2 hover:bg-green-700 transition duration-300"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AIAssistant

