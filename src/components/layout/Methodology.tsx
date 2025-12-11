interface MethodologyProps {
    className?: string;
}

/**
 * Componente Methodology - Rediseño según especificaciones
 */
export const Methodology = ({ className = '' }: MethodologyProps) => {
    return (
        <section
            id="metodologia"
            className={`relative w-full flex justify-center ${className}`}
            style={{
                boxSizing: 'border-box',
                position: 'relative',
                width: '100%',
                background: '#FFFFFF',
                margin: '0 auto',
                padding: '40px 20px 60px'
            }}
        >
            <div style={{ position: 'relative', width: '100%', maxWidth: '1300px', minHeight: '650px' }}>
                {/* Título principal: LLEVEMOS TU NEGOCIO A OTRO NIVEL */}
                <h2
                    style={{
                        position: 'absolute',
                        width: '70%',
                        maxWidth: '900px',
                        left: '5%',
                        top: '40px',
                        fontFamily: 'Nunito Sans',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '64px',
                        lineHeight: '1.25',
                        color: '#000000',
                        margin: 0
                    }}
                >
                    LLEVEMOS TU NEGOCIO A OTRO NIVEL
                </h2>

                {/* Subtítulo: Confía en nosotros */}
                <div
                    style={{
                        position: 'absolute',
                        left: '5%',
                        top: '260px',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '24px',
                        lineHeight: '33px',
                        color: '#389990'
                    }}
                >
                    Confía en nosotros
                </div>

                {/* Texto descriptivo largo */}
                <div
                    style={{
                        position: 'absolute',
                        width: '48%',
                        maxWidth: '600px',
                        left: '47%',
                        top: '260px',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '30px',
                        color: '#8A8A8A'
                    }}
                >
                    En H&P Contadores, <strong style={{ color: '#000000' }}>acompañamos a despachos y empresas cuya visión supera los límites de su narrativa actual.</strong> Nuestro enfoque va más allá de los números: refinamos, redefinimos y realineamos la historia contable y fiscal de nuestros clientes a medida que evolucionan sus metas, cambia la normativa y avanza el entorno económico.
                    <br /><br />
                    <strong style={{ color: '#000000' }}>Convertimos esa visión en una Idea Contable con Propósito:</strong> un eje claro que aporta coherencia a su estrategia financiera, define su posición en el mercado y fortalece su identidad profesional.
                </div>

                {/* Enlace: Conoce nuestra metodología */}
                <a
                    href="#metodologia"
                    style={{
                        position: 'absolute',
                        left: '47%',
                        top: '670px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '24px',
                        color: '#7A7A7A',
                        textDecoration: 'none',
                        display: 'inline-block'
                    }}
                >
                    Conoce nuestra metodología
                </a>

                {/* Línea decorativa debajo del enlace */}
                <div
                    style={{
                        position: 'absolute',
                        width: '200px',
                        height: '2px',
                        left: '47%',
                        top: '700px',
                        backgroundColor: '#389990'
                    }}
                />
            </div>
        </section>
    );
};
