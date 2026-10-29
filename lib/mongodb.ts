import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || 'mongodb+srv://info_db_user:mEiPWuhLfakjrMdT@cluster0.ptavggr.mongodb.net/?retryWrites=true&w=majority'
const options = {}

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let client: MongoClient

async function getConnectedClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options)
      global._mongoClientPromise = client.connect().catch((err) => {
        global._mongoClientPromise = undefined
        throw err
      })
    }
    return global._mongoClientPromise
  } else {
    client = new MongoClient(uri, options)
    return client.connect()
  }
}

const clientPromise: Promise<MongoClient> = {
  then(...args: [any?, any?]) {
    return getConnectedClient().then(...args)
  },
  catch(...args: [any?]) {
    return getConnectedClient().catch(...args)
  },
  finally(...args: [any?]) {
    return getConnectedClient().finally(...args)
  },
  [Symbol.toStringTag]: 'Promise',
} as unknown as Promise<MongoClient>

export default clientPromise
