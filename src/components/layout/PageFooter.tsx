 interface PageFooterProps {
    className?: string;
}

/**
 * Componente PageFooter - Pie de página del sitio
 */
export const PageFooter = ({ className = '' }: PageFooterProps) => {
    return (
        <>
            <style>{`
                @media (max-width: 768px) {
                    .page-footer-content {
                        flex-direction: column !important;
                        gap: 20px !important;
                        text-align: center !important;
                    }
                    
                    .page-footer-links {
                        flex-direction: column !important;
                        gap: 15px !important;
                    }
                }
            `}</style>

            <footer
                className={`w-full ${className}`}
                style={{
                    background: '#F5F5F5',
                    borderTop: '1px solid #E0E0E0',
                    padding: '40px 20px',
                    marginTop: '60px'
                }}
            >
                <div
                    className="page-footer-content"
                    style={{
                        maxWidth: '1400px',
                        margin: '0 auto',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '30px'
                    }}
                >
                    {/* Información de la empresa */}
                    <div style={{ flex: '1', minWidth: '250px' }}>
                        <h3
                            style={{
                                fontFamily: 'Nunito Sans',
                                fontWeight: 700,
                                fontSize: '20px',
                                color: '#000000',
                                margin: '0 0 10px 0'
                            }}
                        >
                            H&P Contadores
                        </h3>
                        <p
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '20px',
                                color: '#666666',
                                margin: 0
                            }}
                        >
                            Claridad en cada número
                        </p>
                    </div>

                    {/* Enlaces rápidos */}
                    <div
                        className="page-footer-links"
                        style={{
                            display: 'flex',
                            gap: '30px',
                            alignItems: 'center'
                        }}
                    >
                        <a
                            href="#hero"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 400,
                                fontSize: '14px',
                                color: '#666666',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}
                            className="hover:opacity-70"
                        >
                            Nosotros
                        </a>
                        <a
                            href="#nosotros"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 400,
                                fontSize: '14px',
                                color: '#666666',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}
                            className="hover:opacity-70"
                        >
                            Servicios
                        </a>
                        <a
                            href="#metodologia"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 400,
                                fontSize: '14px',
                                color: '#666666',
                                textDecoration: 'none',
                                transition: 'color 0.3s ease'
                            }}
                            className="hover:opacity-70"
                        >
                            Metodología
                        </a>
                    </div>

                    {/* Copyright */}
                    <div style={{ flex: '1', minWidth: '250px', textAlign: 'right' }}>
                        <p
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: 400,
                                fontSize: '14px',
                                color: '#999999',
                                margin: 0
                            }}
                        >
                            © {new Date().getFullYear()} H&P Contadores. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
