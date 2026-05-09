"use client"

import React from "react";
import { motion } from "framer-motion";

const Demo = () => {
    return (
        <section id="demo" className="bg-sky-900 text-white py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">

                <motion.h2
                    className="text-3xl md:text-4xl font-bold mb-6"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Watch Rakshak Cam in Action
                </motion.h2>

                <motion.p
                    className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    See how our AI camera detects intruders and responds instantly. Real footage from real customers.
                </motion.p>

                <motion.div
                    className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/eaDMckYP6Sg"
                        title="Rakshak Cam Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </motion.div>

            </div>
        </section>
    );
};

export default Demo;
