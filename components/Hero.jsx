import React from "react";

const Hero = () => {
  return (
    <section className="w-full  pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-sky-900 leading-tight">
            AI Camera That <span className="text-sky-700">Detects</span> Thieves 🚨
          </h1>
          <p className="mt-6 text-lg">
            Detects intruders. Triggers a sound. Stops theft—before it happens.
            Smart home security powered by AI.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#buy"
              className="bg-slate-800 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-sky-900 transition"
            >
              Buy Now
            </a>
            <a
              href="#demo"
              className="text-black border border-sky-800 px-6 py-3 rounded-full text-sm font-semibold hover:bg-sky-100"
            >
              Watch Demo
            </a>
          </div>
        </div>

        {/* Product Image */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <img
            src="/hero-section-image.jpg"
            alt="AI Security Camera"
            className="w-full max-w-md mx-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
