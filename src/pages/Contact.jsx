import React from 'react';
import { contactData } from '../data';

const Contact = () => {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="text-white py-16 mb-12" style={{ backgroundColor: '#1e3a5f' }}>
                <div className="max-w-6xl mx-auto px-6">
                    <a href="/contact" className="inline-block hover:opacity-80 transition-opacity">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 cursor-pointer">Contact</h1>
                    </a>
                    <p className="text-blue-100 text-xl">Get in touch with us.</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-20">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Google Maps Integration */}
                    <div className="md:w-1/2 min-h-[400px]">
                        <iframe
                            src="https://maps.google.com/maps?q=강원대학교%20공과대학%202호관&t=&z=16&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '400px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps Location"
                            className="w-full h-full"
                        ></iframe>
                    </div>

                    {/* Info */}
                    <div className="md:w-1/2 p-12 bg-white">
                        <h2 className="text-3xl font-bold mb-8" style={{ color: '#1e3a5f' }}>Location & Info</h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Address</h3>
                                <p className="text-xl text-gray-800 font-medium">{contactData.university}</p>
                                <p className="text-gray-600">{contactData.addressEn}</p>
                                <p className="text-gray-500 mt-2 text-sm">{contactData.addressKo}</p>
                            </div>

                            <div>
                                <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Email</h3>
                                <p className="text-xl font-medium" style={{ color: '#1e3a5f' }}>{contactData.email}</p>
                            </div>

                            <div>
                                <h3 className="text-gray-400 text-sm font-bold uppercase tracking-wider mb-2">Phone</h3>
                                <p className="text-xl text-gray-800 font-medium">{contactData.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
