import React from 'react';
import { publicationsData } from '../data';
import { FileText } from 'lucide-react';

const Publications = () => {
    return (
        <div className="max-w-5xl mx-auto px-4">
            <div className="space-y-6">
                {publicationsData.map((pub) => (
                    <div key={pub.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 text-blue-600">
                                <FileText size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                                    {pub.title}
                                </h4>
                                <p className="text-gray-600 text-sm mb-2">{pub.authors}</p>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="font-medium text-blue-800 bg-blue-50 px-2 py-0.5 rounded">
                                        {pub.journal}
                                    </span>
                                    <span className="text-gray-500">{pub.year}</span>
                                    {pub.doi && (
                                        <a
                                            href={`https://doi.org/${pub.doi}`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-blue-500 hover:underline"
                                        >
                                            DOI Link
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <a href="#" className="text-blue-600 font-medium hover:text-blue-800">
                    View All Publications →
                </a>
            </div>
        </div>
    );
};

export default Publications;
