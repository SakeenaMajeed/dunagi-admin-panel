import { User, ArrowUp } from "lucide-react"

const statData = [
  {
    value: 100,
    label: "Lessons to date",
    percentage: 100,
    icon: User,
  },
  {
    value: 100,
    label: "Lessons Purchased",
    percentage: 100,
    icon: User,
  },
  {
    value: 100,
    label: "Registered Driving Instructors",
    percentage: 100,
    icon: User,
  },
  {
    value: 100,
    label: "Registered Students",
    percentage: 100,
    icon: User,
  },
]

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statData.map((stat, index) => (
        <div
          key={index}
          className="bg-[#f3f3f3] rounded-xl p-4 flex flex-col justify-between sm:flex-row sm:items-center gap-4"
        >
          <div className="flex items-center gap-4 flex-1">
            <div className="w-12 -mt-16- h-12 rounded-lg  bg-[#007763]/20 flex items-center justify-center shrink-0">
              <stat.icon className="text-[#007763] fill-current" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#2d2d2d]">{stat.value}</h3>
              <p className="text-[#3b4354] text-xs font-bold whitespace-normal break-words">
                {stat.label}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end">
            <div className="flex items-center text-[#fdd302] font-semibold text-sm">
              <ArrowUp size={14} className="mr-0.5" />
              <span className="text-black font-semibold">{stat.percentage}%</span>
            </div>
            <p className="text-[#818285] text-xs">Since last week</p>
          </div>
        </div>
      ))}
    </div>
  )
}
