import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { membersData } from '../data';

const Members = () => {
    const [activeTab, setActiveTab] = useState('professor'); // professor, students, alumni
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const tab = queryParams.get('tab');
        if (tab && ['professor', 'students', 'alumni'].includes(tab)) {
            setActiveTab(tab);
        }
    }, [location]);

    const { professor } = membersData;

    return (
        <div className="pt-24 min-h-screen bg-white">
            <div className="text-white py-16 mb-12" style={{ backgroundColor: '#1e3a5f' }}>
                <div className="max-w-6xl mx-auto px-6">
                    <a href="/members" className="inline-block hover:opacity-80 transition-opacity">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 cursor-pointer">Members</h1>
                    </a>
                    <p className="text-blue-100 text-xl">Meet our team of researchers.</p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 pb-20">
                {/* Tabs */}
                <div className="flex border-b border-gray-200 mb-12">
                    {['professor', 'students', 'alumni'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-8 py-4 text-lg font-bold transition-colors border-b-2 ${activeTab === tab
                                ? 'border-[#1e3a5f] text-[#1e3a5f]'
                                : 'border-transparent text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Professor Content */}
                {activeTab === 'professor' && (
                    <div className="animate-fade-in-up font-sans">
                        {/* Top Profile Section */}
                        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
                            <div className="w-full md:w-1/3 max-w-[300px]">
                                <div className="aspect-[3/4] bg-gray-200 shadow-sm overflow-hidden flex items-center justify-center text-gray-400">
                                    {professor.image ? (
                                        <img
                                            src={professor.image}
                                            alt={professor.name}
                                            className="w-full h-full object-contain bg-white"
                                            onError={(e) => { e.target.style.display = 'none'; }}
                                        />
                                    ) : (
                                        <span className="text-xl">Professor Photo</span>
                                    )}
                                </div>
                            </div>
                            <div className="w-full md:w-2/3">
                                <h3 className="text-3xl font-extrabold text-[#113f41] mb-2 uppercase">{professor.name}</h3>
                                <div className="mb-8">
                                    <p className="text-xl text-gray-700 font-bold mb-1">{professor.title}</p>
                                    <p className="text-lg text-gray-600 mb-1">{professor.department}</p>
                                    <p className="text-lg text-gray-600">{professor.university}</p>
                                </div>

                                <div className="bg-gray-50 border border-gray-100 p-6 rounded-sm">
                                    <h4 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-2 mb-4 uppercase tracking-wider">Contact</h4>
                                    <ul className="space-y-3 text-[1.1rem] text-gray-700">
                                        <li><strong className="text-gray-900 w-16 inline-block">Email:</strong> {professor.email}</li>
                                        <li><strong className="text-gray-900 w-16 inline-block">Office:</strong> {professor.office}</li>
                                        <li><strong className="text-gray-900 w-16 inline-block">Phone:</strong> {professor.phone}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Sections */}
                        <div className="space-y-16 max-w-5xl mx-auto">
                            {/* Work Experience */}
                            <div className="border-t border-gray-200 pt-16">
                                <h4 className="text-3xl font-bold text-[#113f41] mb-10 tracking-tight">WORK EXPERIENCE</h4>
                                <ul className="space-y-6 text-[1.15rem] md:text-[1.2rem] text-gray-800 leading-relaxed font-light [&_strong]:font-bold [&_strong]:text-[#050d1f]">
                                    {professor.experience.map((exp, index) => (
                                        <li key={index} className="flex flex-row items-start">
                                            <span className="inline-block w-2 h-2 bg-[#113f41] mt-[0.4rem] mr-4 shrink-0"></span>
                                            <span dangerouslySetInnerHTML={{ __html: exp }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Education */}
                            <div className="border-t border-gray-200 pt-16">
                                <h4 className="text-3xl font-bold text-[#113f41] mb-10 tracking-tight">EDUCATION</h4>
                                <ul className="space-y-8 text-[1.15rem] md:text-[1.2rem] text-gray-800 leading-relaxed font-light [&_strong]:font-bold [&_strong]:text-[#050d1f]">
                                    {professor.education.map((edu, index) => (
                                        <li key={index} className="flex flex-row items-start">
                                            <span className="inline-block w-2 h-2 bg-[#113f41] mt-[0.4rem] mr-4 shrink-0"></span>
                                            <div dangerouslySetInnerHTML={{ __html: edu }} />
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Awards & Achievements */}
                            {professor.awards && professor.awards.length > 0 && (
                                <div className="border-t border-gray-200 pt-16">
                                    <h4 className="text-3xl font-bold text-[#113f41] mb-10 tracking-tight">AWARDS & ACHIEVEMENTS</h4>
                                    <ul className="space-y-6 text-[1.15rem] md:text-[1.2rem] text-gray-800 leading-relaxed font-light [&_strong]:font-bold [&_strong]:text-[#050d1f]">
                                        {professor.awards.map((award, index) => (
                                            <li key={index} className="flex flex-row items-start">
                                                <span className="inline-block w-2 h-2 bg-[#113f41] mt-[0.4rem] mr-4 shrink-0"></span>
                                                <span dangerouslySetInnerHTML={{ __html: award }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Students Content */}
                {activeTab === 'students' && (
                    <div className="animate-fade-in-up space-y-16">
                        {/* Graduate Students Section */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8 border-l-4 pl-4" style={{ color: '#1e3a5f', borderColor: '#1e3a5f' }}>Graduate Students</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {membersData.graduateStudents && membersData.graduateStudents.length > 0 ? (
                                    membersData.graduateStudents.map((student) => (
                                        <div key={student.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                                            <div className="aspect-square bg-white flex items-center justify-center text-gray-400 overflow-hidden relative">
                                                {student.image ? (
                                                    <img
                                                        src={student.image}
                                                        alt={student.name}
                                                        className="w-full h-full object-contain"
                                                        onError={(e) => { e.target.style.display = 'none'; }}
                                                    />
                                                ) : (
                                                    <span>No Photo</span>
                                                )}
                                            </div>
                                            <div className="p-6">
                                                <h4 className="text-xl font-bold text-gray-800 mb-1">{student.name}</h4>
                                                <p className="font-medium mb-1" style={{ color: '#1e3a5f' }}>{student.degree}</p>
                                                {student.email && <p className="text-gray-500 text-sm mb-2">{student.email}</p>}
                                                {student.research && <p className="text-gray-600 text-sm mt-2 pt-2 border-t border-gray-100"><strong>Research:</strong> {student.research}</p>}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 col-span-full">No graduate student data available.</p>
                                )}
                            </div>
                        </div>

                        {/* Undergraduate Students Section */}
                        <div>
                            <h3 className="text-2xl font-bold mb-8 border-l-4 pl-4" style={{ color: '#1e3a5f', borderColor: '#1e3a5f' }}>Undergraduate Students</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {membersData.undergraduateStudents && membersData.undergraduateStudents.length > 0 ? (
                                    membersData.undergraduateStudents.map((student) => (
                                        <div key={student.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                                            <div className="aspect-square bg-white flex items-center justify-center text-gray-400 overflow-hidden relative">
                                                {student.image ? (
                                                    <img
                                                        src={student.image}
                                                        alt={student.name}
                                                        className="w-full h-full object-contain"
                                                        onError={(e) => { e.target.style.display = 'none'; }}
                                                    />
                                                ) : (
                                                    <span>No Photo</span>
                                                )}
                                            </div>
                                            <div className="p-6">
                                                <h4 className="text-xl font-bold text-gray-800 mb-1">{student.name}</h4>
                                                <p className="font-medium mb-1" style={{ color: '#1e3a5f' }}>{student.degree}</p>
                                                {student.email && <p className="text-gray-500 text-sm">{student.email}</p>}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 col-span-full">No undergraduate student data available.</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Alumni Content */}
                {activeTab === 'alumni' && (
                    <div className="animate-fade-in-up">
                        <h3 className="text-2xl font-bold mb-8" style={{ color: '#1e3a5f' }}>Alumni</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {membersData.alumni && membersData.alumni.length > 0 ? (
                                membersData.alumni.map((alumnus) => (
                                    <div key={alumnus.id} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                                        <div className="aspect-square bg-white flex items-center justify-center text-gray-400 overflow-hidden relative">
                                            {alumnus.image ? (
                                                <img
                                                    src={alumnus.image}
                                                    alt={alumnus.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => { e.target.style.display = 'none'; }}
                                                />
                                            ) : (
                                                <span>No Photo</span>
                                            )}
                                        </div>
                                        <div className="p-6">
                                            <h4 className="text-xl font-bold text-gray-800 mb-1">{alumnus.name}</h4>
                                            <p className="font-medium mb-1" style={{ color: '#1e3a5f' }}>Degree: {alumnus.degree}</p>
                                            <p className="text-gray-600 text-sm mb-1">Graduated: {alumnus['graduate date']}</p>
                                            <p className="text-gray-800 text-sm">{alumnus.Current}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 col-span-full">No alumni data available.</p>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Members;
