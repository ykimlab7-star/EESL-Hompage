import React from 'react';
import { Link } from 'react-router-dom';
import { researchData } from '../data';

const Research = () => {
    return (
        <div className="pt-24 min-h-screen">
            <div className="text-white py-16 mb-12" style={{ backgroundColor: '#1e3a5f' }}>
                <div className="max-w-6xl mx-auto px-6">
                    <a href="/research" className="inline-block hover:opacity-80 transition-opacity">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 cursor-pointer">Research Areas</h1>
                    </a>
                    <p className="text-blue-100 text-xl max-w-2xl">
                        Our research focuses on the critical challenges in electrochemical energy storage systems.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-20">
                <div className="space-y-12">
                    {researchData.map((area, index) => (
                        <Link to={`/research/${area.id}`} key={index} className={`flex flex-col md:flex-row gap-8 p-8 rounded-2xl ${area.color} border border-gray-100 items-center block hover:shadow-lg transition-shadow duration-300 group`}>
                            <div className="w-full md:w-1/2">
                                <div className="aspect-[4/3] bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 font-medium relative group-hover:opacity-90 transition-opacity">
                                    {area.image ? (
                                        <img
                                            src={area.image}
                                            alt={area.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    ) : (
                                        <span>Research Image {index + 1}</span>
                                    )}
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col justify-center">
                                <h2 className="text-2xl font-bold mb-4 group-hover:opacity-70 transition-opacity" style={{ color: '#1e3a5f' }}>{area.title}</h2>
                                <p className="text-gray-700 text-lg leading-relaxed">{area.description}</p>
                                <span className="text-[#1e3a5f] font-semibold mt-6 inline-flex items-center opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 duration-300">
                                    Read details <span className="ml-2">&rarr;</span>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Research;
