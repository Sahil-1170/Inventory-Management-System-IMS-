import db from "@/lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) { 
    try {
        const requestBody = await request.json();
        console.log("Received request body:", requestBody);

        const { name, email ,password } = requestBody;

        // Check if the User Email Already Exists
        const userExist = await db.user.findUnique({
            where: { email },
        }) ;
        if (userExist) {
            return NextResponse.json(
                {
                    message: "User Already Exists",
                    user: null,
                },
                { status: 409 }
            );
        }
        const hashedPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data:{
                name,
                email,
                hashedPassword,
            },
        });
        console.log(newUser);
        return NextResponse.json(newUser);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}
