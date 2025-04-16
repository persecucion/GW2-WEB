import fs from "fs/promises"
import path from "path"

// Path to the JSON file
const dataFilePath = path.join(process.cwd(), "public", "data", "reviews.json")

// Ensure the data directory exists
export async function ensureDataDirectory() {
  const dirPath = path.join(process.cwd(), "public", "data")
  try {
    await fs.access(dirPath)
  } catch (error) {
    // Directory doesn't exist, create it
    await fs.mkdir(dirPath, { recursive: true })
  }
}

// Create an empty reviews file if it doesn't exist
export async function initReviewsFile() {
  try {
    await fs.access(dataFilePath)
  } catch (error) {
    // File doesn't exist, create it with empty array
    await fs.writeFile(dataFilePath, JSON.stringify([], null, 2), "utf8")
  }
}

// Initialize the data structure on server start
export async function initializeReviewsData() {
  await ensureDataDirectory()
  await initReviewsFile()
}
