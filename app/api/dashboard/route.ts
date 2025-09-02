import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import dbConnect from "@/lib/db";
import user from "@/lib/models/user";


export async function GET() {
    await dbConnect();

    const session = await getServerSession();

    if (!session?.user?.email) {
        return NextResponse.json({ error: "Not Authorized" }, { status: 401 });
    }

    const User = await user.findOne({ email: session.user.email });

    if (!User) {
        return NextResponse.json({ error: "User Not Found" }, { status: 404 });
    };

    return NextResponse.json({
        courses: User.courses || [],
    })
}

