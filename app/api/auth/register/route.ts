import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/db";
import user from "@/lib/models/user";

export async function POST(req: Request) {
    try {
        await dbConnect();

        const { name, email, password } = await req.json();

        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exist" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const User = await user.create({ name, email, password: hashedPassword });
        
        return NextResponse.json({ message: "User Registered", User });
    } catch (error) {
        return NextResponse.json({error: "Something went wrong"}, {status: 500})
    }
}
//This is the User registration API used for storing and recording the user's data