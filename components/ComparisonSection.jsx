import React from 'react';
import { XCircle, CheckCircle2, ShieldAlert, Zap } from 'lucide-react';

const ComparisonSection = () => {
    const comparisons = [
        {
            feature: "Threat Detection",
            old: "Records the crime as it happens. No instant alerts.",
            new: "Detects suspicious loitering and triggers alerts before entry.",
            isBest: true
        },
        {
            feature: "False Alarms",
            old: "Triggered by shadows, rain, or stray animals.",
            new: "Human-only detection. Ignores pets and environmental noise.",
            isBest: true
        },
        {
            feature: "Search Efficiency",
            old: "Manually scrubbing through hours of footage.",
            new: "Instant search for 'Person in Red Shirt' or 'Unrecognized Face'.",
            isBest: true
        },
        {
            feature: "Active Deterrence",
            old: "Passive recording. Intruders aren't stopped.",
            new: "Automated voice warnings and strobe lights to scare off intruders.",
            isBest: true
        }
    ];

    return (
        <section className="py-12 md:py-20 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-10 md:mb-16">
                    <span className="text-blue-600 font-bold tracking-widest uppercase text-xs md:text-sm">The Kavach Edge</span>
                    <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mt-2">
                        Why Standard CCTV Is No Longer Enough
                    </h2>
                </div>

                {/* --- MOBILE VIEW: Stacked Cards (Visible only on small screens) --- */}
                <div className="block md:hidden space-y-6">
                    {comparisons.map((item, index) => (
                        <div key={index} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                            <div className="bg-slate-900 text-white p-4 font-bold text-center">
                                {item.feature}
                            </div>
                            <div className="p-5 space-y-4 bg-white">
                                {/* Traditional Side */}
                                <div className="flex items-start gap-3 opacity-60">
                                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                    <div>
                                        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Traditional CCTV</p>
                                        <p className="text-sm text-slate-600">{item.old}</p>
                                    </div>
                                </div>

                                <div className="border-t border-slate-100 my-2"></div>

                                {/* Kavach Side */}
                                <div className="flex items-start gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="flex items-center gap-1">
                                            <p className="text-[10px] uppercase tracking-wider font-bold text-blue-600">Kavach AI Cam</p>
                                            <Zap className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                                        </div>
                                        <p className="text-sm font-semibold text-slate-900">{item.new}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- DESKTOP VIEW: Full Table (Hidden on mobile) --- */}
                <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-900 text-white">
                                <th className="p-6 text-lg font-semibold w-1/4">Capability</th>
                                <th className="p-6 text-lg font-semibold w-1/3 text-center">Traditional Cameras</th>
                                <th className="p-6 text-lg font-semibold w-1/3 bg-blue-600">
                                    <div className="flex items-center justify-center gap-2">
                                        <Zap className="w-5 h-5 fill-yellow-400 text-yellow-400" /> Kavach AI Cam
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {comparisons.map((item, index) => (
                                <tr key={index} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-6 font-bold text-slate-800 border-r border-slate-100 bg-slate-50/30">
                                        {item.feature}
                                    </td>
                                    <td className="p-6 text-slate-500 bg-white border-r border-slate-100">
                                        <div className="flex items-start gap-3">
                                            <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-1" />
                                            <span className="text-sm leading-relaxed">{item.old}</span>
                                        </div>
                                    </td>
                                    <td className="p-6 text-slate-900 font-medium bg-blue-50/40">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
                                            <span className="text-sm leading-relaxed">{item.new}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>



        // Unresponsive
        // <section className="py-20 bg-white">
        //     <div className="max-w-6xl mx-auto px-4">
        //         <div className="text-center mb-16">
        //             <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">The Kavach Edge</span>
        //             <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
        //                 Why Standard CCTV Is No Longer Enough
        //             </h2>
        //         </div>

        //         <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl">
        //             <table className="w-full text-left border-collapse">
        //                 <thead>
        //                     <tr className="bg-slate-900 text-white">
        //                         <th className="p-6 text-lg font-semibold">Capability</th>
        //                         <th className="p-6 text-lg font-semibold">Traditional Cameras</th>
        //                         <th className="p-6 text-lg font-semibold bg-blue-600 flex items-center gap-2">
        //                             <Zap className="w-5 h-5 fill-yellow-400 text-yellow-400" /> Kavach AI Cam
        //                         </th>
        //                     </tr>
        //                 </thead>
        //                 <tbody className="divide-y divide-slate-200">
        //                     {comparisons.map((item, index) => (
        //                         <tr key={index} className="hover:bg-slate-50 transition-colors">
        //                             {/* 1. Feature Name Column */}
        //                             <td className="p-6 font-bold text-slate-800 border-r border-slate-100">
        //                                 {item.feature}
        //                             </td>

        //                             {/* 2. Traditional Camera Column (The "Old" Way) */}
        //                             <td className="p-6 text-slate-500 bg-white">
        //                                 <div className="flex items-start gap-3">
        //                                     <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-1" />
        //                                     <span className="text-sm leading-relaxed">{item.old}</span>
        //                                 </div>
        //                             </td>

        //                             {/* 3. Kavach AI Column (The "New" Way) */}
        //                             <td className="p-6 text-slate-900 font-medium bg-blue-50/40">
        //                                 <div className="flex items-start gap-3">
        //                                     <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-1" />
        //                                     <span className="text-sm leading-relaxed">{item.new}</span>
        //                                 </div>
        //                             </td>
        //                         </tr>
        //                     ))}
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>
        // </section>
    );

};

export default ComparisonSection;