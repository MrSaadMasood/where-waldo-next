import { clientPromise } from "./mongo";

export async function dbConnect() {
  try {
    const client = await clientPromise
    const db = client.db("waldo")
    return db
  } catch (error) {
    console.log("the database connection failed")
    throw new Error((error as Error).message)
  }
}
