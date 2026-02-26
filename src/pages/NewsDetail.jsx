import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { newsData } from '../data';

const NewsDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const news = newsData.find(item => item.id === parseInt(id));

    if (!news) {
        return (
            <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">News Not Found</h2>
                <button onClick={() => navigate(-1)} className="hover:underline font-semibold" style={{ color: '#1e3a5f' }}>← Back to News</button>
            </div>
        );
    }

    // Format content: Convert double newlines to paragraph tags for proper spacing
    const formattedContent = news.content
        .split('\n\n')
        .map(paragraph => `<p class="mb-6">${paragraph}</p>`)
        .join('');

    return (
        <div className="pt-24 min-h-screen bg-white flex flex-col font-sans">
            {/* Header Section */}
            <div className="bg-slate-50 border-b border-slate-200 py-12 md:py-20 mb-10">
                <div className="max-w-3xl mx-auto px-6">
                    <button onClick={() => navigate(-1)} className="inline-flex items-center mb-8 font-medium transition-colors text-sm uppercase tracking-wider hover:opacity-70" style={{ color: '#1e3a5f' }}>
                        <span className="mr-2">&larr;</span> Back to News
                    </button>

                    <div className="mb-6 flex items-center gap-4">
                        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm" style={{ backgroundColor: '#e8ecf4', color: '#1e3a5f' }}>
                            Press Release
                        </span>
                        <time className="text-slate-500 text-sm font-medium border-l border-slate-300 pl-4">
                            {news.date}
                        </time>
                    </div>

                    <h1
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.2] tracking-tight mb-6"
                        style={{ fontFamily: "Georgia, serif" }}
                        dangerouslySetInnerHTML={{ __html: news.title }}
                    />
                </div>
            </div>

            {/* Article Body */}
            <article className="max-w-3xl mx-auto px-6 pb-24 flex-grow w-full">
                {news.image && (
                    <figure className="mb-12">
                        <div className="rounded-lg overflow-hidden border border-slate-100 bg-slate-50 shadow-sm">
                            <img
                                src={news.image}
                                alt={news.title}
                                className="w-full h-auto object-cover max-h-[600px]"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                        <figcaption
                            className="mt-3 text-center text-sm text-slate-500 italic"
                            dangerouslySetInnerHTML={{ __html: news.title }}
                        />
                    </figure>
                )}

                {/* Content rendered safely as HTML */}
                <div
                    className="prose prose-lg max-w-none text-slate-800 leading-loose prose-p:text-[1.1rem] prose-p:font-light"
                    style={{ fontFamily: "'Noto Serif', Georgia, serif" }}
                    dangerouslySetInnerHTML={{ __html: formattedContent }}
                />

                {/* Footer Line */}
                <div className="mt-16 pt-8 border-t border-slate-200 flex justify-between items-center">
                    <span className="text-slate-500 text-sm">Electrochemical Energy Storage Laboratory</span>
                    <div className="flex gap-4">
                        {/* Placeholder for sharing icons */}
                        <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-colors text-slate-500 font-bold text-xs" title="Share on LinkedIn">in</div>
                        <div className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center cursor-pointer transition-colors text-slate-500 font-bold text-xs" title="Share on Twitter">X</div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default NewsDetail;
