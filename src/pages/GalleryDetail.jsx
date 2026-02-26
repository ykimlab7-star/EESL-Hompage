import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { galleryData } from '../data';
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const item = galleryData.find((g) => g.id === parseInt(id));

    const [lightboxIndex, setLightboxIndex] = useState(null);

    if (!item) {
        return (
            <div className="pt-24 min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-500 text-xl mb-4">Gallery item not found.</p>
                    <button onClick={() => navigate(-1)} className="hover:underline" style={{ color: '#1e3a5f' }}>
                        BACK TO GALLERY
                    </button>
                </div>
            </div>
        );
    }

    const openLightbox = (index) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);
    const prevImage = () => setLightboxIndex((i) => (i - 1 + item.images.length) % item.images.length);
    const nextImage = () => setLightboxIndex((i) => (i + 1) % item.images.length);

    return (
        <div className="pt-24 min-h-screen bg-gray-50">

            {/* Blog-style Article */}
            <article className="max-w-3xl mx-auto px-6 py-12">

                {/* Back button */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 hover:opacity-70 mb-8 transition-colors text-sm font-medium" style={{ color: '#1e3a5f' }}
                >
                    <ArrowLeft size={16} />
                    BACK TO GALLERY
                </button>

                {/* Blog Header */}
                <header className="mb-10 border-b border-gray-200 pb-8">
                    {item.date && (
                        <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#1e3a5f' }}>{item.date}</p>
                    )}
                    <h1 className="text-4xl font-black mb-4 leading-tight" style={{ color: '#1e3a5f' }}>
                        {item.title}
                    </h1>
                </header>

                {/* Main Large Square Photo */}
                {item.images && item.images.length > 0 && (
                    <div
                        className="w-full aspect-square bg-white overflow-hidden shadow-xl mb-10 cursor-pointer group"
                        onClick={() => openLightbox(0)}
                    >
                        <img
                            src={item.images[0]}
                            alt={item.title}
                            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => { e.target.style.display = 'none'; }}
                        />
                    </div>
                )}

                {/* All images stacked vertically, same size */}
                {item.images && item.images.length > 1 && (
                    <div className="flex flex-col gap-6">
                        {item.images.slice(1).map((src, index) => (
                            <div
                                key={index}
                                className="w-full aspect-square bg-white overflow-hidden shadow-xl cursor-pointer group"
                                onClick={() => openLightbox(index + 1)}
                            >
                                <img
                                    src={src}
                                    alt={`${item.title} ${index + 2}`}
                                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                                    onError={(e) => { e.target.style.display = 'none'; }}
                                />
                            </div>
                        ))}
                    </div>
                )}

            </article>

            {/* Lightbox */}
            {lightboxIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    <button className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors" onClick={closeLightbox}>
                        <X size={32} />
                    </button>

                    {item.images.length > 1 && (
                        <button
                            className="absolute left-4 md:left-8 text-white hover:text-gray-300 transition-colors"
                            onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        >
                            <ChevronLeft size={48} />
                        </button>
                    )}

                    <div onClick={(e) => e.stopPropagation()} className="max-w-4xl max-h-[88vh] mx-16">
                        <img
                            src={item.images[lightboxIndex]}
                            alt={`${item.title} ${lightboxIndex + 1}`}
                            className="max-w-full max-h-[85vh] object-contain"
                        />
                        <p className="text-white text-center mt-3 text-sm opacity-60">
                            {lightboxIndex + 1} / {item.images.length}
                        </p>
                    </div>

                    {item.images.length > 1 && (
                        <button
                            className="absolute right-4 md:right-8 text-white hover:text-gray-300 transition-colors"
                            onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        >
                            <ChevronRight size={48} />
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};

export default GalleryDetail;
