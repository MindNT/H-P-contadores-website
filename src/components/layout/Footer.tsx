import { useState } from 'react';
import ServicesImage1 from '../../assets/Imagenes Servicios/servicio1.jpeg';
import ServicesImage2 from '../../assets/Imagenes Servicios/servicio2.jpeg';
import ServicesImage3 from '../../assets/Imagenes Servicios/servicio3.jpeg';
import ServicesImage4 from '../../assets/Imagenes Servicios/servicio4.jpeg';
import ServicesImage5 from '../../assets/Imagenes Servicios/servicio5.jpeg';

interface FooterProps {
    className?: string;
}

interface Service {
    id: number;
    title: string;
    description: string;
    price: string;
}

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    service: Service | null;
}

const servicesData: Service[] = [
    {
        id: 1,
        title: 'Contabilidad General',
        description: 'Contabilidad para personas físicas y morales. Elaboración de estados financieros. Contabilidad electrónica conforme al SAT.',
        price: '$100 MXN'
    },
    {
        id: 2,
        title: 'Declaraciones Fiscales',
        description: 'Declaraciones mensuales y anuales. Declaraciones informativas (DIOT, DIM, etc.). Determinación de pagos provisionales.',
        price: '$100 MXN'
    },
    {
        id: 3,
        title: 'Nómina y Seguridad Social',
        description: 'Cálculo de nómina y generación de CFDI de nómina. Cálculo de cuotas IMSS e INFONAVIT. Determinación y presentación de SUA. Registro patronal y movimientos afiliatorios ante el IMSS.',
        price: '$100 MXN'
    },
    {
        id: 4,
        title: 'Asesoría Fiscal y Planeación Estratégica',
        description: 'Optimización de cargas fiscales. Planeación fiscal para personas físicas y morales.',
        price: '$100 MXN'
    },
    {
        id: 5,
        title: 'Gestión de Créditos Fiscales',
        description: 'Análisis y defensa ante determinaciones de créditos fiscales. Revisión de notificaciones y resoluciones del SAT o IMSS. Asesoría para el pago en parcialidades o condonaciones conforme al CFF. Interposición de medios de defensa (recurso de revocación, juicios de nulidad). Revisión de facultades de comprobación de la autoridad. Revisión de prescripción o improcedencia del crédito fiscal.',
        price: '$100 MXN'
    }
];

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
    if (!isOpen || !service) return null;

    return (
        <>
            <style>{`
                .modal-fullscreen {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: #389990;
                    z-index: 9999;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    animation: fadeIn 0.3s ease;
                    padding: 20px;
                }

                .modal-content-minimal {
                    max-width: 700px;
                    width: 100%;
                    text-align: center;
                }

                .modal-buttons {
                    display: flex;
                    gap: 20px;
                    justify-content: center;
                    margin-top: 40px;
                }

                .modal-button {
                    padding: 16px 40px;
                    border: 2px solid #FFFFFF;
                    background: transparent;
                    color: #FFFFFF;
                    font-family: 'Nunito', sans-serif;
                    font-weight: 600;
                    font-size: 16px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .modal-button:hover {
                    background: #FFFFFF;
                    color: #389990;
                }

                .modal-button-primary {
                    background: #FFFFFF;
                    color: #389990;
                }

                .modal-button-primary:hover {
                    background: transparent;
                    color: #FFFFFF;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @media (max-width: 768px) {
                    .modal-buttons {
                        flex-direction: column;
                        gap: 15px;
                    }
                    
                    .modal-button {
                        width: 100%;
                    }
                }
            `}</style>

            <div className="modal-fullscreen">
                <div className="modal-content-minimal">
                    <h2 style={{
                        fontFamily: 'Nunito Sans',
                        fontWeight: 600,
                        fontSize: '48px',
                        lineHeight: '1.2',
                        color: '#FFFFFF',
                        margin: '0 0 30px 0'
                    }}>
                        {service.title}
                    </h2>

                    <p style={{
                        fontFamily: 'Nunito',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '28px',
                        color: '#FFFFFF',
                        margin: '0 0 40px 0',
                        opacity: 0.95
                    }}>
                        {service.description}
                    </p>

                    <div style={{
                        fontFamily: 'Nunito Sans',
                        fontWeight: 700,
                        fontSize: '64px',
                        color: '#FFFFFF',
                        margin: '0 0 40px 0'
                    }}>
                        {service.price}
                    </div>

                    <div className="modal-buttons">
                        <button className="modal-button modal-button-primary">
                            Contactar con un asesor
                        </button>
                        <button className="modal-button" onClick={onClose}>
                            Regresar
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

/**
 * Componente Footer - Sección de SERVICIOS con 5 imágenes y modal
 * Responsive: Desktop intacto, Mobile adaptado
 */
export const Footer = ({ className = '' }: FooterProps) => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const openModal = (service: Service) => {
        setSelectedService(service);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedService(null);
        document.body.style.overflow = 'unset';
    };

    return (
        <>
            <style>{`
                @media (max-width: 1024px) {
                    .footer-section {
                        padding: 40px 20px 80px !important;
                    }
                    
                    .footer-container {
                        min-height: auto !important;
                    }
                    
                    .footer-title {
                        position: relative !important;
                        left: 0 !important;
                        top: 0 !important;
                        font-size: 60px !important;
                        margin-bottom: 40px !important;
                        text-align: center !important;
                    }
                    
                    .footer-services-wrapper {
                        position: relative !important;
                        display: flex !important;
                        flex-direction: column !important;
                        gap: 40px !important;
                        align-items: center !important;
                    }
                    
                    .footer-service-item {
                        position: relative !important;
                        left: 0 !important;
                        right: auto !important;
                        top: 0 !important;
                        width: 100% !important;
                        max-width: 600px !important;
                        margin: 0 !important;
                    }
                    
                    .footer-image {
                        width: 100% !important;
                        height: 500px !important;
                    }
                }
                
                @media (max-width: 768px) {
                    .footer-section {
                        padding: 30px 15px 60px !important;
                    }
                    
                    .footer-title {
                        font-size: 48px !important;
                        margin-bottom: 30px !important;
                    }
                    
                    .footer-image {
                        height: 350px !important;
                    }
                    
                    .footer-text {
                        font-size: 16px !important;
                        line-height: 24px !important;
                    }
                }
                
                @media (max-width: 480px) {
                    .footer-title {
                        font-size: 36px !important;
                    }
                    
                    .footer-image {
                        height: 280px !important;
                    }
                }
            `}</style>

            <footer
                id="nosotros"
                className={`footer-section w-full ${className}`}
                style={{
                    boxSizing: 'border-box',
                    width: '100%',
                    background: '#FFFFFF',
                    padding: '60px 20px 100px',
                    overflowX: 'hidden'
                }}
            >
                <div className="footer-container" style={{ width: '100%', maxWidth: '1400px', margin: '0 auto', overflowX: 'hidden' }}>
                    {/* Título SERVICIOS */}
                    <h2
                        className="footer-title"
                        style={{
                            fontFamily: 'Nunito Sans',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '80px',
                            lineHeight: '1.3',
                            color: '#000000',
                            margin: '0 0 60px 0',
                            textAlign: 'left'
                        }}
                    >
                        SERVICIOS
                    </h2>

                    {/* Wrapper de servicios para desktop */}
                    <div className="footer-services-wrapper" style={{ width: '100%' }}>
                        {/* Fila 1: Servicios 1 y 2 */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '60px', gap: '80px', flexWrap: 'wrap' }}>
                            {/* Servicio 1 */}
                            <div className="footer-service-item" style={{ width: '45%', minWidth: '300px', maxWidth: '600px' }}>
                                <div
                                    onClick={() => openModal(servicesData[0])}
                                    className="footer-image hover:opacity-90 hover:scale-[1.02]"
                                    style={{
                                        width: '100%',
                                        maxWidth: '640px',
                                        height: '600px',
                                        backgroundImage: `url(${ServicesImage1})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                                        borderRadius: '8px'
                                    }}
                                    role="button"
                                    aria-label={`Ver detalles de ${servicesData[0].title}`}
                                />
                                <div className="footer-text" style={{
                                    marginTop: '20px',
                                    fontFamily: 'Nunito',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                    color: '#8A8A8A'
                                }}>
                                    <strong style={{
                                        display: 'block',
                                        fontWeight: 600,
                                        fontSize: '24px',
                                        color: '#000000',
                                        marginBottom: '10px'
                                    }}>{servicesData[0].title}</strong>
                                    {servicesData[0].description}
                                </div>
                            </div>

                            {/* Servicio 2 */}
                            <div className="footer-service-item" style={{ width: '45%', minWidth: '300px', maxWidth: '600px' }}>
                                <div
                                    onClick={() => openModal(servicesData[1])}
                                    className="footer-image hover:opacity-90 hover:scale-[1.02]"
                                    style={{
                                        width: '100%',
                                        maxWidth: '640px',
                                        height: '600px',
                                        backgroundImage: `url(${ServicesImage2})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                                        borderRadius: '8px'
                                    }}
                                    role="button"
                                    aria-label={`Ver detalles de ${servicesData[1].title}`}
                                />
                                <div className="footer-text" style={{
                                    marginTop: '20px',
                                    fontFamily: 'Nunito',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                    color: '#8A8A8A'
                                }}>
                                    <strong style={{
                                        display: 'block',
                                        fontWeight: 600,
                                        fontSize: '24px',
                                        color: '#000000',
                                        marginBottom: '10px'
                                    }}>{servicesData[1].title}</strong>
                                    {servicesData[1].description}
                                </div>
                            </div>
                        </div>

                        {/* Fila 2: Servicios 3 y 4 */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '60px', gap: '80px', flexWrap: 'wrap' }}>
                            {/* Servicio 3 */}
                            <div className="footer-service-item" style={{ width: '45%', minWidth: '300px', maxWidth: '600px' }}>
                                <div
                                    onClick={() => openModal(servicesData[2])}
                                    className="footer-image hover:opacity-90 hover:scale-[1.02]"
                                    style={{
                                        width: '100%',
                                        maxWidth: '640px',
                                        height: '600px',
                                        backgroundImage: `url(${ServicesImage3})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                                        borderRadius: '8px'
                                    }}
                                    role="button"
                                    aria-label={`Ver detalles de ${servicesData[2].title}`}
                                />
                                <div className="footer-text" style={{
                                    marginTop: '20px',
                                    fontFamily: 'Nunito',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                    color: '#8A8A8A'
                                }}>
                                    <strong style={{
                                        display: 'block',
                                        fontWeight: 600,
                                        fontSize: '24px',
                                        color: '#000000',
                                        marginBottom: '10px'
                                    }}>{servicesData[2].title}</strong>
                                    {servicesData[2].description}
                                </div>
                            </div>

                            {/* Servicio 4 */}
                            <div className="footer-service-item" style={{ width: '45%', minWidth: '300px', maxWidth: '600px' }}>
                                <div
                                    onClick={() => openModal(servicesData[3])}
                                    className="footer-image hover:opacity-90 hover:scale-[1.02]"
                                    style={{
                                        width: '100%',
                                        maxWidth: '640px',
                                        height: '600px',
                                        backgroundImage: `url(${ServicesImage4})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                                        borderRadius: '8px'
                                    }}
                                    role="button"
                                    aria-label={`Ver detalles de ${servicesData[3].title}`}
                                />
                                <div className="footer-text" style={{
                                    marginTop: '20px',
                                    fontFamily: 'Nunito',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                    color: '#8A8A8A'
                                }}>
                                    <strong style={{
                                        display: 'block',
                                        fontWeight: 600,
                                        fontSize: '24px',
                                        color: '#000000',
                                        marginBottom: '10px'
                                    }}>{servicesData[3].title}</strong>
                                    {servicesData[3].description}
                                </div>
                            </div>
                        </div>

                        {/* Fila 3: Servicio 5 centrado */}
                        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            {/* Servicio 5 */}
                            <div className="footer-service-item" style={{ width: '45%', minWidth: '300px', maxWidth: '600px' }}>
                                <div
                                    onClick={() => openModal(servicesData[4])}
                                    className="footer-image hover:opacity-90 hover:scale-[1.02]"
                                    style={{
                                        width: '100%',
                                        maxWidth: '640px',
                                        height: '600px',
                                        backgroundImage: `url(${ServicesImage5})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        cursor: 'pointer',
                                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                                        borderRadius: '8px'
                                    }}
                                    role="button"
                                    aria-label={`Ver detalles de ${servicesData[4].title}`}
                                />
                                <div className="footer-text" style={{
                                    marginTop: '20px',
                                    fontFamily: 'Nunito',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                    color: '#8A8A8A'
                                }}>
                                    <strong style={{
                                        display: 'block',
                                        fontWeight: 600,
                                        fontSize: '24px',
                                        color: '#000000',
                                        marginBottom: '10px'
                                    }}>{servicesData[4].title}</strong>
                                    {servicesData[4].description}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Modal */}
            <ServiceModal
                isOpen={selectedService !== null}
                onClose={closeModal}
                service={selectedService}
            />
        </>
    );
};
