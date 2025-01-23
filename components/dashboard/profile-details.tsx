import { useState } from "react"
import { X, User, Calendar, Star, Target, Mail, Phone, MapPin, Edit } from "lucide-react"
import ProfileEdit from "./profile-edit"

interface ProfileDetailsProps {
  onClose: () => void
}

const ProfileDetails = ({ onClose }: ProfileDetailsProps) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    address: "Mumbai, India",
    joinDate: "January 1, 2024",
    plan: "Premium",
    healthGoals: ["Weight Loss", "Improve Nutrition"],
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleSave = (updatedUserData: any) => {
    setUser(updatedUserData)
    setIsEditing(false)
  }

  if (isEditing) {
    return <ProfileEdit onClose={() => setIsEditing(false)} onSave={handleSave} userData={user} />
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999]"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div
        className="relative bg-neutral-800 w-full max-w-md rounded-lg shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-neutral-900 p-4 flex justify-between items-center border-b border-neutral-700">
          <h2 className="text-white text-lg font-semibold">Profile Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6 max-h-[calc(100vh-8rem)] overflow-y-auto">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-green-600 rounded-full p-4">
              <User className="h-16 w-16 text-white" />
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">{user.name}</h3>
              <p className="text-gray-400">{user.email}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-500" />
                <span>{user.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-green-500" />
                <span>{user.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-green-500" />
                <span>Joined {user.joinDate}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span>{user.plan} Plan</span>
              </div>
            </div>
            <div className="bg-neutral-700/30 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-3 flex items-center">
                <Target className="h-5 w-5 mr-2 text-green-500" />
                Health Goals
              </h4>
              <ul className="space-y-2 text-gray-300">
                {user.healthGoals.map((goal, index) => (
                  <li key={index} className="flex items-center">
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 mr-2" />
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="sticky bottom-0 bg-neutral-900 p-4 flex justify-between border-t border-neutral-700">
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
          >
            <Edit className="h-4 w-4 mr-2" />
            Edit Profile
          </button>
          <button
            onClick={onClose}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails

