import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "../contexts/LenisContext";

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const { lenis } = useLenis();

    useEffect(() => {
        // Using a small timeout to ensure the scroll happens after the route has fully transitioned
        // and the new page content has started rendering.
        const timer = setTimeout(() => {
            if (!hash) {
                if (lenis) {
                    lenis.scrollTo(0, { immediate: true });
                } else {
                    window.scrollTo(0, 0);
                }
            } else {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);
                if (element) {
                    const offset = 80;
                    if (lenis) {
                        lenis.scrollTo(element, { offset: -offset });
                    } else {
                        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
                        window.scrollTo({
                            top: elementPosition - offset,
                            behavior: 'smooth'
                        });
                    }
                }
            }
        }, 50);

        return () => clearTimeout(timer);
    }, [pathname, hash, lenis]);

    return null;
};

export default ScrollToTop;
