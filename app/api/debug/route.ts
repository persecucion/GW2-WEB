import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// Esta ruta es solo para depuración
export async function GET() {
  try {
    // Verificar si el directorio existe
    const dirPath = path.join(process.cwd(), "public", "data")
    const dirExists = fs.existsSync(dirPath)

    // Verificar si el archivo existe
    const filePath = path.join(dirPath, "reviews.json")
    const fileExists = fs.existsSync(filePath)

    // Intentar leer el archivo si existe
    let fileContent = null
    let filePermissions = null

    if (fileExists) {
      try {
        fileContent = fs.readFileSync(filePath, "utf8")
        // Obtener permisos del archivo
        const stats = fs.statSync(filePath)
        filePermissions = stats.mode.toString(8)
      } catch (readError) {
        // Usamos una variable diferente para este error
        fileContent = `Error al leer: ${readError instanceof Error ? readError.message : "Error desconocido"}`
      }
    }

    // Verificar permisos de escritura
    let writePermission = false
    try {
      if (!fileExists) {
        fs.writeFileSync(filePath, "[]", "utf8")
        fs.unlinkSync(filePath) // Eliminar el archivo de prueba
      } else {
        // Intentar escribir en el archivo existente
        const testPath = path.join(dirPath, "test_write.txt")
        fs.writeFileSync(testPath, "test", "utf8")
        fs.unlinkSync(testPath) // Eliminar el archivo de prueba
      }
      writePermission = true
    } catch (writeError) {
      writePermission = false
    }

    return NextResponse.json({
      cwd: process.cwd(),
      dirPath,
      dirExists,
      filePath,
      fileExists,
      fileContent: fileContent
        ? fileContent.length > 1000
          ? fileContent.substring(0, 1000) + "..."
          : fileContent
        : null,
      filePermissions,
      writePermission,
      env: process.env.NODE_ENV,
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Error desconocido",
      },
      { status: 500 },
    )
  }
}
