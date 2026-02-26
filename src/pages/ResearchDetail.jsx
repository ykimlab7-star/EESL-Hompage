import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { researchData } from '../data';

const ResearchDetail = () => {
    const { id } = useParams();
    const researchId = parseInt(id, 10);
    const research = researchData.find(r => r.id === researchId);

    if (!research) {
        return (
            <div className="pt-32 pb-20 min-h-screen flex flex-col items-center justify-center bg-gray-50">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Research Topic Not Found</h2>
                <Link to="/research" className="hover:underline font-semibold" style={{ color: '#050d1f' }}>← Back to Research</Link>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-white">
            {/* Header Section */}
            <div className="bg-slate-50 border-b border-slate-200 py-12 md:py-20 mb-10">
                <div className="max-w-4xl mx-auto px-6">
                    <Link to="/research" className="inline-flex items-center mb-8 font-medium transition-colors text-sm uppercase tracking-wider hover:opacity-70" style={{ color: '#050d1f' }}>
                        <span className="mr-2">&larr;</span> Back to Research
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-widest rounded-sm" style={{ backgroundColor: '#e8ecf4', color: '#050d1f' }}>
                            Research Area
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#050d1f] leading-tight mb-8">
                        {research.title}
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl">
                        {research.description}
                    </p>
                </div>
            </div>

            {/* Main Content Section */}
            <div className="max-w-4xl mx-auto px-6 pb-24">
                {/* Large Featured Image */}
                {research.image && (
                    <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm mb-16 bg-gray-100 flex items-center justify-center text-gray-400 font-medium border border-gray-200">
                        <img
                            src={research.image}
                            alt={research.title}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                )}

                {/* Article Content */}
                <article className="prose prose-lg prose-slate max-w-none text-gray-800 leading-loose prose-a:text-[#050d1f] hover:prose-a:opacity-70 prose-headings:text-[#050d1f] prose-img:rounded-xl">
                    <div dangerouslySetInnerHTML={{ __html: research.content }} />
                </article>
            </div>
        </div>
    );
};

export default ResearchDetail;
