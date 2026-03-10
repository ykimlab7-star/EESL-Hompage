import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Check if we are on the home page
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Research', href: '/research' },
        { name: 'Members', href: '/members' },
        { name: 'Publications', href: '/publications' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'News', href: '/news' },
        { name: 'Contact', href: '/contact' },
    ];

    // Determine navbar styling based on page and scroll state
    // On Home: Transparent -> White on scroll
    // On Other Pages: Always White
    const navbarBg = isHome
        ? (isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6')
        : 'bg-white shadow-md py-4';

    const textColor = isHome
        ? (isScrolled ? 'text-[#050d1f]' : 'text-white')
        : 'text-[#050d1f]';

    const subTextColor = isHome
        ? (isScrolled ? 'text-gray-600' : 'text-gray-200')
        : 'text-gray-600';

    const linkColor = isHome
        ? (isScrolled ? 'text-gray-700 hover:text-[#050d1f]' : 'text-white hover:text-blue-200')
        : 'text-gray-700 hover:text-[#050d1f]';

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo Section */}
                <Link to="/" className="flex flex-col group">
                    <h1 className={`text-3xl font-bold tracking-tighter transition-colors ${textColor}`}>
                        EESL
                    </h1>
                    <span className={`text-xs font-medium tracking-widest uppercase transition-colors ${subTextColor}`}>
                        Kangwon National University
                    </span>
                </Link>

                {/* Hamburger Button (Mobile Only) */}
                <button
                    className={`md:hidden p-2 rounded-md focus:outline-none transition-colors ${linkColor}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isMobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        )}
                    </svg>
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => {
                        if (link.name === 'Members') {
                            return (
                                <div key={link.name} className="relative group py-4">
                                    <Link
                                        to={link.href}
                                        className={`text-[15px] font-medium transition-colors ${linkColor} capitalize`}
                                    >
                                        {link.name}
                                    </Link>

                                    {/* Dropdown Menu */}
                                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-48 bg-[#2a5082] border-t-2 border-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-xl">
                                        <div className="flex flex-col">
                                            <Link
                                                to="/members?tab=professor"
                                                className="px-6 py-4 text-white text-sm hover:bg-[#386baf] transition-colors text-center"
                                            >
                                                Professor
                                            </Link>
                                            <div className="h-px bg-white/20 mx-4"></div>
                                            <Link
                                                to="/members?tab=students"
                                                className="px-6 py-4 text-white text-sm hover:bg-[#386baf] transition-colors text-center border-b border-transparent"
                                            >
                                                Students
                                            </Link>
                                            <div className="h-px bg-white/20 mx-4"></div>
                                            <Link
                                                to="/members?tab=alumni"
                                                className="px-6 py-4 text-white text-sm hover:bg-[#386baf] transition-colors text-center"
                                            >
                                                Alumni
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-[15px] font-medium transition-colors ${linkColor} capitalize`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {/* The dropdown takes full width below the navbar */}
            <div 
                className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen py-4 opacity-100 visible' : 'max-h-0 py-0 opacity-0 invisible'}`}
            >
                <div className="flex flex-col px-6 space-y-4">
                    {navLinks.map((link) => {
                        if (link.name === 'Members') {
                            return (
                                <div key={link.name} className="flex flex-col space-y-2">
                                    <Link to={link.href} className="text-gray-800 font-semibold text-lg" onClick={() => setIsMobileMenuOpen(false)}>
                                        {link.name}
                                    </Link>
                                    <div className="pl-4 flex flex-col space-y-3 border-l-2 border-[#2a5082] mt-2 mb-2">
                                        <Link to="/members?tab=professor" className="text-gray-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Professor</Link>
                                        <Link to="/members?tab=students" className="text-gray-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Students</Link>
                                        <Link to="/members?tab=alumni" className="text-gray-600 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Alumni</Link>
                                    </div>
                                </div>
                            );
                        }
                        return (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="text-gray-800 font-semibold text-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
