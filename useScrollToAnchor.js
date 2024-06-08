import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToAnchor = (loading) => {
    const location = useLocation();

    useEffect(() => {
        const scrollToAnchor = () => {
            const hash = location.hash.slice(1);
            if (hash) {
                const anchor = document.getElementById(hash);
                anchor?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };

        if (!loading) { scrollToAnchor(); }

        window.addEventListener('hashchange', scrollToAnchor);
        return () => { window.removeEventListener('hashchange', scrollToAnchor); };

    }, [loading, location.hash]);
};

export default useScrollToAnchor;
