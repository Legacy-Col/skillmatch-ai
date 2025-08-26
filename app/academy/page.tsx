'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { courses } from "@/lib/api/courses";
import Sidebar from "@/components/academy/Sidebar";
import Image from "next/image";


export default function AcademyPage() {

    const [searchquery, setSearchQuery] = useState("");

    // for the course filter

    const filteredCourses = courses.filter(course =>
        course.title.toLowerCase().includes(searchquery.toLowerCase())
    )


    return (
        <div className="flex min-h-screen bg-gradient-to-t from-slate-700 to-gray-800 text-neutral-300 ">
            <Sidebar />
            <main className="flex-1 px-6 md:px-16 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold">Explore Our Courses</h2>
                    <p className="text-gray-300 mt-2">Learn skills that connect you to employers 🚀</p>
                </motion.div>

                {/* SearchBar */}

                <div className="flex justify-center mb-10">
                    <input
                        type="text"
                        placeholder="Search Courses..."
                        value={searchquery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full md:w-1/2 px-4 py-2 rounded-lg bg-gray-700 text-zinc-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Grid Card */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:grid-cols-2">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <motion.div
                                key={course.id}
                                initial={{ opacity: 0, y: 60 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-blue-600/20 hover:shadow-xl"
                            >
                                <Image
                                    src={course.thumbnail}
                                    alt={course.title}
                                    className="w-full h-48 object-cover"
                                    aria-label={course.title}
                                    width={450}
                                    height={450}
                                />

                                <div className="p-4 space-x-3 gap-2">
                                    <h3 className="text-xl font-semibold">{course.title}</h3>
                                    <p className="text-gray-500 text-sm mt-2 hover:text-blue-700/50">{course.description}</p>
                                    <Link
                                        href={`/academy/${course.id}`}
                                        className="inline-block mt-4 text-blue-400 hover:underline"
                                    >
                                        View Course
                                    </Link>

                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500 col-span-full">No Courses Found for &quot;{searchquery}&quot;
                        </p>
                    )}
                </div>
            </main>
        </div>
    )
}