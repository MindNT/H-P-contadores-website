import { useState, useEffect } from 'react';

/**
 * Componente BackToTop - Botón flotante para volver arriba
 * Aparece después de hacer scroll hacia abajo
 */
export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Mostrar el botón después de 400px de scroll
            const shouldShow = scrollTop > 400;

            // Ocultar el botón cuando está cerca del footer (últimos 200px)
            const isNearBottom = scrollTop + windowHeight >= documentHeight - 200;

            setIsVisible(shouldShow && !isNearBottom);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            <style>{`
                .back-to-top-button {
                    position: fixed;
                    bottom: 40px;
                    right: 40px;
                    width: 56px;
                    height: 56px;
                    background: #389990;
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 20px rgba(56, 153, 144, 0.4);
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: 1000;
                    opacity: 0;
                    visibility: hidden;
                    transform: translateY(20px);
                }

                .back-to-top-button.visible {
                    opacity: 1;
                    visibility: visible;
                    transform: translateY(0);
                }

                .back-to-top-button:hover {
                    background: #2d7a73;
                    transform: translateY(-4px);
                    box-shadow: 0 8px 30px rgba(56, 153, 144, 0.5);
                }

                .back-to-top-button:active {
                    transform: translateY(-2px);
                }

                .back-to-top-arrow {
                    width: 0;
                    height: 0;
                    border-left: 8px solid transparent;
                    border-right: 8px solid transparent;
                    border-bottom: 12px solid white;
                }

                @media (max-width: 768px) {
                    .back-to-top-button {
                        bottom: 20px;
                        right: 20px;
                        width: 48px;
                        height: 48px;
                    }
                }
            `}</style>

            <button
                className={`back-to-top-button ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
                aria-label="Volver arriba"
            >
                <div className="back-to-top-arrow" />
            </button>
        </>
    );
};
