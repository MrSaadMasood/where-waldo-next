import { dbConnect } from "@/lib/connection";
import { CharacterData } from "@/types/types";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const characterId = params.id
  const db = await dbConnect()
  const game = await db.collection<{ characters: CharacterData[] }>
    ("games").findOne({ _id: new ObjectId(characterId) })
  if (!game) throw new Error
  const randomSelectedCharacters = randomCharactersSelector(game.characters)
  return Response.json(randomSelectedCharacters)

}


function randomCharactersSelector(array: CharacterData[]) {
  let selectedCharacters = [];
  let randomNumbers: number[] = [];
  const arrayLength = array.length
  for (let i = 0; selectedCharacters.length < 3; i++) {
    const random = Math.floor(Math.random() * arrayLength)
    if (!randomNumbers.includes(random)) {
      selectedCharacters.push(array[random])
      randomNumbers.push(random)
    }
  }
  return selectedCharacters
}
