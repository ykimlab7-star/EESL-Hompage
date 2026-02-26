import React from 'react';
import { Link } from 'react-router-dom';
import { galleryData } from '../data';

const Gallery = () => {
    // 연도별로 그룹화 (최신순)
    const sorted = [...galleryData].reverse();
    const grouped = sorted.reduce((acc, item) => {
        const year = item.date ? item.date.split('.')[0] : '기타';
        if (!acc[year]) acc[year] = [];
        acc[year].push(item);
        return acc;
    }, {});
    const years = Object.keys(grouped).sort((a, b) => b - a);

    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="text-white py-16 mb-12" style={{ backgroundColor: '#1e3a5f' }}>
                <div className="max-w-6xl mx-auto px-6">
                    <a href="/gallery" className="inline-block hover:opacity-80 transition-opacity">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 cursor-pointer">Gallery</h1>
                    </a>
                    <p className="text-blue-100 text-xl">Life at EESL.</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-20 space-y-16">
                {years.map((year) => (
                    <section key={year}>
                        {/* 연도 헤더 */}
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-3xl font-black" style={{ color: '#1e3a5f' }}>{year}</h2>
                            <div className="flex-1 h-[2px] bg-gray-200"></div>
                        </div>

                        {/* 해당 연도 그리드 */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {grouped[year].map((item) => (
                                <Link
                                    key={item.id}
                                    to={`/gallery/${item.id}`}
                                    className="group rounded-lg shadow-lg cursor-pointer overflow-hidden hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="aspect-[4/3] bg-white overflow-hidden flex items-center justify-center text-gray-400">
                                        {item.thumbnail ? (
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className={`w-full h-full ${item.thumbnailContain ? 'object-contain' : 'object-cover'} transition-transform duration-300 group-hover:scale-105`}
                                                onError={(e) => { e.target.style.display = 'none'; }}
                                            />
                                        ) : (
                                            <span>{item.title}</span>
                                        )}
                                    </div>
                                    <div className="bg-white px-4 py-3 border-t border-gray-100">
                                        {(() => {
                                            const match = item.title.match(/^(.*?)\s*'([^']+)'$/);
                                            if (match) {
                                                return (
                                                    <>
                                                        <p className="font-black text-base text-center" style={{ color: '#050d1f' }}>{match[1]}</p>
                                                        <p className="text-sm font-semibold text-center mt-1" style={{ color: '#1e3a5f' }}>'{match[2]}'</p>
                                                    </>
                                                );
                                            }
                                            return <p className="font-black text-base text-center" style={{ color: '#050d1f' }}>{item.title}</p>;
                                        })()}
                                        {item.description && <p className="text-sm font-semibold text-center mt-1" style={{ color: '#1e3a5f' }}>{item.description}</p>}
                                        {item.date && <p className="text-gray-400 text-xs text-center mt-1">{item.date}</p>}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default Gallery;

