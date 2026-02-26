import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import TemporaryHome from './pages/TemporaryHome';
import Research from './pages/Research';
import ResearchDetail from './pages/ResearchDetail';
import Members from './pages/Members';
import Publications from './pages/Publications';
import Gallery from './pages/Gallery';
import GalleryDetail from './pages/GalleryDetail';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Contact from './pages/Contact';

import ErrorBoundary from './components/ErrorBoundary';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className="min-h-screen bg-white flex flex-col">
                <Navbar />
                <main className="flex-grow">
                    <ErrorBoundary>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/research" element={<Research />} />
                            <Route path="/research/:id" element={<ResearchDetail />} />
                            <Route path="/members" element={<Members />} />
                            <Route path="/publications" element={<Publications />} />
                            <Route path="/gallery" element={<Gallery />} />
                            <Route path="/gallery/:id" element={<GalleryDetail />} />
                            <Route path="/news" element={<News />} />
                            <Route path="/news/:id" element={<NewsDetail />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </ErrorBoundary>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
