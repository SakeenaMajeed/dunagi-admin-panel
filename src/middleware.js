
import { withAuth } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

export default withAuth({
  pages: {
    signIn: "/Auth/Login",
  },
  callbacks: {
    async authorized({ req }) {
      const token = await getToken({ req });
      return !!token;
    },
  },
});

export const config = {
  matcher: [
    "/dashboard",         // protects /dashboard
    "/dashboard/:path*",  // protects /dashboard/anything
  ],
};

