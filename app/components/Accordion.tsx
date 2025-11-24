"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaChevronDown } from "react-icons/fa"

interface AccordionItem {
    id: string
    question: string
    answer: string
}

interface AccordionProps {
    items: AccordionItem[]
    className?: string
}

export default function Accordion({ items, className = "" }: AccordionProps) {
    const [openId, setOpenId] = useState<string | null>(null)

    const toggleItem = (id: string) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <div className={`space-y-4 ${className}`}>
            {items.map((item) => (
                <div
                    key={item.id}
                    className="glass rounded-xl overflow-hidden border border-white/10 hover:border-primary-500/30 transition-all duration-300"
                >
                    <button
                        onClick={() => toggleItem(item.id)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-300 touch-target"
                        aria-expanded={openId === item.id}
                    >
                        <span className="font-semibold text-white text-base sm:text-lg pr-4">
                            {item.question}
                        </span>
                        <motion.div
                            animate={{ rotate: openId === item.id ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                        >
                            <FaChevronDown className="text-primary-400" />
                        </motion.div>
                    </button>

                    <AnimatePresence>
                        {openId === item.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-4 pt-2 text-gray-300 text-sm sm:text-base leading-relaxed">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    )
}
