import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "credentials",
      type: "credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.

      async authorize(credentials, req) {
        const { email, password } = credentials;
        if (
          email === "admin@jutejourney.com" &&
          password === "jjadmin@321"
        ) {
          return true;
        }
        return false;
      },
    }),
  ],

  secret: "aepijfaie39rui3rqi",
};
export default NextAuth(authOptions);
