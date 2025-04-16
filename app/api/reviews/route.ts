import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// Path to the JSON file
const dataFilePath = path.join(process.cwd(), "public", "data", "reviews.json")

// Función para asegurar que el directorio existe
function ensureDirectoryExists() {
  const dirPath = path.join(process.cwd(), "public", "data")
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

// Función para asegurar que el archivo existe
function ensureFileExists() {
  if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify([]), "utf8")
  }
}

// Get all reviews
export async function GET() {
  try {
    ensureDirectoryExists()
    ensureFileExists()

    const fileData = fs.readFileSync(dataFilePath, "utf8")
    const reviews = JSON.parse(fileData || "[]")
    return NextResponse.json(reviews)
  } catch (error) {
    console.error("Error reading reviews:", error)
    return NextResponse.json({ error: "Failed to fetch reviews" }, { status: 500 })
  }
}
