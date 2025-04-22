"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { AreaChart } from "../components/area-chart"
import StatCards from "../components/StatCards"

import Sidebar from "../components/sidebar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../components/ui/custom-dropdown"

export default function Dashboard() {
  const [timeFilter, setTimeFilter] = useState("monthly") // type removed

  return (
    <div className="min-h-screen flex bg-[#f3f3f3] rounded-xl overflow-hidden"> {/* Added rounded-xl */}
      <Sidebar />

      <div className="flex-1 bg-white rounded-xl overflow-hidden"> {/* Added rounded-xl */}
        <main className="p-6">
          {/* Top Heading */}
          <h1 className="text-3xl mt-1.5 font-bold mb-6">Dashboard</h1>

          {/* Metrics Cards */}
          <div className="mb-8">
            <StatCards />
          </div>

          {/* Chart Section */}
          <div className="bg-white rounded-lg overflow-hidden"> {/* Added rounded-lg */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Total Earning</h2>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#e9e9e9]">
                  <span className="capitalize">{timeFilter}</span>
                  <ChevronDown size={16} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setTimeFilter("daily")}>Daily</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTimeFilter("weekly")}>Weekly</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTimeFilter("monthly")}>Monthly</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTimeFilter("yearly")}>Yearly</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="h-[300px] w-full">
              <AreaChart timeFilter={timeFilter} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
