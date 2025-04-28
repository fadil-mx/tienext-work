// global.d.ts
declare global {
  // Add the mongoose property to global
  var mongoose: { conn: any; promise: any } | undefined
}

export {} // This ensures that the file is treated as a module
