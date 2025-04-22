import { User, UserPlus, Users } from "lucide-react"

export default function UsersPage() {
  return (
    <main className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Users</h1>
        <p className="text-gray-500">Manage system users</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
          <div className="flex-shrink-0 h-12 w-12 bg-[#e9f5f3] rounded-full flex items-center justify-center mr-4">
            <Users className="h-6 w-6 text-[#007763]" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Users</p>
            <h3 className="text-2xl font-bold">125</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
          <div className="flex-shrink-0 h-12 w-12 bg-[#e9f5f3] rounded-full flex items-center justify-center mr-4">
            <User className="h-6 w-6 text-[#007763]" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Active Users</p>
            <h3 className="text-2xl font-bold">98</h3>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
          <div className="flex-shrink-0 h-12 w-12 bg-[#e9f5f3] rounded-full flex items-center justify-center mr-4">
            <UserPlus className="h-6 w-6 text-[#007763]" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">New Users (This Month)</p>
            <h3 className="text-2xl font-bold">12</h3>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">User Management</h2>
          <button className="bg-[#007763] text-white px-4 py-2 rounded-md">Add User</button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Login
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
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 bg-[#e9f5f3] rounded-full flex items-center justify-center">
                        <User className="h-5 w-5 text-[#007763]" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">User {index + 1}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">user{index + 1}@example.com</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {["Admin", "Manager", "Instructor", "Staff", "Support"][index % 5]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        index % 2 === 0 ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {index % 2 === 0 ? "Active" : "Inactive"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(Date.now() - index * 86400000).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-[#007763] hover:text-[#006653] mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-800">Delete</button>
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
