import { dbConnect } from "@/lib/connection";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id
  const [data, db] = await Promise.all([req.json(), dbConnect()])
  const { name, time } = data
  if (!name || !time) throw new Error
  await db.collection('records').insertOne({
    gameId: new ObjectId(id),
    name,
    time
  })
  return Response.json("submitted")

}
