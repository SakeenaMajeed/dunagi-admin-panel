import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session?.accessToken) {
    redirect("/dashboard");
  } else {
    redirect("/Auth/Login");
  }
}
