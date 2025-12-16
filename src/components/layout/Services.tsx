import ServicesBackgroundImage from '../../assets/Imagenes Servicios/servicio-fondo.jpeg';

interface ServicesProps {
    className?: string;
}

/**
 * Componente Services - Nuevo diseño con imagen de fondo y texto de servicios
 * Responsive: Desktop intacto, Mobile adaptado
 */
export const Services = ({ className = '' }: ServicesProps) => {
    return (
        <>
            <style>{`
                @media (max-width: 1024px) {
                    .services-section {
                        padding: 20px 15px 40px !important;
                        min-height: 600px !important;
                    }
                    
                    .services-image {
                        width: 95% !important;
                        height: 450px !important;
                    }
                    
                    .services-text {
                        width: 90% !important;
                        top: 500px !important;
                        font-size: 20px !important;
                        line-height: 28px !important;
                    }
                }
                
                @media (max-width: 768px) {
                    .services-section {
                        padding: 15px 10px 30px !important;
                        min-height: 500px !important;
                    }
                    
                    .services-image {
                        width: 100% !important;
                        height: 300px !important;
                        top: 15px !important;
                    }
                    
                    .services-text {
                        width: 95% !important;
                        top: 340px !important;
                        font-size: 16px !important;
                        line-height: 24px !important;
                        padding: 0 10px !important;
                    }
                }
            `}</style>

            <section
                id="servicios"
                className={`services-section relative w-full flex justify-center ${className}`}
                style={{
                    boxSizing: 'border-box',
                    position: 'relative',
                    width: '100%',
                    maxWidth: '1400px',
                    height: 'auto',
                    minHeight: '700px',
                    background: '#FFFFFF',
                    margin: '0 auto',
                    padding: '20px 20px 40px'
                }}
            >
                {/* Imagen de fondo */}
                <div
                    className="services-image"
                    style={{
                        position: 'absolute',
                        width: '92%',
                        maxWidth: '1250px',
                        height: '550px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: '20px',
                        backgroundImage: `url(${ServicesBackgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        opacity: 1
                    }}
                />

                {/* Texto de servicios en la parte inferior */}
                <div
                    className="services-text"
                    style={{
                        position: 'absolute',
                        width: '88%',
                        maxWidth: '1132px',
                        height: 'auto',
                        minHeight: '99px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: '600px',
                        fontFamily: 'Nunito Sans',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '33px',
                        display: 'flex',
                        alignItems: 'center',
                        textAlign: 'center',
                        color: '#000000',
                        padding: '0 20px'
                    }}
                >
                    ESTRATEGIA CONTABLE • CULTURA FINANCIERA • INNOVACIÓN FISCAL • DISEÑO DE MARCA CONTABLE • TRANSFORMACIÓN EMPRESARIAL
                </div>
            </section>
        </>
    );
};
