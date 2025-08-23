'use client'

import { motion } from "framer-motion";
import { FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram, FaLinkedin } from "react-icons/fa6";


export default function Footer() {
    return (
        <footer className="bg-gray-950 text-gray-300 py-10 px-6 md:px-16">
            <div className="max-w-7xl mx-auto flex items-center flex-col md:flex-row justify-evenly gap-8">

                {/* Logo and About */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-xl font-bold text-slate-200">SkillMatch Ai</h2>
                    <p className="mt-4 text-sm text-gray-400">Learn skills, grow your career, and get connected to employers worldwide. </p>
                </motion.div>

                {/* QuickLinks */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-lg font-semibold text-gray-200">Quick Links</h3>
                    <ul className="mt-4 space-y-6">
                        <li><a href="#" className="hover:text-neutral-100">Home</a></li>
                        <li><a href="#academy" className="hover:text-neutral-100">Academy</a></li>
                        <li><a href="#jobs" className="hover:text-neutral-100">Jobs</a></li>
                        <li><a href="#contact" className="hover:text-neutral-100">Contact</a></li>
                    </ul>
                </motion.div>

                {/* Socials */}

                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-lg font-semibold text-slate-200">Follow Us</h3>
                    <div className="flex space-x-4 mt-4">
                        <a href="" className="hover:text-neutral-100 text-sm"><FaSquareXTwitter size={30} />Twitter</a>
                        <a href="" className="hover:text-neutral-100 text-sm"><FaSquareFacebook size={30} />Facebook</a>
                        <a href="" className="hover:text-neutral-100 text-sm"><FaSquareInstagram size={30} />Instagram</a>
                        <a href="" className="hover:text-neutral-100 text-sm"><FaLinkedin size={30} />Linkedin</a>
                    </div>
                </motion.div>
            </div>

            {/* Button Bar */}

            <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} SkillMatch AI. All rights reserved.
            </div>
        </footer>
    )
}