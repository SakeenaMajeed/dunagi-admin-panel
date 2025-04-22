export default function Loading() {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-64px)] w-full">
      <div className="relative">
        <div className="h-24 w-24 rounded-full border-t-4 border-b-4 border-[#007763] animate-spin"></div>
        <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-4 border-b-4 border-[#fdd302] animate-spin animate-pulse"></div>
      </div>
    </div>
  )
}
