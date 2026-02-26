import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();
    const prevPathname = useRef('');

    useEffect(() => {
        // Don't scroll to top when returning to a list page from its detail page
        const detailToList = [
            { list: '/gallery', detail: '/gallery/' },
            { list: '/news', detail: '/news/' },
            { list: '/research', detail: '/research/' },
        ];
        const isReturningToList = detailToList.some(
            (r) => pathname === r.list && prevPathname.current.startsWith(r.detail)
        );
        if (!isReturningToList) {
            window.scrollTo(0, 0);
        }
        prevPathname.current = pathname;
    }, [pathname]);

    return null;
}
