"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedSectionProps {
    children: ReactNode
    className?: string
    animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale" | "none"
    delay?: number
    duration?: number
}

const animations = {
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    },
    "slide-up": {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    },
    "slide-down": {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 }
    },
    "slide-left": {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    },
    "slide-right": {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    },
    scale: {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 }
    },
    none: {
        hidden: {},
        visible: {}
    }
}

export default function AnimatedSection({
    children,
    className = "",
    animation = "slide-up",
    delay = 0,
    duration = 0.6
}: AnimatedSectionProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.4, 0.25, 1]
            }}
            variants={animations[animation]}
        >
            {children}
        </motion.div>
    )
}
