import dbConnect from "@/lib/mongodb";
import reactionModel from "@/models/reaction";
import { NextResponse } from "next/server";
interface RequestBody {
  comment?: string;
  rate?: number;
  email?: string;
  ipAddress: string;
}

export async function GET(request: Request) {
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const queryValue = searchParams.get("game");
  console.log(queryValue);

  return NextResponse.json({
    message: "Hello from App Router with TypeScript!",
  });
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const ipAddress = request?.headers?.get("x-forwarded-for") ?? "Unknown";
    const body: RequestBody = await request.json();
    const newReaction = new reactionModel({ ...body, ipAddress });
    const resReaction = await newReaction.save();
    return NextResponse.json({ message: resReaction });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
