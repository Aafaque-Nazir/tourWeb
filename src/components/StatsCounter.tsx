'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
    value: string;
    label: string;
    delay?: number;
}

function parseValue(value: string): { num: number; suffix: string; prefix: string } {
    // Handle formats like "12k+", "08", "45", "12"
    const match = value.match(/^([^\d]*)(\d+)(.*)/);
    if (!match) return { num: 0, suffix: '', prefix: '' };
    return {
        prefix: match[1],
        num: parseInt(match[2], 10),
        suffix: match[3],
    };
}

function AnimatedNumber({ value, label, delay = 0 }: CounterProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });
    const [count, setCount] = useState(0);
    const { num, suffix, prefix } = parseValue(value);

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const duration = 2000; // 2 seconds
        const startTime = performance.now();
        const delayMs = delay * 150;

        const timer = setTimeout(() => {
            const animate = (currentTime: number) => {
                const elapsed = currentTime - startTime - delayMs;
                const progress = Math.min(elapsed / duration, 1);

                // Easing: ease-out cubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = Math.round(eased * num);

                setCount(current);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };
            requestAnimationFrame(animate);
        }, delayMs);

        return () => clearTimeout(timer);
    }, [isInView, num, delay]);

    // Pad with leading zero if original had it (e.g. "08")
    const displayNum = value.match(/^0\d/) ? String(count).padStart(2, '0') : String(count);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: delay * 0.15 }}
            className="space-y-2"
        >
            <span className="text-4xl md:text-5xl font-playfair text-white block tabular-nums">
                {prefix}{displayNum}{suffix}
            </span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#c5a021]">{label}</span>
        </motion.div>
    );
}

const stats = [
    { label: 'Private Guests', value: '12k+' },
    { label: 'Years Active', value: '08' },
    { label: 'Elite Partners', value: '45' },
    { label: 'Global Awards', value: '12' },
];

export default function StatsCounter() {
    return (
        <section className="py-20 border-y border-white/5 bg-[#050a18]">
            <div className="container grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {stats.map((stat, i) => (
                    <AnimatedNumber key={i} value={stat.value} label={stat.label} delay={i} />
                ))}
            </div>
        </section>
    );
}
