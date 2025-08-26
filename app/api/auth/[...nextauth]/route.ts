import NextAuth, { NextAuthOptions } from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/db";
import user from "@/lib/models/user";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                await dbConnect();

                const User = await user.findOne({ email: credentials!.email })
                if (!User) {
                    throw new Error("No User Found");
                }

                const isValid = await bcrypt.compare(credentials!.password, User.password);
                if (!isValid) {
                    throw new Error("Invalid Password");
                }

                return { id: User._id.toString(), email: User.email, name: User.name };
            },
        }),
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "auth/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) token.id = user.id;
            return token;
        },
        async session({ session, token }) {
            if (token) {
                (session.user as { id?: string }).id = token.id as string;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };

//This handles the user Sessions and the token setting the users credentials and also granting them authorization
// It uses the email and password for verification
//Uses bcrypt to validate and compare if the users are available
//We then make use of the (session.user as { id?: string }).id = token.id as string ) this extends the types in the user session 