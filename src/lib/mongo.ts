import { MongoClient } from "mongodb"

const { MONGO_URL } = process.env

if (!MONGO_URL) throw new Error("the database connection string is not available")
let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'production') {
  const client = new MongoClient(MONGO_URL)
  clientPromise = client.connect()

} else {
  let globalMongo = global as typeof globalThis & {
    _mongoClient: Promise<MongoClient>
  }
  if (!globalMongo._mongoClient) {
    const client = new MongoClient(MONGO_URL)
    globalMongo._mongoClient = client.connect()
  }

  clientPromise = globalMongo._mongoClient
}

export { clientPromise }
