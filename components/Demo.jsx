import React from "react";

const Demo = () => {
    return (
        <section id="demo" className="bg-sky-900 text-white py-20 px-6">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Watch Kavach Cam in Action
                </h2>
                <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                    See how our AI camera detects intruders and responds instantly. Real footage from real customers.
                </p>

                <div className="aspect-video w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/dBh26Io5_cw"
                        title="Kavach Cam Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Demo;
