import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";
import db from "./db";

const authOptions = {
    adapter: PrismaAdapter(db),
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "jsmith" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                try {
                    // Check if user credentials are provided
                    if (!credentials?.email || !credentials?.password) {
                        console.log("Email or password is missing");
                        return null;
                    }
                    // Find user by email
                    const existingUser = await db.user.findUnique({
                        where: { email: credentials.email },
                    });
                    if (!existingUser) {
                        console.log("User not found");
                        return null;
                    }
                    // Compare passwords
                    const passwordMatch = await compare(
                        credentials.password, 
                        existingUser.hashedPassword
                    );
                    // If passwords match, return user
                    if (passwordMatch) {
                        return existingUser;
                    } else {
                        console.log("Incorrect password");
                        return null;
                    }
                } catch (error) {
                    console.error("Authentication error:", error);
                    return null;
                }
                // const user = {
                //     id: existingUser.id,
                //     name: existingUser.name,
                //     email: existingUser.email,
                // };
                // console.log(user);
                // return user;
            }
        })
    ]
    // callbacks: {
    //     async session({ session, user, token }) {
    //         return session;
    //     }
    //     async jwt({ token, user, account, profile, isNewUser }) {
    //         return token;
    //     }

    // }
};

export default authOptions;
