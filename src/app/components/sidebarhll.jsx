// import Link from "next/link"
// import { LayoutDashboard, Users, GraduationCap, BookOpen, User, DollarSign, LogOut } from "lucide-react"

// export default function Sidebar() {
//   return (
//     <div className="w-[232px] bg-white border-r border-[#e9e9e9] flex flex-col">
//       <div className="p-4 border-b border-[#e9e9e9]">
//         <Link href="/" className="flex items-center gap-2">
//           <div className="w-10 h-10 rounded-full bg-[#007763] flex items-center justify-center">
//             <span className="text-white font-bold">D</span>
//           </div>
//           <span className="text-[#007763] font-bold text-xl">Dunagi</span>
//         </Link>
//       </div>

//       <nav className="flex-1 py-4">
//         <ul className="space-y-1">
//           <li>
//             <Link href="#" className="flex items-center gap-3 px-4 py-2 bg-[#007763] text-white">
//               <LayoutDashboard size={18} />
//               <span>Dashboard</span>
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="flex items-center gap-3 px-4 py-2 text-[#8a94a9] hover:bg-gray-100">
//               <Users size={18} />
//               <span>Instructors</span>
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="flex items-center gap-3 px-4 py-2 text-[#8a94a9] hover:bg-gray-100">
//               <GraduationCap size={18} />
//               <span>Students</span>
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="flex items-center gap-3 px-4 py-2 text-[#8a94a9] hover:bg-gray-100">
//               <BookOpen size={18} />
//               <span>Lessons</span>
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="flex items-center gap-3 px-4 py-2 text-[#8a94a9] hover:bg-gray-100">
//               <User size={18} />
//               <span>Users</span>
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="flex items-center gap-3 px-4 py-2 text-[#8a94a9] hover:bg-gray-100">
//               <DollarSign size={18} />
//               <span>Finance</span>
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       <div className="p-4 mt-auto">
//         <button className="flex items-center gap-2 px-4 py-2 w-full text-[#007763] font-medium border border-[#007763] rounded-md">
//           <LogOut size={18} />
//           <span>Logout</span>
//         </button>
//       </div>
//     </div>
//   )
// }
import { BookOpen, ExternalLink, LayoutDashboard, Users, Users2, Wallet } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/", active: true },
  { name: "Instructors", icon: Users2, href: "/instructors", active: false },
  { name: "Students", icon: Users, href: "/students", active: false },
  { name: "Lessons", icon: BookOpen, href: "/lessons", active: false },
  { name: "Users", icon: Users, href: "/users", active: false },
  { name: "Finance", icon: Wallet, href: "/finance", active: false },
]

export default function Sidebar() {
  return (
    <div className="w-[232px] bg-[#f3f3f3] border-r border-[#e9e9e9] flex flex-col h-screen sticky top-0">
      {/* Logo */}
      <div className="p-4 mb-6">
        <Image src="/dunagi-logo.svg" alt="Dunagi" width={140} height={40} className="h-10 w-auto" />
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-md ${
                  item.active ? "bg-[#007763] text-white" : "text-[#555555] hover:bg-[#e9e9e9]"
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout */}
      <div className="p-4 mt-auto">
        <button className="flex items-center justify-between w-full px-4 py-3 rounded-md text-[#555555] bg-[#007763] text-white hover:bg-[#006653]">
          <span className="font-medium">Logout</span>
          <ExternalLink size={16} />
        </button>
      </div>
    </div>
  )
}
