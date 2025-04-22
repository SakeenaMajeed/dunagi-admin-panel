"use client"

import { BookOpen, ExternalLink, LayoutDashboard, Users, Users2, Wallet } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Instructors", icon: Users2, href: "/instructors" },
  { name: "Students", icon: Users, href: "/students" },
  { name: "Lessons", icon: BookOpen, href: "/lessons" },
  { name: "Users", icon: Users, href: "/users" },
  { name: "Finance", icon: Wallet, href: "/finance" },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="w-[232px] bg-white border border-[#dddddd] rounded-2xl shadow-md m-2 flex flex-col h-[calc(100vh-1rem)] sticky top-2">
      {/* Navigation */}
      <nav className="flex-1 pt-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 group ${isActive
                      ? "bg-[#007763] text-white"
                      : "text-[#555555] hover:bg-[#004d3f] hover:text-white"
                    }`}
                >
                  <item.icon size={18} className="text-[#004d3f] group-hover:text-white" />
                  <span className="font-medium text-sm group-hover:text-white">{item.name}</span>
                </Link>
              </li>

            )
          })}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 mt-auto">
        <button
          onClick={() => {
            // Example logout handler — customize as needed
            console.log("Logging out...")
            window.location.href = "/login" // ya router.push("/login") agar Next.js router use kar rahi ho
          }}
          className="flex items-center justify-between w-full px-4 py-3 rounded-md text-white bg-[#007763] hover:bg-[#004d3f] transition-all duration-200"
        >
          <span className="font-medium text-sm">Logout</span>
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  )
}
