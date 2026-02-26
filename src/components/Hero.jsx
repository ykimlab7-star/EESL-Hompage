import React from 'react';
import { Link } from 'react-router-dom';
import batteryBg from '../assets/hero_bg_abstract.png';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${batteryBg})` }}
            >
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-6xl mx-auto mt-16">
                <h2 className="text-xl md:text-2xl text-blue-200 font-semibold mb-4 tracking-widest uppercase animate-fade-in-up">
                    Kangwon National University
                </h2>
                <div className="space-y-4 mb-8 animate-fade-in-up delay-100">
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        강원대학교 전극소재계면공학연구실
                    </h1>
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-blue-100 leading-tight">
                        Electrochemical Energy Storage Laboratory
                    </h1>
                </div>
                <div className="animate-fade-in-up delay-300">
                    <Link
                        to="/research"
                        className="inline-block bg-[#050d1f] hover:bg-[#0d1b3e] text-white font-bold py-3 px-8 rounded-full transition-all hover:scale-105 shadow-lg"
                    >
                        Explore Our Research
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
