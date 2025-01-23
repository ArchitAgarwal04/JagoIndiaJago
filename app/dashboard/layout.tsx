'use client';

import { usePathname } from "next/navigation";
import Navbar from "../../components/dashboard/navbar";
import Sidebar from "../../components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Regex to check if the path is `/dashboard/category/[category]`
  const isCategoryPage = /^\/dashboard\/category\/.+$/.test(pathname);

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-green-900 ${
        isCategoryPage ? "flex flex-col items-center" : "flex flex-col md:flex-row"
      }`}
    >
      {!isCategoryPage && <Sidebar />}
      <div
        className={`flex-1 flex flex-col overflow-hidden ${
          isCategoryPage ? "w-full max-w-6xl mx-auto p-4" : ""
        }`}
      >
        {!isCategoryPage && <Navbar />}
        <main
          className={`flex-1 overflow-x-hidden overflow-y-auto ${
            isCategoryPage
              ? "bg-neutral-900 bg-opacity-10 backdrop-filter backdrop-blur-lg"
              : "bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
