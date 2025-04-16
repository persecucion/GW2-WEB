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

// Crear una nueva reseña
export async function POST(request: Request) {
  try {
    ensureDirectoryExists()
    ensureFileExists()

    const reviewData = await request.json()

    // Validar datos mínimos requeridos
    if (!reviewData.author || !reviewData.content || !reviewData.rating) {
      return NextResponse.json({ error: "Faltan campos requeridos (author, content, rating)" }, { status: 400 })
    }

    // Leer las reseñas existentes
    const fileData = fs.readFileSync(dataFilePath, "utf8")
    const reviews = JSON.parse(fileData || "[]")

    // Crear un nuevo ID (el máximo actual + 1)
    const maxId = reviews.length > 0 ? Math.max(...reviews.map((r: any) => r.id)) : 0

    // Crear la nueva reseña con valores por defecto para campos faltantes
    const newReview = {
      id: maxId + 1,
      author: reviewData.author,
      avatar: reviewData.avatar || "/images/avatars/default.jpg",
      role: reviewData.role || "member",
      rating: Number.parseFloat(reviewData.rating) || 5,
      content: reviewData.content,
      date: reviewData.date || new Date().toISOString(),
      verified: reviewData.verified || false,
      helpful: 0,
      userRatings: [],
    }

    // Añadir la nueva reseña
    reviews.push(newReview)

    // Guardar el archivo actualizado
    fs.writeFileSync(dataFilePath, JSON.stringify(reviews, null, 2), "utf8")

    return NextResponse.json({
      success: true,
      message: "Reseña creada correctamente",
      review: newReview,
    })
  } catch (error) {
    console.error("Error al crear reseña:", error)
    return NextResponse.json({ error: "No se pudo crear la reseña" }, { status: 500 })
  }
}
