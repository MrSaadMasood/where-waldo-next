import { dbConnect } from "@/lib/connection";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id
  const db = await dbConnect()
  const records = await db.collection("records").find({ gameId: new ObjectId(id) }).toArray()
  return Response.json(records)
}
