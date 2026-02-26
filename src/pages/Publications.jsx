import React, { useState, useMemo } from 'react';
import { publications, membersData } from '../data';

const Publications = () => {
    // Determine unique years from the data, sorted descending
    const years = useMemo(() => {
        const yearSet = new Set(publications.map(pub => pub.year));
        return Array.from(yearSet).sort((a, b) => b - a);
    }, []);

    const [selectedYear, setSelectedYear] = useState('전체');

    // Filter publications based on selected year
    const filteredPublications = useMemo(() => {
        if (selectedYear === '전체') return publications;
        return publications.filter(pub => pub.year === selectedYear);
    }, [selectedYear]);

    // Extract member names for highlighting in authors list
    const memberNames = useMemo(() => {
        const names = [];
        if (membersData.professor && membersData.professor.name) {
            names.push(membersData.professor.name.split(' (')[0]);
        }
        if (membersData.graduateStudents) names.push(...membersData.graduateStudents.map(s => s.name));
        if (membersData.undergraduateStudents) names.push(...membersData.undergraduateStudents.map(s => s.name));
        if (membersData.alumni) names.push(...membersData.alumni.map(s => s.name));
        // Sort by length descending to match longer names first
        return names.filter(Boolean).sort((a, b) => b.length - a.length);
    }, []);

    // Helper to bold member names
    const formatAuthors = (authorsStr) => {
        if (!authorsStr) return '';
        let formatted = authorsStr;
        memberNames.forEach(name => {
            // Regex to match exact names with boundaries to avoid partial matches
            const regex = new RegExp(`\\b(${name})\\b`, 'gi');
            formatted = formatted.replace(regex, '<strong class="font-extrabold" style="color:#1e3a5f">$1</strong>');
        });
        return formatted;
    };

    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="text-white py-16 mb-12" style={{ backgroundColor: '#1e3a5f' }}>
                <div className="max-w-6xl mx-auto px-6">
                    <a href="/publications" className="inline-block hover:opacity-80 transition-opacity">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 cursor-pointer">Publications</h1>
                    </a>
                    <p className="text-blue-100 text-xl">Selected research outcomes and papers.</p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 pb-20">
                {/* Year Filter Tabs */}
                <div className="flex flex-wrap gap-3 mb-8">
                    <button
                        onClick={() => setSelectedYear('전체')}
                        className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${selectedYear === '전체'
                            ? 'bg-[#3C6E85] text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        전체
                    </button>
                    {years.map(year => (
                        <button
                            key={year}
                            onClick={() => setSelectedYear(year)}
                            className={`px-5 py-2 rounded-full font-bold text-sm transition-colors ${selectedYear === year
                                ? 'bg-[#3C6E85] text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Total Count Info */}
                <div className="text-sm text-gray-500 mb-12">
                    Total <span className="font-bold text-gray-800">{filteredPublications.length}</span>건 1 페이지
                </div>

                {/* Main Content Area */}
                <div className="space-y-12">
                    {/* Render Group Header if '전체' is not selected, but screenshot implies grouping or at least header */}
                    {selectedYear !== '전체' && (
                        <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 border-gray-900 pb-4 mb-6">
                            {selectedYear}
                        </h2>
                    )}
                    {selectedYear === '전체' && (
                        <h2 className="text-3xl font-extrabold text-gray-900 border-b-2 border-gray-900 pb-4 mb-6">
                            All Publications
                        </h2>
                    )}

                    <div className="flex flex-col gap-0 border-b border-gray-100">
                        {filteredPublications.map((pub) => (
                            <div key={pub.id} className="py-10 bg-white hover:bg-slate-50 transition-colors flex gap-6 md:gap-8 items-start border-b border-gray-100 last:border-0 relative">
                                {/* Left Side: Numbering */}
                                <div className="hidden md:flex flex-col items-center justify-start shrink-0 w-8 text-gray-400 font-bold text-lg pt-1">
                                    <span>{pub.id}</span>
                                </div>

                                {/* Right Side: Content */}
                                <div className="flex-1">
                                    <h4 className="text-xl md:text-[1.4rem] font-bold text-gray-900 mb-3 leading-snug tracking-tight">
                                        {pub.title}
                                    </h4>
                                    <p
                                        className="text-gray-600 text-base md:text-[1.1rem] mb-4 leading-relaxed font-light"
                                        dangerouslySetInnerHTML={{ __html: formatAuthors(pub.authors) }}
                                    />
                                    <div className="flex flex-wrap items-center gap-2 text-sm italic text-gray-500">
                                        <span className="font-semibold text-gray-600">
                                            {pub.journal}
                                        </span>
                                        {pub.doi && (
                                            <>
                                                <span className="px-1 text-gray-300">|</span>
                                                <a
                                                    href={`https://doi.org/${pub.doi}`}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-gray-400 hover:opacity-70 transition-colors"
                                                >
                                                    DOI
                                                </a>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Publications;
