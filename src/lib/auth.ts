import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

// export const { handlers, signIn, signOut, auth } = NextAuth({
export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: async (credentials) => {
        //console.log(credentials);  //{email: 'rezamohammadi7979@gmail.com',password: '123456789',callbackUrl: '/dashboard',csrfToken: 'fb750923b503d589519382effcf5fc6e37da6e301057c3f7e1803d758119f206'}
        if (credentials.email && credentials.password) {
          if (
            credentials.email === "rezamohammadi7979@gmail.com" &&
            credentials.password === "123456789"
          ) {
            return {              //import { auth } from "@/src/lib/auth" -SC-> const session = await auth() --SC-> {user: {name: "reza"}, expires: '2025-03-05T19:13:10.907Z'}  -> it does not access in CC
              name: "reza",       // cc -> import { useSession } from "next-auth/react"  --> const { data: session } = useSession() -->  {user: {name: "reza"}, expires: '2025-03-05T19:13:10.907Z'} ->* +provider
              token: "123333333",
            };
          } else {
            return null;
          }
        }
        return null;
      },
    }),
  ],
});
