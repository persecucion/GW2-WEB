"use client"

import { ReactNode } from "react"

interface GradientTextProps {
    children: ReactNode
    className?: string
    animated?: boolean
    gradient?: "primary" | "secondary" | "rainbow" | "sunset" | "ocean"
}

const gradients = {
    primary: "from-primary-400 via-primary-300 to-secondary-400",
    secondary: "from-secondary-400 via-secondary-300 to-primary-400",
    rainbow: "from-pink-500 via-purple-500 to-blue-500",
    sunset: "from-orange-500 via-pink-500 to-purple-500",
    ocean: "from-cyan-400 via-blue-500 to-purple-600"
}

export default function GradientText({
    children,
    className = "",
    animated = true,
    gradient = "primary"
}: GradientTextProps) {
    return (
        <span
            className={`bg-gradient-to-r ${gradients[gradient]} bg-clip-text text-transparent ${animated ? "animate-gradient-flow bg-[length:200%_auto]" : ""
                } ${className}`}
        >
            {children}
        </span>
    )
}
