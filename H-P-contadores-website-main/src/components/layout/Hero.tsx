import Logo from '../../assets/Logo.png';

interface HeroProps {
    className?: string;
}

/**
 * Componente Hero - Logo alineado con el texto descriptivo
 * Responsive: Desktop intacto, Mobile adaptado
 */
export const Hero = ({ className = '' }: HeroProps) => {
    return (
        <>
            <style>{`
                /* Animación Fade In con Blur - Sutil y profesional */
                @keyframes fadeInBlur {
                    from {
                        opacity: 0;
                        filter: blur(3px);
                    }
                    to {
                        opacity: 1;
                        filter: blur(0);
                    }
                }

                /* Aplicar animación escalonada a elementos del Hero */
                .hero-logo {
                    animation: fadeInBlur 1.5s cubic-bezier(0.4, 0, 0.2, 1) 0ms both;
                }

                .hero-claridad {
                    animation: fadeInBlur 1.5s cubic-bezier(0.4, 0, 0.2, 1) 200ms both;
                }

                .hero-text {
                    animation: fadeInBlur 1.5s cubic-bezier(0.4, 0, 0.2, 1) 400ms both;
                }

                .hero-numero {
                    animation: fadeInBlur 1.5s cubic-bezier(0.4, 0, 0.2, 1) 600ms both;
                }

                @media (max-width: 1024px) {
                    .hero-container {
                        padding: 20px !important;
                        min-height: auto !important;
                    }
                    
                    .hero-claridad-wrapper {
                        margin-bottom: 30px !important;
                        gap: 15px !important;
                    }
                    
                    .hero-claridad-wrapper img {
                        width: 70px !important;
                        height: 50px !important;
                    }
                    
                    .hero-claridad-wrapper h1 {
                        font-size: 70px !important;
                        line-height: 100px !important;
                    }
                    
                    .hero-text-wrapper {
                        flex-direction: column !important;
                        align-items: center !important;
                        margin-left: 0 !important;
                        gap: 20px !important;
                    }
                    
                    .hero-text-wrapper p {
                        width: 100% !important;
                        max-width: 500px !important;
                        text-align: center !important;
                    }
                    
                    .hero-text-wrapper p span {
                        margin-left: 0 !important;
                    }
                    
                    .hero-text-wrapper h2 {
                        font-size: 48px !important;
                        margin-left: 0 !important;
                    }
                    
                    .hero-numero-wrapper h2 {
                        font-size: 48px !important;
                    }
                    
                    .hero-cta {
                        position: relative !important;
                        bottom: auto !important;
                        left: auto !important;
                        margin-top: 30px !important;
                        text-align: center;
                    }
                }
                
                @media (max-width: 768px) {
                    .hero-section {
                        min-height: auto !important;
                        padding-bottom: 0 !important;
                        overflow: visible !important;
                    }
                    
                    .hero-container {
                        padding: 15px !important;
                        margin-bottom: 0px !important;
                        overflow: visible !important;
                    }
                    
                    .hero-claridad-wrapper {
                        flex-direction: column !important;
                        margin-bottom: 20px !important;
                        gap: 10px !important;
                    }
                    
                    .hero-claridad-wrapper img {
                        width: 60px !important;
                        height: 42px !important;
                    }
                    
                    .hero-claridad-wrapper h1 {
                        font-size: 48px !important;
                        line-height: 60px !important;
                    }
                    
                    .hero-text-wrapper p {
                        font-size: 14px !important;
                        line-height: 20px !important;
                        max-width: 100% !important;
                    }
                    
                    .hero-text-wrapper h2 {
                        font-size: 36px !important;
                    }
                    
                    .hero-numero-wrapper h2 {
                        font-size: 36px !important;
                    }
                    
                    .hero-cta {
                        margin-top: 20px !important;
                        margin-bottom: 0px !important;
                        position: relative !important;
                        bottom: auto !important;
                        left: 0 !important;
                        text-align: center !important;
                        padding-bottom: 10px !important;
                        overflow: visible !important;
                    }
                    
                    .hero-cta-line {
                        left: 50% !important;
                        transform: translateX(-50%) !important;
                        bottom: 0px !important;
                    }
                }
            `}</style>

            <section
                id="hero"
                className={`hero-section w-full flex flex-col items-center ${className}`}
                style={{
                    position: 'relative',
                    width: '100%',
                    minHeight: 'calc(100vh - 80px)',
                    background: '#FEFFFF',
                    boxSizing: 'border-box',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {/* Contenedor principal */}
                <div className="hero-container mx-auto px-4 pt-4" style={{ maxWidth: '1200px', width: '100%', position: 'relative', minHeight: '500px' }}>

                    {/* CLARIDAD con Logo - Centrado horizontalmente */}
                    <div className="hero-claridad-wrapper" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '40px',
                        marginTop: '20px',
                        gap: '20px'
                    }}>
                        {/* Logo - A la izquierda de CLARIDAD */}
                        <img
                            src={Logo}
                            alt="H&P Logo"
                            className="object-contain hero-logo"
                            style={{
                                width: '100px',
                                height: '70px'
                            }}
                        />

                        <h1
                            className="hero-claridad"
                            style={{
                                fontFamily: 'Nunito Sans',
                                fontWeight: 600,
                                fontStyle: 'normal',
                                fontSize: '110px',
                                lineHeight: '150px',
                                display: 'flex',
                                alignItems: 'center',
                                color: '#000000',
                                margin: 0,
                                letterSpacing: '0.05em'
                            }}
                        >
                            CLARIDAD
                        </h1>
                    </div>

                    {/* Contenedor flex para texto descriptivo y EN CADA */}
                    <div className="hero-text-wrapper hero-text" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        marginBottom: '20px',
                        gap: '0px',
                        marginLeft: '80px'
                    }}>
                        {/* Texto Descriptivo - Lado izquierdo */}
                        <p
                            style={{
                                width: '380px',
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                textAlign: 'left',
                                color: '#000000',
                                margin: 0
                            }}
                        >
                            Convertimos la complejidad contable en<br />
                            <span style={{ display: 'inline-block', marginLeft: '-30px' }}>decisiones claras, inteligentes y estratégicas</span><br />
                            que impulsan el crecimiento de tu negocio.
                        </p>

                        {/* EN CADA - Lado derecho */}
                        <h2
                            style={{
                                fontFamily: 'Nunito Sans',
                                fontWeight: 600,
                                fontStyle: 'normal',
                                fontSize: '72px',
                                lineHeight: '1.2',
                                display: 'flex',
                                alignItems: 'center',
                                color: '#389990',
                                margin: 0,
                                letterSpacing: '0.08em',
                                marginLeft: '20px'
                            }}
                        >
                            EN CADA
                        </h2>
                    </div>

                    {/* NUMERO - Centrado */}
                    <div className="hero-numero-wrapper hero-numero" style={{ display: 'flex', justifyContent: 'center' }}>
                        <h2
                            style={{
                                fontFamily: 'Nunito Sans',
                                fontWeight: 600,
                                fontStyle: 'normal',
                                fontSize: '72px',
                                lineHeight: '1.2',
                                display: 'flex',
                                alignItems: 'center',
                                color: '#389990',
                                margin: 0,
                                letterSpacing: '0.08em'
                            }}
                        >
                            NUMERO
                        </h2>
                    </div>
                </div>


                {/* Título - Nuestros servicios */}
                <div className="hero-cta" style={{ position: 'absolute', bottom: '60px', left: '90px' }}>
                    <span
                        style={{
                            fontFamily: 'Inter',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '17px',
                            color: '#7A7A7A',
                            display: 'inline-block'
                        }}
                    >
                        Nuestros servicios
                    </span>
                    {/* Línea decorativa debajo */}
                    <div
                        className="hero-cta-line"
                        style={{
                            position: 'absolute',
                            width: '150px',
                            height: '1px',
                            backgroundColor: '#389990',
                            opacity: 0.5,
                            bottom: '-5px',
                            left: '0'
                        }}
                    />
                </div>
            </section>
        </>
    );
};
