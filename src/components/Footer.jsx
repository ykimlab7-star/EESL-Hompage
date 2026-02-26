import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
                <div>
                    <h4 className="text-lg font-bold mb-4">EESL</h4>
                    <p className="text-gray-400">
                        Electrochemical Energy Storage Laboratory<br />
                        Kangwon National University
                    </p>
                    <p className="text-gray-400 mt-2">
                        &copy; {new Date().getFullYear()} EESL. All rights reserved.
                    </p>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li><a href="#" className="hover:text-white">Home</a></li>
                        <li><a href="#research" className="hover:text-white">Research</a></li>
                        <li><a href="#publications" className="hover:text-white">Publications</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-lg font-bold mb-4">Contact</h4>
                    <p className="text-gray-400">
                        Engineering Building 2<br />
                        Kangwon National University<br />
                        Chuncheon, Gangwon-do
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
