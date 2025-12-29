import React from 'react';
import { Store, Warehouse, Building2, ShieldCheck } from 'lucide-react';

const IndustrySolutions = () => {
    const industries = [
        {
            title: "Retail & Showrooms",
            description: "Prevent shrinkage with AI that identifies suspicious loitering and unauthorized stockroom access before theft occurs.",
            icon: <Store className="w-8 h-8 text-blue-600" />,
            benefit: "Reduce inventory loss by 40%"
        },
        {
            title: "Warehouses & Logistics",
            description: "Secure large perimeters with virtual tripwires. Differentiate between authorized staff and intruders automatically.",
            icon: <Warehouse className="w-8 h-8 text-blue-600" />,
            benefit: "24/7 autonomous perimeter guard"
        },
        {
            title: "Corporate Offices",
            description: "Manage high-traffic entry points with face recognition and instant blacklist alerts for barred individuals.",
            icon: <Building2 className="w-8 h-8 text-blue-600" />,
            benefit: "Seamless access management"
        }
    ];

    return (
        <section className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                        Tailored Intelligence for Every Premise
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Generic cameras record crime. Kavach AI understands your environment to prevent it.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {industries.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
                        >
                            <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                                {item.description}
                            </p>
                            <div className="pt-6 border-t border-slate-50">
                                <div className="flex items-center text-sm font-semibold text-blue-700">
                                    <ShieldCheck className="w-5 h-5 mr-2" />
                                    {item.benefit}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="bg-[#0070ad] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#005a8c] transition-colors shadow-lg cursor-pointer">
                        Get a Custom Solution for My Business
                    </button>
                </div>
            </div>
        </section>
    );
};

export default IndustrySolutions;