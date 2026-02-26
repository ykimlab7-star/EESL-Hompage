import React from 'react';
import { membersData, contactData } from '../data';
import { Mail, MapPin, Phone, Github, ExternalLink } from 'lucide-react';

const TemporaryHome = () => {
    const { professor } = membersData;

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 italic-none">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>

                <div className="relative z-10 text-center px-6 max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
                    <h2 className="text-blue-400 font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
                        Kangwon National University
                    </h2>
                    <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                        Electrochemical Energy <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                            Storage Laboratory
                        </span>
                    </h1>
                    <p className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                        Pioneering advanced electrode interfaces and material science for next-generation energy storage systems.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <div className="px-6 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                            Full Website Coming Soon
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-6xl mx-auto px-6 -mt-20 relative z-20 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Professor Card */}
                    <div className="md:col-span-2 bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-12 border border-slate-100">
                        <div className="flex flex-col md:flex-row gap-10 items-start">
                            <div className="w-full md:w-48 h-64 flex-shrink-0 bg-slate-100 rounded-2xl overflow-hidden relative group">
                                <img
                                    src={professor.image}
                                    alt={professor.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                                <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
                            </div>
                            <div className="flex-1">
                                <div className="mb-6">
                                    <h3 className="text-3xl font-bold mb-1">{professor.name}</h3>
                                    <p className="text-blue-600 font-semibold">{professor.title}</p>
                                    <p className="text-slate-500 text-sm">{professor.department}, {professor.university}</p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="font-bold text-slate-800 border-b border-slate-100 pb-2 text-sm uppercase tracking-wider">Education</h4>
                                    <ul className="space-y-2">
                                        {professor.education.map((edu, idx) => (
                                            <li key={idx} className="text-slate-600 text-sm flex gap-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                                                {edu}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Sidebar */}
                    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-xl shadow-blue-200/50 p-8 text-white">
                        <h3 className="text-xl font-bold mb-8">Quick Contact</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-blue-200 text-xs uppercase font-bold tracking-wider mb-1">Email</p>
                                    <a href={`mailto:${contactData.email}`} className="text-sm font-medium hover:text-blue-200 transition-colors">
                                        {contactData.email}
                                    </a>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-blue-200 text-xs uppercase font-bold tracking-wider mb-1">Office</p>
                                    <p className="text-sm font-medium">{contactData.phone}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-blue-200 text-xs uppercase font-bold tracking-wider mb-1">Address</p>
                                    <p className="text-sm font-medium leading-relaxed">
                                        {contactData.addressEn}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-white/10">
                            <button className="w-full py-4 bg-white text-blue-700 font-bold rounded-2xl shadow-lg hover:bg-blue-50 transition-all hover:-translate-y-1 active:scale-95">
                                Inquire Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Status Message */}
                <div className="mt-20 text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-slate-500 text-sm font-medium">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        We are currently preparing full laboratory details.
                    </div>
                </div>
            </div>

            {/* Simple Footer */}
            <footer className="py-12 border-t border-slate-200 bg-white">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-slate-400 text-sm">
                        &copy; {new Date().getFullYear()} EESL @ KNU. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Research</a>
                        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Publication</a>
                        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">Members</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default TemporaryHome;
