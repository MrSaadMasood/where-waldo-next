import { dbConnect } from "@/lib/connection";
import { Character } from "@/types/types";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request: NextResponse, { params }: { params: { id: string } }) {
  const searchParams = new URL(request.url).searchParams
  const charId = searchParams.get("charId")
  const x = searchParams.get("x")
  const y = searchParams.get("y")
  if (!x || !y || !charId) throw new Error("incorrect query params")
  const db = await dbConnect()
  const game = await db.collection<{ characters: Character[] }>("games").findOne({ _id: new ObjectId(params.id) })
  console.log("succeeded til here");

  if (!game) throw new Error
  const character = getQueriedCharacter(game.characters, charId)
  if (!character) throw new Error
  const isCorrectLocation = checkLocation(character, parseFloat(x), parseFloat(y))
  console.log("The searchParams is", searchParams)
  if (!isCorrectLocation) throw new Error
  return Response.json(character.location)
}


function getQueriedCharacter(array: Character[], id: string) {
  for (let arr of array) {
    if (arr.id === parseInt(id)) {
      return arr
    }
  }
}


function checkLocation<T extends number>(object: Character, x: T, y: T) {
  const xmin = object.coordinates[0].xmin,
    xmax = object.coordinates[1].xmax,
    ymin = object.coordinates[0].ymin,
    ymax = object.coordinates[1].ymax;
  if (x <= xmax && x >= xmin && y <= ymax && y >= ymin) {
    return true
  }
  else return false
}
