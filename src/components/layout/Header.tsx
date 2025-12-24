import { useState, useEffect } from 'react';

interface HeaderProps {
    className?: string;
}

/**
 * Componente Header - Navegación centrada como en imagen de referencia
 * Responsive: Desktop intacto, Mobile con menú hamburguesa elegante
 * Sticky: Se mantiene fijo al hacer scroll
 */
export const Header = ({ className = '' }: HeaderProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Detectar scroll para agregar sombra al header y sección activa
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Detectar sección activa
            const sections = ['hero', 'servicios', 'nosotros', 'metodologia'];
            const scrollPosition = window.scrollY + 200;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <style>{`
                /* Hamburger Menu Styles */
                .hamburger-button {
                    display: none;
                    flex-direction: column;
                    justify-content: space-around;
                    width: 30px;
                    height: 24px;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    z-index: 1001;
                }

                .hamburger-line {
                    width: 30px;
                    height: 3px;
                    background-color: #000000;
                    border-radius: 10px;
                    transition: all 0.3s ease;
                    transform-origin: center;
                }

                .hamburger-button.open .hamburger-line:nth-child(1) {
                    transform: rotate(45deg) translateY(10px);
                }

                .hamburger-button.open .hamburger-line:nth-child(2) {
                    opacity: 0;
                }

                .hamburger-button.open .hamburger-line:nth-child(3) {
                    transform: rotate(-45deg) translateY(-10px);
                }

                /* Mobile Menu Overlay */
                .mobile-menu-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: rgba(0, 0, 0, 0.5);
                    backdrop-filter: blur(5px);
                    z-index: 999;
                    opacity: 0;
                    visibility: hidden;
                    transition: opacity 0.3s ease, visibility 0.3s ease;
                }

                .mobile-menu-overlay.open {
                    opacity: 1;
                    visibility: visible;
                }

                /* Mobile Menu Panel */
                .mobile-menu-panel {
                    position: fixed;
                    top: 0;
                    right: -100%;
                    width: 280px;
                    height: 100vh;
                    background: #FFFFFF;
                    box-shadow: -4px 0 20px rgba(0, 0, 0, 0.1);
                    z-index: 1000;
                    padding: 80px 30px 30px;
                    transition: right 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                    overflow-y: auto;
                }

                .mobile-menu-panel.open {
                    right: 0;
                }

                .mobile-menu-nav {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }

                .mobile-menu-link {
                    font-family: 'Nunito', sans-serif;
                    font-weight: 500;
                    font-size: 20px;
                    color: #000000;
                    text-decoration: none;
                    padding: 12px 0;
                    border-bottom: 1px solid #F5F5F5;
                    transition: all 0.3s ease;
                    position: relative;
                }

                .mobile-menu-link:hover {
                    color: #389990;
                    padding-left: 10px;
                }

                .mobile-menu-link::before {
                    content: '';
                    position: absolute;
                    left: 0;
                    bottom: -1px;
                    width: 0;
                    height: 2px;
                    background: #389990;
                    transition: width 0.3s ease;
                }

                .mobile-menu-link:hover::before {
                    width: 40px;
                }

                .mobile-menu-contact {
                    margin-top: 40px;
                    padding-top: 30px;
                    border-top: 2px solid #389990;
                }

                .mobile-menu-contact a {
                    font-family: 'Nunito', sans-serif;
                    font-weight: 600;
                    font-size: 18px;
                    color: #389990;
                    text-decoration: none;
                    display: inline-block;
                    padding: 12px 24px;
                    border: 2px solid #389990;
                    border-radius: 8px;
                    transition: all 0.3s ease;
                }

                .mobile-menu-contact a:hover {
                    background: #389990;
                    color: #FFFFFF;
                }

                /* Sticky Header Styles */
                .header-responsive {
                    position: sticky;
                    top: 0;
                    background: #FFFFFF;
                    z-index: 50;
                    transition: all 0.3s ease;
                }

                .header-responsive.scrolled {
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                /* Indicador de sección activa */
                .nav-link {
                    position: relative;
                    transition: color 0.3s ease;
                }

                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background: #389990;
                    transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .nav-link.active::after {
                    width: 100%;
                }

                .nav-link.active {
                    color: #389990 !important;
                }

                @media (max-width: 1024px) {
                    .hamburger-button {
                        display: flex;
                    }

                    .header-nav-desktop,
                    .header-contact-desktop {
                        display: none !important;
                    }

                    .header-responsive {
                        justify-content: space-between !important;
                        padding: 20px 30px !important;
                        margin-top: 0 !important;
                    }
                }

                @media (min-width: 1025px) {
                    .mobile-menu-overlay,
                    .mobile-menu-panel {
                        display: none !important;
                    }
                }
            `}</style>

            <header
                className={`header-responsive w-full mt-12 flex items-center relative ${isScrolled ? 'scrolled' : ''} ${className}`}
                style={{
                    paddingTop: '32px',
                    paddingBottom: '24px',
                    paddingLeft: '60px',
                    paddingRight: '60px'
                }}
            >
                {/* Título H&P Contadores - Posición izquierda */}
                <div className="flex-shrink-0">
                    <h1
                        style={{
                            width: '186px',
                            height: '33px',
                            fontFamily: 'Nunito Sans',
                            fontStyle: 'normal',
                            fontWeight: 700,
                            fontSize: '24px',
                            lineHeight: '33px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#000000',
                            margin: 0
                        }}
                    >
                        H&P Contadores
                    </h1>
                </div>

                {/* Navegación Desktop - Centrada absolutamente */}
                <nav className="header-nav-desktop absolute left-1/2 transform -translate-x-1/2 flex items-center gap-[100px]">
                    <a
                        href="#hero"
                        className={`nav-link no-underline transition-colors hover:opacity-70 ${activeSection === 'hero' ? 'active' : ''}`}
                        style={{
                            width: '67px',
                            height: '22px',
                            fontFamily: 'Nunito',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '22px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#000000'
                        }}
                    >
                        Nosotros
                    </a>
                    <a
                        href="#nosotros"
                        className={`nav-link no-underline transition-colors hover:opacity-70 ${activeSection === 'nosotros' ? 'active' : ''}`}
                        style={{
                            width: '67px',
                            height: '22px',
                            fontFamily: 'Nunito',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '22px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#000000'
                        }}
                    >
                        Servicios
                    </a>
                    <a
                        href="#metodologia"
                        className={`nav-link no-underline transition-colors hover:opacity-70 ${activeSection === 'metodologia' ? 'active' : ''}`}
                        style={{
                            width: '67px',
                            height: '22px',
                            fontFamily: 'Nunito',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '22px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#000000'
                        }}
                    >
                        Metodologia
                    </a>
                </nav>

                {/* Contactar Desktop - Posición derecha con línea */}
                <div className="header-contact-desktop" style={{ position: 'relative', marginLeft: 'auto' }}>
                    <a
                        href="#contactar"
                        className="no-underline transition-colors hover:opacity-70"
                        style={{
                            width: '71px',
                            height: '22px',
                            fontFamily: 'Nunito',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '16px',
                            lineHeight: '22px',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#000000'
                        }}
                    >
                        Contactar
                    </a>
                    {/* Línea decorativa debajo */}
                    <div
                        style={{
                            position: 'absolute',
                            width: '150px',
                            height: '1px',
                            backgroundColor: '#389990',
                            opacity: 0.5,
                            bottom: '-5px',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }}
                    />
                </div>

                {/* Hamburger Button - Solo Mobile */}
                <button
                    className={`hamburger-button ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                    aria-expanded={isMenuOpen}
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}
                onClick={closeMenu}
            />

            {/* Mobile Menu Panel */}
            <div className={`mobile-menu-panel ${isMenuOpen ? 'open' : ''}`}>
                <nav className="mobile-menu-nav">
                    <a href="#hero" className="mobile-menu-link" onClick={closeMenu}>
                        Nosotros
                    </a>
                    <a href="#nosotros" className="mobile-menu-link" onClick={closeMenu}>
                        Servicios
                    </a>
                    <a href="#metodologia" className="mobile-menu-link" onClick={closeMenu}>
                        Metodología
                    </a>
                </nav>

                <div className="mobile-menu-contact">
                    <a href="#contactar" onClick={closeMenu}>
                        Contactar
                    </a>
                </div>
            </div>
        </>
    );
};
