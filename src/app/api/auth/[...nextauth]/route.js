import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          const res = await fetch("https://dev-api.dunagi.com/auth/admin", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          });

          const response = await res.json();

          if (!res.ok || !response?.data?.user) {
            return null;
          }

          const user = response.data.user;
          const token = response.data.token;
          const role = response.data.role;

          return {
            id: user._id,
            name: user.username,
            email: user.email,
            accessToken: token,
            role: role,
          };
        } catch (err) {
          console.error("Authorize error:", err);
          return null;
        }
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
    
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.accessToken = user.accessToken;
        token.role = user.role;
      }
      return token;
    },

    async session({ session, token }) {

      session.user.id = token.id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.accessToken = token.accessToken;
      session.role = token.role;
     
      return session;
    },
  },

  pages: {
    signIn: "/Auth/Login",
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
