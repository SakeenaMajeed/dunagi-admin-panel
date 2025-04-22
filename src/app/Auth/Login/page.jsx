
// "use client";

// import { signIn } from "next-auth/react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// export default function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await signIn("credentials", {
//       redirect: false,
//       email,
//       password,
//     });

//     if (res?.ok) {
//       router.push("/dashboard");
//     } else {
//       alert("Login failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="flex w-full max-w-6xl shadow-lg rounded-lg overflow-hidden bg-white">

//         <div className="hidden md:flex w-1/2 bg-[#014D4E] items-center justify-center p-0.5 relative">
//           <Image
//             src="/loginbg.png"
//             alt="Background Signs"
//             width={700}
//             height={500}
//             className="object-contain absolute left-2 top-10 z-0"
//           />
//           <Image
//             src="/login.png"
//             alt="Admin Illustration"
//             width={400}
//             height={400}
//             className="relative z-10 object-contain"
//           />
//         </div>


//         {/* Right Login Form Side */}
//         <div className="w-full md:w-1/2 p-10">
//           <div className="mb-8">
//             <Image
//               src="/logologin.png"
//               alt="Logo"
//               width={200}
//               height={200}
//               className="mb-4"/>
//             <h2 className="text-3xl font-bold text-gray-800">Hey Admin <span className="ml-1">👋</span></h2>
//             <p className="text-gray-500 mt-2">
//               Please enter username and password below to login to the Admin Panel.
//             </p>
//           </div>
//           <form onSubmit={handleSubmit} className="space-y-5">
//             <div>
//               <label className="block mb-1 text-sm text-gray-600">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
//                 required
//               />
//             </div>
//             <div>
//               <label className="block mb-1 text-sm text-gray-600">Password</label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
//                 required
//               />
//             </div>
//             <div className="flex items-center justify-between text-sm text-gray-500">
//               <label className="flex items-center">
//                 <input type="checkbox" className="mr-2" /> Remember Me
//               </label>
//               <a href="#" className="text-green-700 hover:underline">Forgot Password?</a>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition duration-300"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      router.push("/dashboard");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl shadow-lg rounded-lg overflow-hidden bg-white">
        
        {/* Left Image Side (Hidden on small screens) */}
        <div className="hidden md:flex md:w-1/2 bg-[#014D4E] items-center justify-center relative p-4">
          <Image
            src="/loginbg.png"
            alt="Background Signs"
            width={700}
            height={500}
            className="object-contain absolute left-2 top-10 z-0"
          />
          <Image
            src="/login.png"
            alt="Admin Illustration"
            width={400}
            height={400}
            className="relative z-10 object-contain"
          />
        </div>

        {/* Right Login Form Side */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10">
          <div className="mb-8 text-center md:text-left">
            <Image
              src="/logologin.png"
              alt="Logo"
              width={200}
              height={200}
              className="mx-auto md:mx-0 mb-4"
            />
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Hey Admin <span className="ml-1">👋</span>
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base">
              Please enter username and password below to login to the Admin Panel.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#014D4E]"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus: ring-[#014D4E]"
                required
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500 gap-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember Me
              </label>
              <a href="#" className="text-[#014D4E]  font-semibold hover:underline">Forgot Password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#014D4E]  text-white py-3 rounded-lg hover:bg-[#014D4E] transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

