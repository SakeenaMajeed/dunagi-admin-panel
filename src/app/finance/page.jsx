"use client"

import { ChevronDown, DollarSign, TrendingDown, TrendingUp, Wallet } from "lucide-react"
// import { AreaChart } from "../components/area-chart"
import Dropdown from "../components/dropdown"
import { useState } from "react"
import Sidebar from "../components/sidebar" // Sidebar component import

export default function FinancePage() {
  // const [timeFilter, setTimeFilter] = useState<"daily" | "weekly" | "monthly" | "yearly">("monthly")
  const [timeFilter, setTimeFilter] = useState("monthly") 
  // Dropdown items for time filter
  const timeFilterItems = [
    {
      label: "Daily",
      onClick: () => setTimeFilter("daily"),
    },
    {
      label: "Weekly",
      onClick: () => setTimeFilter("weekly"),
    },
    {
      label: "Monthly",
      onClick: () => setTimeFilter("monthly"),
    },
    {
      label: "Yearly",
      onClick: () => setTimeFilter("yearly"),
    },
  ]

  return (
    <main className="p-6 flex">
      <Sidebar /> {/* Sidebar component added here */}
      
      <div className="flex-1">
        <div className="mb-6">
          <h1 className="text-2xl font-bold mb-2">Finance</h1>
          <p className="text-gray-500">Financial overview and transactions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
            <div className="flex-shrink-0 h-12 w-12 bg-[#e9f5f3] rounded-full flex items-center justify-center mr-4">
              <DollarSign className="h-6 w-6 text-[#007763]" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Revenue</p>
              <h3 className="text-2xl font-bold">$24,500</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
            <div className="flex-shrink-0 h-12 w-12 bg-[#e9f5f3] rounded-full flex items-center justify-center mr-4">
              <Wallet className="h-6 w-6 text-[#007763]" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Expenses</p>
              <h3 className="text-2xl font-bold">$12,300</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
            <div className="flex-shrink-0 h-12 w-12 bg-[#e9f5f3] rounded-full flex items-center justify-center mr-4">
              <TrendingUp className="h-6 w-6 text-[#007763]" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Profit</p>
              <h3 className="text-2xl font-bold">$12,200</h3>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
            <div className="flex-shrink-0 h-12 w-12 bg-[#e9f5f3] rounded-full flex items-center justify-center mr-4">
              <TrendingDown className="h-6 w-6 text-[#007763]" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Pending Payments</p>
              <h3 className="text-2xl font-bold">$3,450</h3>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Revenue Overview</h2>
            <Dropdown
              trigger={
                <div className="flex items-center gap-2 px-4 py-2 rounded-md border border-[#e9e9e9]">
                  <span className="capitalize">{timeFilter}</span>
                  <ChevronDown size={16} />
                </div>
              }
              items={timeFilterItems}
            />
          </div>

          <div className="h-[300px] w-full">
            {/* <AreaChart timeFilter={timeFilter} /> */}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Recent Transactions</h2>
            <button className="bg-[#007763] text-white px-4 py-2 rounded-md">Export</button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Transaction ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {Array.from({ length: 5 }).map((_, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">TRX-{100000 + index}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(Date.now() - index * 86400000).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {
                        ["Lesson Payment", "Subscription Fee", "Instructor Salary", "Equipment Purchase", "Refund"][
                          index % 5
                        ]
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <span className={index % 5 === 4 ? "text-red-600" : "text-green-600"}>
                        {index % 5 === 4 ? "-" : "+"}${(index + 1) * 100}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          index % 3 === 0
                            ? "bg-green-100 text-green-800"
                            : index % 3 === 1
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-blue-100 text-blue-800"
                        }`}
                      >
                        {index % 3 === 0 ? "Completed" : index % 3 === 1 ? "Pending" : "Processing"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}
