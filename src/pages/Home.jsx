import React from 'react';
import Hero from '../components/Hero';
import { newsData } from '../data';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Hero />

            {/* Introduction / Mission */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-8" style={{ color: '#1e3a5f' }}>Research Mission</h2>
                    <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                        At EESL, our mission is to pioneer advanced electrode interfaces for <span className="font-semibold" style={{ color: '#1e3a5f' }}>next-generation secondary batteries</span>.
                        We focus on understanding electrochemical phenomena at the atomic level to enhance performance and safety.
                    </p>
                </div>
            </section>

            {/* Recent News Preview */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold" style={{ color: '#1e3a5f' }}>Latest News</h2>
                        <Link to="/news" className="font-semibold hover:opacity-70 transition-colors" style={{ color: '#1e3a5f' }}>
                            View All News →
                        </Link>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        {newsData.slice(0, 2).map((news) => (
                            <Link to={`/news/${news.id}`} key={news.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-300 group transition-all block">
                                <span className="text-sm font-bold bg-gray-100 px-3 py-1 rounded-full mb-3 inline-block" style={{ color: '#1e3a5f' }}>
                                    {news.date}
                                </span>
                                <h3
                                    className="text-xl font-bold text-gray-800 group-hover:opacity-70 transition-colors"
                                    dangerouslySetInnerHTML={{ __html: news.title }}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
