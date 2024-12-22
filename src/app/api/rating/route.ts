/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const dataGame = await reactionModel.find({
    game: queryValue,
  });
  return NextResponse.json({
    data: dataGame,
  });
}

export async function POST(request: Request) {
  try {
    await dbConnect();
    const ipAddress = request?.headers?.get("x-forwarded-for") ?? "Unknown";
    const body: RequestBody = await request.json();
    const { game, ...rest } = body as any;
    const findExist = await reactionModel.findOne({
      game,
    });
    if (findExist && rest.email === findExist.email) {
      await reactionModel.findOneAndUpdate({
        game,
        email: rest.email,
        ...rest,
      });
    } else {
      const newReaction = new reactionModel({ ...body, ipAddress });
      await newReaction.save();
    }
    const countRating = await reactionModel.countDocuments({
      game,
    });
    if (countRating > 5) {
      reactionModel.findOneAndDelete({}, { sort: { createAt: 1 } });
    }
    return NextResponse.json({ message: "OK" });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
