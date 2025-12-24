import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
}

/**
 * Componente ScrollAnimation - Anima elementos cuando entran en viewport
 * Fade-in suave para dar sensación premium
 */
export const ScrollAnimation = ({ children, className = '' }: ScrollAnimationProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        // Una vez visible, dejamos de observar
                        if (elementRef.current) {
                            observer.unobserve(elementRef.current);
                        }
                    }
                });
            },
            {
                threshold: 0.1, // Se activa cuando el 10% del elemento es visible
                rootMargin: '0px 0px -50px 0px' // Pequeño offset para mejor timing
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <>
            <style>{`
                .scroll-animation {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                                transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .scroll-animation.visible {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>

            <div
                ref={elementRef}
                className={`scroll-animation ${isVisible ? 'visible' : ''} ${className}`}
            >
                {children}
            </div>
        </>
    );
};
