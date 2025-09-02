'use client'

import { motion } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import normalizeYoutubeLink from "@/lib/util/helper";
import Link from "next/link";


type Course = {
    id: string,
    title: string,
    thumbnail: string,
    videoUrl: string
}

const courses: Course[] = [
    {
        id: "1",
        title: "Web Development Course",
        thumbnail: "/images/Web Development.png",
        videoUrl: "https://youtu.be/ZxKM3DCV2kE?si=VmyQBc7EE2TxbofC"
    },
    {
        id: "2",
        title: "Cyber Security",
        thumbnail: "/images/Cyber Sec.png",
        videoUrl: "https://youtu.be/h3PNK1pq2OA?si=Tx8MFEj_J8ROCSmU"
    },
    {
        id: "3",
        title: "UI/UX",
        thumbnail: "/images/design.png",
        videoUrl: "https://youtu.be/pyQAiRuqUSM?si=8XyjFSozOHret8vP"
    },
]


export default function AcademySection() {
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);


    return (
        <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-black text-slate-100 py-20 px-6 overflow-hidden">
            <div className="absolute top-[-20%] right-[-20%] w-[400px] h-[400px] bg-gradient-tr from-blue-800/30 to-purple-700/30 rounded-full blur-3xl opacity-70" />
            <div className="absolute bottom-[-20%] left-[-20%] w-[350px] h-[350px] bg-gradient-br from-pink-600/20 to-red-600/20 rounded-full blur-3xl opacity-70" />

            <div className="relative z-10 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold ">Academy</h2>
                    <p className="text-neutral-400 mt-2">Learn new skills through curated video tutorials.</p>
                </motion.div>

                {/* Course Grid */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {courses.map((course, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-800 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover: scale-105 transition-transform cursor-pointer"
                        >
                            <img
                                src={course.thumbnail}
                                alt={course.title}
                                className="w-full h-48 object-cover"
                            />

                            <div className="p-4">
                                <h3 className="font-semibold text-lg mb-2">{course.title}</h3>

                                <button
                                    className="text-sm bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                                    onClick={() => setSelectedCourse(course)}
                                >
                                    Watch
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* See All Button */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-12 text-center"
                    viewport={{ once: true }}
                >
                    <Link href="/academy">
                        <button className="bg-gradient-to-r from-blue-600 to-purple-500 px-6 py-3 rounded-xl font-medium shadow-lg hover:opacity-90 transition">
                            See All Courses
                        </button>
                    </Link>
                </motion.div>
            </div>

            {/* Video Modal */}

            {selectedCourse && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                    <div className="bg-gray-900 rounded-xl max-w-3xl w-full p-4 relative">
                        <button
                            onClick={() => setSelectedCourse(null)}
                            className="absolute top-2 right-2 text-neutral-400 text-xl"
                        >
                            <IoClose size={30} />
                        </button>

                        <div className="aspect-video rounded-lg overflow-hidden">
                            <iframe
                                src={normalizeYoutubeLink(selectedCourse.videoUrl)}
                                title={selectedCourse.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}