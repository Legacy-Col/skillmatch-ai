'use client'

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gray-900 text-neutral-100 min-h-[90vh]">
            <div className="absolute inset-0">
                <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-20%] left-[-20%] w-[400px] h-[400px] bg-gradient-to-tr from-pink-500/30 to-red-500/30 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-xl text-center md:text-left"
                >
                    <h1 className="text-4xl md:text-6xl font-serif leading-tight">Learn Skills. <br /> Get Matched with Employers.</h1>

                    <p className="mt-6 text-lg text-neutral-300 md:px-4">
                        Explore tutorials, improve your skills, and connect with employers who need your talent.
                    </p>

                    <div className="mt-8 flex gap-4 justify-center md:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 bg-blue-600 font-medium rounded-xl hover:bg-blue-700"
                        >
                            Get Started
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-6 py-3 border border-neutral-400  font-medium rounded-xl"
                        >
                            Browse Courses
                        </motion.button>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex justify-center md:justify-between mt-10 md:mt-20"
                >
                    <Image
                        src="/images/Student.png"
                        alt="hero image"
                        width={450}
                        height={250}
                        className="rounded-2xl shadow-lg"
                    />
                </motion.div>
            </div>
        </section >
    )
}