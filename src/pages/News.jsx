import React from 'react';
import { newsData } from '../data';
import { Link } from 'react-router-dom';

const News = () => {
    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="text-white py-16 mb-12" style={{ backgroundColor: '#1e3a5f' }}>
                <div className="max-w-6xl mx-auto px-6">
                    <a href="/news" className="inline-block hover:opacity-80 transition-opacity">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 cursor-pointer">News</h1>
                    </a>
                    <p className="text-blue-100 text-xl">Latest updates and announcements.</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 pb-20">
                <div className="flex flex-col gap-0 border-b border-gray-100 border-t mt-4">
                    {newsData.map((news) => (
                        <Link to={`/news/${news.id}`} key={news.id} className="py-10 hover:bg-slate-50 transition-colors flex gap-6 md:gap-8 items-start border-b border-gray-100 last:border-0 group">
                            {/* Left Side: Numbering or Icon Placeholder */}
                            <div className="hidden md:flex flex-col items-center justify-start shrink-0 w-8 text-gray-400 font-bold text-lg pt-1">
                                <span>{news.id}</span>
                            </div>

                            {/* Right Side: Content */}
                            <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pr-4">
                                <div className="flex-1">
                                    <h3
                                        className="text-xl md:text-[1.4rem] font-bold text-gray-900 mb-3 leading-snug tracking-tight group-hover:opacity-70 transition-colors"
                                        dangerouslySetInnerHTML={{ __html: news.title }}
                                    />
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 font-medium mt-4">
                                        <span className="px-3 py-1 rounded inline-block" style={{ color: '#1e3a5f', backgroundColor: '#e8ecf4' }}>
                                            {news.date}
                                        </span>
                                    </div>
                                </div>

                                {/* Thumbnail Image */}
                                {news.image && (
                                    <div className="w-full md:w-32 h-24 shrink-0 rounded-md overflow-hidden bg-gray-100 border border-gray-200">
                                        <img
                                            src={news.image}
                                            alt={news.title.replace(/<[^>]+>/g, '')}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.classList.add('hidden'); }}
                                        />
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default News;
