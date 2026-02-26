import React from 'react';

const Section = ({ id, title, children, bgColor = 'bg-white' }) => {
    return (
        <section id={id} className={`py-16 px-4 md:px-12 ${bgColor}`}>
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b-2 border-blue-600 inline-block pb-1">
                    {title}
                </h2>
                <div>{children}</div>
            </div>
        </section>
    );
};

export default Section;
