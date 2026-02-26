import React from 'react';
import { membersData } from '../data';

const Members = () => {
    const { professor } = membersData;

    return (
        <div className="max-w-6xl mx-auto px-6">
            {/* Professor Section */}
            <div className="flex flex-col md:flex-row gap-12 items-start mb-20">
                {/* Placeholder for Professor Image */}
                <div className="w-full md:w-1/3">
                    <div className="aspect-[3/4] bg-gray-200 rounded-lg shadow-lg flex items-center justify-center text-gray-400">
                        <span className="text-xl">Professor Photo</span>
                    </div>
                </div>

                {/* Professor Info */}
                <div className="w-full md:w-2/3">
                    <h3 className="text-3xl font-bold text-blue-900 mb-2">{professor.name}</h3>
                    <p className="text-xl text-blue-600 mb-6">{professor.title}</p>

                    <div className="space-y-6">
                        <div>
                            <h4 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-2 mb-3">Contact</h4>
                            <ul className="space-y-1 text-gray-600">
                                <li><strong>Email:</strong> {professor.email}</li>
                                <li><strong>Office:</strong> {professor.office}</li>
                                <li><strong>Phone:</strong> {professor.phone}</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-2 mb-3">Education</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                {professor.education.map((edu, index) => (
                                    <li key={index}>{edu}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-bold text-gray-800 border-b border-gray-200 pb-2 mb-3">Work Experience</h4>
                            <ul className="list-disc list-inside space-y-1 text-gray-600">
                                {professor.experience.map((exp, index) => (
                                    <li key={index}>{exp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Members;
