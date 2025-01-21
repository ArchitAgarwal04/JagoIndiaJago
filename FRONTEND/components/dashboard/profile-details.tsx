import { X, User, Calendar, Star, Target } from "lucide-react"

interface ProfileDetailsProps {
  onClose: () => void
}

const ProfileDetails = ({ onClose }: ProfileDetailsProps) => {
  // This is dummy data. In a real application, you'd fetch this from your backend.
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    joinDate: "January 1, 2024",
    plan: "Premium",
    healthGoals: ["Weight Loss", "Improve Nutrition"],
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-neutral-800 w-full max-w-md rounded-lg shadow-xl overflow-hidden">
        <div className="bg-neutral-900 p-4 flex justify-between items-center">
          <h2 className="text-white text-lg font-semibold">Profile Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-green-600 rounded-full p-4">
              <User className="h-16 w-16 text-white" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white">{user.name}</h3>
              <p className="text-gray-400">{user.email}</p>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Calendar className="h-5 w-5" />
              <span>Joined {user.joinDate}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <Star className="h-5 w-5 text-yellow-500" />
              <span>{user.plan} Plan</span>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Target className="h-5 w-5 mr-2" />
                Health Goals
              </h4>
              <ul className="list-disc list-inside text-gray-300">
                {user.healthGoals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-neutral-900 p-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails

