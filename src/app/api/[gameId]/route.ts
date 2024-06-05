import { dbConnect } from "@/lib/connection";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

type ImagePath = {
  gameImage: {
    path: string
  }
}
export async function GET(_req: NextRequest, { params }: { params: { gameId: string } }) {
  const id = params.gameId
  const db = await dbConnect()
  const gameUrl = await db.collection<ImagePath>
    ("games").findOne({ _id: new ObjectId(id) },
      { projection: { gameImage: 1 } })
  if (!gameUrl) throw new Error
  return Response.json(gameUrl.gameImage.path)
}
