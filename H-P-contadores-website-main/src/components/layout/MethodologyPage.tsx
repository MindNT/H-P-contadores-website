interface MethodologyPageProps {
    className?: string;
}

/**
 * Página completa de Metodología de Trabajo
 * Diseño coherente con el resto del sitio
 */
export const MethodologyPage = ({ className = '' }: MethodologyPageProps) => {
    return (
        <>
            <style>{`
                @media (max-width: 1024px) {
                    .methodology-page-section {
                        padding: 30px 20px !important;
                    }
                    
                    .methodology-page-title {
                        font-size: 48px !important;
                        line-height: 1.2 !important;
                        margin-bottom: 30px !important;
                    }
                    
                    .methodology-page-intro {
                        font-size: 16px !important;
                        line-height: 24px !important;
                        margin-bottom: 40px !important;
                    }
                    
                    .methodology-stage-title {
                        font-size: 28px !important;
                        line-height: 1.3 !important;
                    }
                    
                    .methodology-stage-description,
                    .methodology-stage-list {
                        font-size: 15px !important;
                        line-height: 22px !important;
                    }
                }
                
                @media (max-width: 768px) {
                    .methodology-page-section {
                        padding: 20px 15px !important;
                    }
                    
                    .methodology-page-title {
                        font-size: 36px !important;
                        margin-bottom: 20px !important;
                    }
                    
                    .methodology-page-intro {
                        font-size: 14px !important;
                        line-height: 20px !important;
                    }
                    
                    .methodology-stage-title {
                        font-size: 24px !important;
                    }
                    
                    .methodology-stage-description,
                    .methodology-stage-list {
                        font-size: 14px !important;
                        line-height: 20px !important;
                    }
                }
            `}</style>

            <section
                className={`methodology-page-section w-full ${className}`}
                style={{
                    background: '#FEFFFF',
                    padding: '80px 20px 100px',
                    boxSizing: 'border-box'
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Botón de regreso */}
                    <a
                        href="/"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontFamily: 'Inter',
                            fontSize: '14px',
                            color: '#7A7A7A',
                            textDecoration: 'none',
                            marginBottom: '40px',
                            transition: 'color 0.3s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#389990'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#7A7A7A'}
                    >
                        <span>←</span> Regresar
                    </a>

                    {/* Título principal */}
                    <h1
                        className="methodology-page-title"
                        style={{
                            fontFamily: 'Nunito Sans',
                            fontWeight: 600,
                            fontSize: '64px',
                            lineHeight: '1.2',
                            color: '#000000',
                            marginBottom: '40px'
                        }}
                    >
                        Nuestra Metodología de Trabajo
                    </h1>

                    {/* Introducción */}
                    <p
                        className="methodology-page-intro"
                        style={{
                            fontFamily: 'Nunito',
                            fontWeight: 500,
                            fontSize: '18px',
                            lineHeight: '28px',
                            color: '#8A8A8A',
                            marginBottom: '60px',
                            maxWidth: '900px'
                        }}
                    >
                        En nuestro despacho contable, implementamos una metodología clara, estructurada y eficiente, que garantiza el cumplimiento puntual de las obligaciones fiscales de nuestros clientes y maximiza la seguridad en sus operaciones contables y financieras. Nuestro proceso se compone de las siguientes etapas:
                    </p>

                    {/* Etapa 1: Diagnóstico Inicial */}
                    <div style={{ marginBottom: '50px' }}>
                        <h2
                            className="methodology-stage-title"
                            style={{
                                fontFamily: 'Nunito Sans',
                                fontWeight: 600,
                                fontSize: '36px',
                                lineHeight: '1.3',
                                color: '#389990',
                                marginBottom: '20px'
                            }}
                        >
                            Diagnóstico Inicial
                        </h2>
                        <p
                            className="methodology-stage-description"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#000000',
                                marginBottom: '15px'
                            }}
                        >
                            Realizamos una reunión de análisis para conocer la situación actual del cliente:
                        </p>
                        <ul
                            className="methodology-stage-list"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#8A8A8A',
                                paddingLeft: '20px',
                                listStyleType: 'disc'
                            }}
                        >
                            <li>Tipo de contribuyente y régimen fiscal.</li>
                            <li>Obligaciones fiscales activas.</li>
                            <li>Situación contable, fiscal y laboral.</li>
                            <li>Créditos fiscales o adeudos vigentes.</li>
                            <li>Herramientas tecnológicas disponibles (CFDI, SAT, IMSS, etc.).</li>
                            <li>Se elabora una ficha de cliente con toda la información relevante.</li>
                        </ul>
                    </div>

                    {/* Etapa 2: Planeación y Estrategia Fiscal */}
                    <div style={{ marginBottom: '50px' }}>
                        <h2
                            className="methodology-stage-title"
                            style={{
                                fontFamily: 'Nunito Sans',
                                fontWeight: 600,
                                fontSize: '36px',
                                lineHeight: '1.3',
                                color: '#389990',
                                marginBottom: '20px'
                            }}
                        >
                            Planeación y Estrategia Fiscal
                        </h2>
                        <p
                            className="methodology-stage-description"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#000000',
                                marginBottom: '15px'
                            }}
                        >
                            Con base en el diagnóstico:
                        </p>
                        <ul
                            className="methodology-stage-list"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#8A8A8A',
                                paddingLeft: '20px',
                                listStyleType: 'disc'
                            }}
                        >
                            <li>Diseñamos un calendario fiscal personalizado.</li>
                            <li>Definimos el régimen fiscal más conveniente y legal.</li>
                            <li>Optimizamos deducciones y beneficios fiscales aplicables.</li>
                            <li>Proponemos soluciones en caso de irregularidades o créditos fiscales.</li>
                        </ul>
                    </div>

                    {/* Etapa 3: Implementación Contable y Fiscal */}
                    <div style={{ marginBottom: '50px' }}>
                        <h2
                            className="methodology-stage-title"
                            style={{
                                fontFamily: 'Nunito Sans',
                                fontWeight: 600,
                                fontSize: '36px',
                                lineHeight: '1.3',
                                color: '#389990',
                                marginBottom: '20px'
                            }}
                        >
                            Implementación Contable y Fiscal
                        </h2>
                        <p
                            className="methodology-stage-description"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#000000',
                                marginBottom: '15px'
                            }}
                        >
                            Ponemos en marcha la operación mensual:
                        </p>
                        <ul
                            className="methodology-stage-list"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#8A8A8A',
                                paddingLeft: '20px',
                                listStyleType: 'disc',
                                marginBottom: '15px'
                            }}
                        >
                            <li>Registro contable conforme a la normatividad.</li>
                            <li>Revisión y validación de CFDI emitidos y recibidos.</li>
                            <li>Cálculo y presentación de impuestos mensuales y provisionales.</li>
                            <li>Cálculo de nómina y obligaciones de seguridad social.</li>
                            <li>Gestión de pagos y declaraciones ante SAT, IMSS e INFONAVIT.</li>
                        </ul>
                        <p
                            className="methodology-stage-description"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#8A8A8A'
                            }}
                        >
                            Mantenemos informados a nuestros clientes de sus pagos y movimientos fiscales.
                        </p>
                    </div>

                    {/* Etapa 4: Monitoreo y Actualización Constante */}
                    <div style={{ marginBottom: '50px' }}>
                        <h2
                            className="methodology-stage-title"
                            style={{
                                fontFamily: 'Nunito Sans',
                                fontWeight: 600,
                                fontSize: '36px',
                                lineHeight: '1.3',
                                color: '#389990',
                                marginBottom: '20px'
                            }}
                        >
                            Monitoreo y Actualización Constante
                        </h2>
                        <ul
                            className="methodology-stage-list"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#8A8A8A',
                                paddingLeft: '20px',
                                listStyleType: 'disc',
                                marginBottom: '15px'
                            }}
                        >
                            <li>Seguimiento continuo de obligaciones fiscales.</li>
                            <li>Análisis financiero periódico.</li>
                            <li>Notificaciones ante cambios legislativos o reformas fiscales.</li>
                            <li>Atención a requerimientos de autoridad y auditorías.</li>
                        </ul>
                        <p
                            className="methodology-stage-description"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#8A8A8A'
                            }}
                        >
                            Nuestro despacho mantiene comunicación directa y oportuna mediante correo electrónico, teléfono y buzón tributario.
                        </p>
                    </div>

                    {/* Etapa 5: Cierre Anual y Planeación del Siguiente Ejercicio */}
                    <div style={{ marginBottom: '50px' }}>
                        <h2
                            className="methodology-stage-title"
                            style={{
                                fontFamily: 'Nunito Sans',
                                fontWeight: 600,
                                fontSize: '36px',
                                lineHeight: '1.3',
                                color: '#389990',
                                marginBottom: '20px'
                            }}
                        >
                            Cierre Anual y Planeación del Siguiente Ejercicio
                        </h2>
                        <ul
                            className="methodology-stage-list"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#8A8A8A',
                                paddingLeft: '20px',
                                listStyleType: 'disc',
                                marginBottom: '15px'
                            }}
                        >
                            <li>Preparación de declaración anual y estados financieros.</li>
                            <li>Determinación de utilidades, reparto de PTU y provisiones.</li>
                            <li>Planeación fiscal del nuevo ejercicio.</li>
                            <li>Informe final del ejercicio contable.</li>
                        </ul>
                        <p
                            className="methodology-stage-description"
                            style={{
                                fontFamily: 'Nunito',
                                fontWeight: 500,
                                fontSize: '16px',
                                lineHeight: '24px',
                                color: '#000000'
                            }}
                        >
                            Nuestro objetivo es que el cierre anual sea claro, transparente y sin contingencias.
                        </p>
                    </div>

                    {/* CTA final */}
                    <div
                        style={{
                            marginTop: '80px',
                            padding: '40px',
                            background: '#F8F9FA',
                            borderRadius: '8px',
                            textAlign: 'center'
                        }}
                    >
                        <h3
                            style={{
                                fontFamily: 'Nunito Sans',
                                fontWeight: 600,
                                fontSize: '28px',
                                color: '#389990',
                                marginBottom: '20px'
                            }}
                        >
                            ¿Listo para llevar tu negocio al siguiente nivel?
                        </h3>
                        <a
                            href="/#nosotros"
                            style={{
                                display: 'inline-block',
                                padding: '15px 40px',
                                background: '#389990',
                                color: '#FFFFFF',
                                fontFamily: 'Inter',
                                fontSize: '16px',
                                fontWeight: 500,
                                textDecoration: 'none',
                                borderRadius: '4px',
                                transition: 'background 0.3s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = '#2d7a73'}
                            onMouseLeave={(e) => e.currentTarget.style.background = '#389990'}
                        >
                            Contáctanos
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};
