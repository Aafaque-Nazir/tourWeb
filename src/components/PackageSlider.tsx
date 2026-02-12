'use client';

import { motion } from 'framer-motion';
import { Package } from '@/lib/data';
import PackageCard from '@/components/PackageCard';
import { useRef, useEffect, useState } from 'react';

const VELOCITY = 0.5; // Controls the speed of the scroll

export default function PackageSlider({ packages }: { packages: Package[] }) {
    // Duplicate packages to create infinite scroll effect
    const extendedPackages = [...packages, ...packages, ...packages, ...packages];

    return (
        <div className="w-full overflow-hidden relative group">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex gap-8"
                animate={{
                    x: ['0%', '-50%'],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 40, // Slower, premium feel
                        ease: "linear",
                    },
                }}
                whileHover={{ animationPlayState: 'paused' }} // Optional: Pause on hover
            >
                {extendedPackages.map((pkg, index) => (
                    <div key={`${pkg.id}-${index}`} className="w-[350px] md:w-[450px] flex-shrink-0">
                        <PackageCard pkg={pkg} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
