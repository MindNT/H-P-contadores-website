interface HeroProps {
    className?: string;
}

/**
 * Componente Hero - Font-weight 400 (Regular) para títulos
 */
export const Hero = ({ className = '' }: HeroProps) => {
    return (
        <section className={`w-full h-[calc(100vh-150px)] flex flex-col items-center justify-center ${className}`}>
            {/* Contenedor centrado */}
            <div className="flex flex-col items-center justify-center">
                {/* Títulos - Font-weight 400 para coincidir con referencia */}
                <div className="text-center" style={{ marginBottom: '40px' }}>
                    <h1
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '40px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            verticalAlign: 'middle',
                            color: '#000000',
                            margin: 0,
                            marginBottom: '4px'
                        }}
                    >
                        CLARIDAD
                    </h1>
                    <h2
                        style={{
                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontStyle: 'normal',
                            fontSize: '40px',
                            lineHeight: '100%',
                            letterSpacing: '0%',
                            verticalAlign: 'middle',
                            color: '#389990',
                            margin: 0
                        }}
                    >
                        EN CADA NUMERO
                    </h2>
                </div>

                {/* Descripción */}
                <p
                    style={{
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '24px',
                        textAlign: 'center',
                        color: '#7A7A7A',
                        maxWidth: '536px',
                        margin: '0 auto',
                        marginBottom: '60px'
                    }}
                >
                    Transformamos la complejidad contable en decisiones simples y estratégicas para tu negocio.
                </p>

                {/* CTA Button */}
                <button
                    className="border-none cursor-pointer flex items-center justify-center transition-all hover:opacity-90"
                    style={{
                        width: '322px',
                        height: '60px',
                        background: '#389990',
                        borderRadius: '30px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '19px',
                        color: '#FFFFFF'
                    }}
                >
                    Explora nuestros servicios
                </button>
            </div>
        </section>
    );
};
