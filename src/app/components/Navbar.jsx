import { Bell } from "lucide-react"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navbar() {
  // Get current date in the format: Tuesday, 20 Aug 2024
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  return (
    <header className="h-16 border-b border-[#e9e9e9] flex items-center justify-end px-6 gap-4">
      <div className="flex items-center gap-2 text-[#49546d] bg-white rounded-full px-3 py-1 border border-[#e9e9e9]">
        <div className="w-6 h-6 rounded-full bg-[#007763] flex items-center justify-center">
          <span className="text-white text-xs font-bold">D</span>
        </div>
        <span className="text-sm">{currentDate}</span>
      </div>

      <button className="w-10 h-10 rounded-full flex items-center justify-center border border-[#e9e9e9]">
        <Bell size={18} className="text-[#8a94a9]" />
      </button>

      {/* <Avatar>
        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar> */}
    </header>
  )
}
