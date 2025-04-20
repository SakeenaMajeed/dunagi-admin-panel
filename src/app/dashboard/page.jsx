"use client";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
console.log("session", session);
  return (
    <> 
    <button
    onClick={() => signOut({ callbackUrl: "/Auth/Login" })}
    className="bg-red-500 text-white px-4 py-2 rounded"
  >
    Logout
  </button>
    <div className='text-primary font-montserrat_extraBold'>Home</div>
    </>
  )
}
