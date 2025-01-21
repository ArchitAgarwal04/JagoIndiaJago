import Navbar from "../../components/dashboard/navbar"
import Sidebar from "../../components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-neutral-900">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-neutral-800">{children}</main>
      </div>
    </div>
  )
}

