import { BookOpen, Calendar } from "lucide-react"

export default function LessonsPage() {
  return (
    <main className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Lessons</h1>
        <p className="text-gray-500">Manage driving lessons</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Upcoming Lessons</h2>
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="flex items-start p-4 border rounded-lg">
                <div className="flex-shrink-0 h-10 w-10 bg-[#e9f5f3] rounded-full flex items-center justify-center mr-4">
                  <Calendar className="h-5 w-5 text-[#007763]" />
                </div>
                <div>
                  <h3 className="font-medium">Driving Lesson {index + 1}</h3>
                  <p className="text-sm text-gray-500">Student: Student {index + 1}</p>
                  <p className="text-sm text-gray-500">Instructor: Instructor {index + 1}</p>
                  <p className="text-sm text-gray-500">Date: {new Date().toLocaleDateString()}</p>
                  <p className="text-sm text-gray-500">
                    Time: {index + 9}:00 AM - {index + 10}:00 AM
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Lesson Types</h2>
          <div className="space-y-4">
            {["Basic Driving", "Highway Driving", "Parallel Parking", "Night Driving"].map((type, index) => (
              <div key={index} className="flex items-start p-4 border rounded-lg">
                <div className="flex-shrink-0 h-10 w-10 bg-[#e9f5f3] rounded-full flex items-center justify-center mr-4">
                  <BookOpen className="h-5 w-5 text-[#007763]" />
                </div>
                <div>
                  <h3 className="font-medium">{type}</h3>
                  <p className="text-sm text-gray-500">Duration: {index + 1} hour(s)</p>
                  <p className="text-sm text-gray-500">Price: ${(index + 1) * 50}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Lesson Schedule</h2>
          <button className="bg-[#007763] text-white px-4 py-2 rounded-md">Add Lesson</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Lesson
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instructor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {Array.from({ length: 5 }).map((_, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">Driving Lesson {index + 1}</div>
                    <div className="text-sm text-gray-500">
                      {["Basic", "Highway", "Parking", "Night", "Advanced"][index % 5]} Training
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Student {index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Instructor {index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date().toLocaleDateString()}, {index + 9}:00 AM
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
                      {index % 3 === 0 ? "Completed" : index % 3 === 1 ? "Scheduled" : "In Progress"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-[#007763] hover:text-[#006653] mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Cancel</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}
