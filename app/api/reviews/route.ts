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

// Update a review (vote or rating)
export async function POST(request: Request) {
  try {
    ensureDirectoryExists()
    ensureFileExists()

    const { reviewId, action, value } = await request.json()

    // Read the current data
    const fileData = fs.readFileSync(dataFilePath, "utf8")
    const reviews = JSON.parse(fileData || "[]")

    // Find the review to update
    const reviewIndex = reviews.findIndex((review: any) => review.id === reviewId)

    if (reviewIndex === -1) {
      return NextResponse.json({ error: "Review not found" }, { status: 404 })
    }

    // Update based on action type
    if (action === "vote") {
      reviews[reviewIndex].helpful += 1
    } else if (action === "rate") {
      // For ratings, we could either update the review's rating directly
      // or store user ratings separately and calculate an average
      // Here we'll just store the user rating
      if (!reviews[reviewIndex].userRatings) {
        reviews[reviewIndex].userRatings = []
      }
      reviews[reviewIndex].userRatings.push(value)

      // Recalculate average rating if needed
      const ratings = reviews[reviewIndex].userRatings
      const avgRating = ratings.reduce((sum: number, rating: number) => sum + rating, 0) / ratings.length
      reviews[reviewIndex].rating = Math.round(avgRating * 10) / 10
    }

    // Write the updated data back to the file
    fs.writeFileSync(dataFilePath, JSON.stringify(reviews, null, 2), "utf8")

    return NextResponse.json({ success: true, review: reviews[reviewIndex] })
  } catch (error) {
    console.error("Error updating review:", error)
    return NextResponse.json({ error: "Failed to update review" }, { status: 500 })
  }
}
