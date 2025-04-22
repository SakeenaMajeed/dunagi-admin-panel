"use client"

import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext
} from "react"

// Dropdown context
const DropdownContext = createContext(undefined)

function useDropdown() {
  const context = useContext(DropdownContext)
  if (!context) {
    throw new Error("Dropdown components must be used within a DropdownMenu")
  }
  return context
}

// Main DropdownMenu component
export function DropdownMenu({ children }) {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div className="relative inline-block" ref={dropdownRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

// Dropdown Trigger
export function DropdownMenuTrigger({ children, className = "" }) {
  const { open, setOpen } = useDropdown()

  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className={`inline-flex items-center ${className}`}
      aria-expanded={open}
      aria-haspopup="true"
    >
      {children}
    </button>
  )
}

// Dropdown Content
export function DropdownMenuContent({ children, className = "", align = "left" }) {
  const { open } = useDropdown()

  if (!open) return null

  return (
    <div
      className={`absolute z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
        align === "right" ? "right-0" : "left-0"
      } ${className}`}
      role="menu"
      aria-orientation="vertical"
      tabIndex={-1}
    >
      <div className="py-1">{children}</div>
    </div>
  )
}

// Dropdown Item
export function DropdownMenuItem({ children, onClick, className = "" }) {
  const { setOpen } = useDropdown()

  const handleClick = () => {
    if (onClick) onClick()
    setOpen(false)
  }

  return (
    <button
      className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 ${className}`}
      role="menuitem"
      tabIndex={-1}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}
