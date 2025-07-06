import React from "react";

const Footer = () => {
    return (
        <footer className="bg-sky-900 text-white py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-lg font-semibold">© 2025 Kavach Cam</div>

                <div className="flex gap-6 text-sm text-gray-300">
                    <a href="#features" className="hover:text-white">Features</a>
                    <a href="#pricing" className="hover:text-white">Pricing</a>
                    <a href="#testimonials" className="hover:text-white">Testimonials</a>
                    <a href="#demo" className="hover:text-white">Demo</a>
                </div>

                <div className="text-sm text-gray-400">support@kavach.com</div>
            </div>
        </footer>
    );
};

export default Footer;
