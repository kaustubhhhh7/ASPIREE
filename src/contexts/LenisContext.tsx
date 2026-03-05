
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

interface LenisContextType {
    lenis: Lenis | null;
}

const LenisContext = createContext<LenisContextType>({
    lenis: null,
});

export const useLenis = () => useContext(LenisContext);

export const LenisProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lenis, setLenis] = useState<Lenis | null>(null);
    const reqIdRef = useRef<number | null>(null);

    useEffect(() => {
        // Disable lenis on mobile devices for performance
        if (window.innerWidth < 768) {
            return;
        }

        // Initialize Lenis for smooth scrolling
        const lenisInstance = new Lenis({
            duration: 1.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Standard easing - effective
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 0.8,
            touchMultiplier: 2,
        });

        setLenis(lenisInstance);

        // Animation frame loop
        const raf = (time: number) => {
            lenisInstance.raf(time);
            reqIdRef.current = requestAnimationFrame(raf);
        };
        reqIdRef.current = requestAnimationFrame(raf);

        return () => {
            lenisInstance.destroy();
            if (reqIdRef.current) cancelAnimationFrame(reqIdRef.current);
        };
    }, []);

    return (
        <LenisContext.Provider value={{ lenis }}>
            {children}
        </LenisContext.Provider>
    );
};
