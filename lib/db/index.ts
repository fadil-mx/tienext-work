import mongoose from 'mongoose'

// Explicitly type cached.promise as a Promise
const cached: {
  conn: mongoose.Connection | null
  promise: Promise<typeof mongoose> | null
} = { conn: null, promise: null }

export const connectDB = async (MONOD_URL = process.env.MONGO_URL) => {
  if (cached.conn) {
    console.log('=> using existing database connection')
    return cached.conn
  }

  if (!MONOD_URL) {
    throw new Error(
      'Please define the MONGO_URL environment variable inside .env.local'
    )
  }

  // Only initialize the promise if it isn't already initialized
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONOD_URL)
  }

  console.log('=> using new database connection')

  // Await the promise and get the connection object
  const mongooseInstance = await cached.promise
  cached.conn = mongooseInstance.connection // This is the correct connection object

  return cached.conn
}
