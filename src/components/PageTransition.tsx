'use client';

import { motion } from 'framer-motion';

const columns = 5;

export default function PageTransition({ children }: { children: React.ReactNode }) {
    return (
        <>
            {/* Golden Curtain Overlay */}
            <div className="fixed inset-0 z-[9999] pointer-events-none flex">
                {Array.from({ length: columns }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scaleY: 1 }}
                        animate={{
                            scaleY: 0,
                            transition: {
                                duration: 0.45,
                                delay: 0.05 + i * 0.06,
                                ease: [0.76, 0, 0.24, 1] as const,
                            },
                        }}
                        className="flex-1 h-full origin-top"
                        style={{
                            background: i % 2 === 0
                                ? 'linear-gradient(180deg, #c5a021 0%, #8b6914 50%, #1a1400 100%)'
                                : 'linear-gradient(180deg, #a88a1c 0%, #6b5010 50%, #0f0d00 100%)',
                        }}
                    />
                ))}

                {/* Center Logo Flash */}
                <motion.div
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{
                        opacity: 0,
                        scale: 0.85,
                        transition: {
                            duration: 0.25,
                            delay: 0.2,
                        },
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <span className="text-4xl font-playfair text-[#020617] tracking-tighter select-none font-bold">
                        TOURWEB
                    </span>
                </motion.div>
            </div>

            {/* Gold line accent */}
            <motion.div
                initial={{ scaleX: 0 }}
                animate={{
                    scaleX: 1,
                    transition: {
                        duration: 0.5,
                        delay: 0.35,
                        ease: [0.76, 0, 0.24, 1] as const,
                    },
                }}
                className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#c5a021] to-transparent z-[9998] origin-left pointer-events-none"
            />

            {/* Page Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        delay: 0.4,
                        ease: [0.16, 1, 0.3, 1] as const,
                    },
                }}
            >
                {children}
            </motion.div>
        </>
    );
}
