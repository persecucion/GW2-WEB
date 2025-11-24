"use client"

import { useEffect, useRef } from "react"

interface ParticleBackgroundProps {
    className?: string
    particleCount?: number
    color?: string
}

export default function ParticleBackground({
    className = "",
    particleCount = 50,
    color = "rgba(59, 130, 246, 0.3)"
}: ParticleBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = canvas.offsetWidth
            canvas.height = canvas.offsetHeight
        }
        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Particle class
        class Particle {
            x: number
            y: number
            size: number
            speedX: number
            speedY: number
            opacity: number

            constructor() {
                const canvasWidth = canvas?.width || 800
                const canvasHeight = canvas?.height || 600
                this.x = Math.random() * canvasWidth
                this.y = Math.random() * canvasHeight
                this.size = Math.random() * 2 + 0.5
                this.speedX = Math.random() * 0.5 - 0.25
                this.speedY = Math.random() * 0.5 - 0.25
                this.opacity = Math.random() * 0.5 + 0.2
            }

            update() {
                if (!canvas) return
                this.x += this.speedX
                this.y += this.speedY

                if (this.x > canvas.width) this.x = 0
                if (this.x < 0) this.x = canvas.width
                if (this.y > canvas.height) this.y = 0
                if (this.y < 0) this.y = canvas.height
            }

            draw() {
                if (!ctx) return
                ctx.fillStyle = color.replace("0.3", String(this.opacity))
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fill()
            }
        }

        // Create particles
        const particles: Particle[] = []
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle())
        }

        // Animation loop
        let animationFrameId: number
        const animate = () => {
            if (!ctx || !canvas) return
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((particle) => {
                particle.update()
                particle.draw()
            })

            animationFrameId = requestAnimationFrame(animate)
        }
        animate()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [particleCount, color])

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{ width: "100%", height: "100%" }}
        />
    )
}
