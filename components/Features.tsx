'use client'

import { motion, useScroll, useTransform } from "framer-motion";
import { IoBriefcaseOutline } from "react-icons/io5";
import { FaUserGraduate, FaRegUser, FaVideo } from "react-icons/fa";
import { useRef } from "react";


const features = [
    {
        icon: FaUserGraduate,
        title: "Learn New Skills",
        description: "Access a wide range of courses and tutorials to enhance your knowledge and skills."
    },
    {
        icon: IoBriefcaseOutline,
        title: "Get Matched with real Employers",
        description: "Showcase your skills and connect with real job opportunities."
    },
    {
        icon: FaRegUser,
        title: "Build Your Profile",
        description: "Create a professional profile to highlight your skills, experience, and achievements."
    },
    {
        icon: FaVideo,
        title: "Interactive Learning",
        description: "Engage with interactive content, including videos, quizzes, and hands-on projects."
    }
];

export default function Features() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]  // Adjust based on when you want the animation to trigger
    })

    const orbY1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const orbY2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <section
            ref={sectionRef}
            className="relative overflow-hidden py-20 px-6 md:px-16 text-gray-600"
            id="features"
        >
            <div className="absolute inset-0 bg-gradient-to-bl from gray-950 via-gray-900 to black" />
            <motion.div style={{ y: orbY1 }} className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-700/30 rounded-full blur-3xl" />
            <motion.div style={{ y: orbY2 }} className="absolute top-[-15%] right-[-15%] w-[350px] h-[350px] bg-purple-800/20 rounded-full blur-3xl" />

            {/* Content */}

            <div className="relative z-10 max-w-7xl mx-auto text-center mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-serif text-neutral-300 mb-4"
                >
                    Why Choose <span className="text-blue-400">SkillMatch Ai?</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-4 text-gray-500 max-w-2xl mx-auto"
                >
                    We don't just teach skills — <span className="text-purple-500/50">we connect you to opportunities.</span>
                </motion.p>
            </div>

            {/* View of the features */}

            <div className="relative z-20 grid gap-8 md:grid-cols-4 lg-grid-cols-4 mx-auto max-w-6xl text-center">
                {features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gray-900/70 border border-neutral-800 p-6 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition"
                    >
                        <feature.icon className="text-4xl text-blue-400 mb-4 mx-auto" />
                        <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}