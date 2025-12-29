import React from 'react'
import { ShieldAlert } from 'lucide-react';

const CTA = () => {
    return (
        <div className="mt-10 p-6 bg-blue-50 rounded-xl flex items-center justify-around flex-wrap gap-4 border border-blue-100">
            <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-600 rounded-full text-white">
                    <ShieldAlert className="w-6 h-6" />
                </div>
                <p className="text-slate-700 font-medium max-w-md">
                    Don't wait for a security breach to upgrade. Secure your assets with the brain of AI today.
                </p>
            </div>
            <button className="bg-[#0070ad] text-white px-10 py-4 rounded-lg font-bold hover:bg-[#005a8c] transform hover:-translate-y-1 transition-all shadow-md cursor-pointer">
                Upgrade My Security
            </button>
        </div>
    )
}

export default CTA