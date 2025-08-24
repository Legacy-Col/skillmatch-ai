import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/db";
import user from "@/lib/models/user";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    await dbConnect();

try {
    const { email, password } = await req.json();

    const User = await user.findOne({ email });

    if (!User) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) {
        return NextResponse.json({ error: "Invalid Credentials" }, { status: 401 });
    }

    const token = jwt.sign(
        { id: User._id, email: User.email },
        process.env.NEXTAUTH_SECRET!,
        { expiresIn: "3d" }
    );
    return NextResponse.json({message: "Login Successful", token, User})
} catch (error) {
    return NextResponse.json({error: "Login Failed"}, {status: 500})
}
}

//This async function or POST the the users login data and stores it in our database