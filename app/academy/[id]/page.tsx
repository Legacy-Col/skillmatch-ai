'use client'

import { useParams } from "next/navigation";
import { courses } from "@/lib/api/courses";
import normalizeYoutubeLink from "@/lib/util/helper";
import { motion } from "framer-motion";


export default function CourseDetail() {
    const { id } = useParams();
    const course = courses.find((c) => c.id.toString() === id);

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center text-gray-300">
                <p className="text-sm text-gray-600">Course Not found ❌</p>
            </div>
        )
    }

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-800 to bg-zinc-600 text-slate-200 px-6 md:px-16 py-12 ">

            {/* Header */}

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-10"
            >
                <h1 className="text-4xl font-semibold">{course.title}</h1>
                <p className="text-gray-400 mt-2">{course.description}</p>
            </motion.div>

            {/* Video Player */}

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full aspect-video rounded-xl overflow-hidden shadow-lg mb-10"
            >
                <iframe
                    src={normalizeYoutubeLink(course.videoUrl)}
                    title={course.title}
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </motion.div>

            {/* Course Content */}

            <div className="bg-slate-800/50 rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Course Content</h2>
                <ul className="space-y-4">
                    {course.lessons?.map((lesson, index) => (
                        <li
                            key={index}
                            className="p-3 bg-gray-700/50 rounded-lg hover:bg-slate-700 transition"
                        >
                            {lesson}
                        </li>
                    )) || (
                            <p className="text-zinc-500">No lessons available for this course yet</p>
                        )}
                </ul>
            </div>
        </section>
    )
}