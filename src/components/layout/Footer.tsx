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

import { createPortal } from 'react-dom';

const ServiceModal = ({ isOpen, onClose, service }: ServiceModalProps) => {
    if (!isOpen || !service) return null;

    return createPortal(
        <>
            <style>{`
                /* Prevent horizontal scroll globally */
                html, body {
                    overflow-x: hidden !important;
                    width: 100%;
                    max-width: 100%;
                }

                .modal-fullscreen {
                    position: fixed;
                    inset: 0; /* Ocupa toda la pantalla de forma segura */
                    background: #389990;
                    z-index: 2147483647; /* Máximo absoluto */
                    overflow-y: auto; /* El único scroll permitido */
                    overflow-x: hidden;
                    overscroll-behavior: contain; /* Evita que el scroll afecte a la página de fondo */
                    animation: fadeIn 0.3s ease;
                }

                /* Wrapper para centrado seguro que permite scroll */
                .modal-wrapper {
                    min-height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    box-sizing: border-box;
                }

                .modal-content-minimal {
                    max-width: 700px;
                    width: 100%;
                    text-align: center;
                    position: relative;
                    z-index: 2147483648;
                    margin: auto; /* Ayuda al centrado en flex */
                }
                
                /* Asegurar que el contenido sea visible */
                .modal-title, .modal-description, .modal-price {
                    color: #FFFFFF !important;
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
                    
                    /* Asegurar padding en móvil */
                    .modal-wrapper {
                        padding: 40px 20px;
                    }
                }
            `}</style>

            <div className="modal-fullscreen">
                <div className="modal-wrapper">
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
            </div>
        </>,
        document.body
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
                /* Animación para el título SERVICIOS */
                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .footer-title {
                    animation: slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both;
                }

                /* Estilos mejorados para las tarjetas de servicio */
                .footer-service-item {
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }

                /* Efectos para Hover (Desktop) y Active/Touch (Móvil) */
                .footer-service-item:hover,
                .footer-service-item:active,
                .footer-service-item:focus-within {
                    transform: translateY(-8px);
                }

                .footer-service-item:hover .service-title,
                .footer-service-item:active .service-title,
                .footer-service-item:focus-within .service-title {
                    color: #389990 !important;
                }

                /* Sombra dinámica para las imágenes - Forzada con !important */
                .footer-image {
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06) !important; 
                    transition: transform 0.4s ease, opacity 0.3s ease, box-shadow 0.4s ease !important;
                    /* Mejorar rendimiento en móvil */
                    will-change: transform, box-shadow;
                }

                .footer-service-item:hover .footer-image,
                .footer-service-item:active .footer-image,
                .footer-service-item:focus-within .footer-image {
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1) !important;
                    transform: scale(1.02) !important;
                }

                /* Animación de entrada escalonada (Stagger) */
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .footer-service-item {
                    animation: fadeInUp 0.6s ease-out both;
                }

                /* Delays escalonados para cada servicio */
                .footer-service-item:nth-child(1) {
                    animation-delay: 0ms;
                }

                .footer-service-item:nth-child(2) {
                    animation-delay: 150ms;
                }

                .footer-service-item:nth-child(3) {
                    animation-delay: 300ms;
                }

                .footer-service-item:nth-child(4) {
                    animation-delay: 450ms;
                }

                .footer-service-item:nth-child(5) {
                    animation-delay: 600ms;
                }

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
                    padding: '60px 60px 100px'
                }}
            >
                <div className="footer-container" style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
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
                            <div
                                className="footer-service-item"
                                style={{ width: '45%', minWidth: '300px', maxWidth: '600px', cursor: 'pointer' }}
                                onClick={() => openModal(servicesData[0])}
                                role="button"
                                aria-label={`Ver detalles de ${servicesData[0].title}`}
                            >
                                <div
                                    className="footer-image hover:opacity-90 hover:scale-[1.02]"
                                    style={{
                                        width: '100%',
                                        maxWidth: '640px',
                                        height: '600px',
                                        backgroundImage: `url(${ServicesImage1})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                                        borderRadius: '8px',
                                        pointerEvents: 'none'
                                    }}
                                />
                                <div className="footer-text" style={{
                                    marginTop: '20px',
                                    fontFamily: 'Nunito',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                    color: '#8A8A8A',
                                    pointerEvents: 'none'
                                }}>
                                    <strong className="service-title" style={{
                                        display: 'block',
                                        fontWeight: 600,
                                        fontSize: '24px',
                                        color: '#000000',
                                        marginBottom: '10px',
                                        transition: 'color 0.3s ease'
                                    }}>{servicesData[0].title}</strong>
                                    {servicesData[0].description}
                                </div>
                                <button
                                    style={{
                                        marginTop: '20px',
                                        padding: '12px 32px',
                                        backgroundColor: '#389990',
                                        color: '#FFFFFF',
                                        fontFamily: 'Nunito Sans',
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        transition: 'opacity 0.3s ease',
                                        pointerEvents: 'auto'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                >
                                    Contactar
                                </button>
                            </div>

                            {/* Servicio 2 */}
                            <div
                                className="footer-service-item"
                                style={{ width: '45%', minWidth: '300px', maxWidth: '600px', cursor: 'pointer' }}
                                onClick={() => openModal(servicesData[1])}
                                role="button"
                                aria-label={`Ver detalles de ${servicesData[1].title}`}
                            >
                                <div
                                    className="footer-image hover:opacity-90 hover:scale-[1.02]"
                                    style={{
                                        width: '100%',
                                        maxWidth: '640px',
                                        height: '600px',
                                        backgroundImage: `url(${ServicesImage2})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                                        borderRadius: '8px',
                                        pointerEvents: 'none'
                                    }}
                                />
                                <div className="footer-text" style={{
                                    marginTop: '20px',
                                    fontFamily: 'Nunito',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                    color: '#8A8A8A',
                                    pointerEvents: 'none'
                                }}>
                                    <strong className="service-title" style={{
                                        display: 'block',
                                        fontWeight: 600,
                                        fontSize: '24px',
                                        color: '#000000',
                                        marginBottom: '10px',
                                        transition: 'color 0.3s ease'
                                    }}>{servicesData[1].title}</strong>
                                    {servicesData[1].description}
                                </div>
                                <button
                                    style={{
                                        marginTop: '20px',
                                        padding: '12px 32px',
                                        backgroundColor: '#389990',
                                        color: '#FFFFFF',
                                        fontFamily: 'Nunito Sans',
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        transition: 'opacity 0.3s ease',
                                        pointerEvents: 'auto'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                >
                                    Contactar
                                </button>
                            </div>
                        </div>

                        {/* Fila 2: Servicios 3 y 4 */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginBottom: '60px', gap: '80px', flexWrap: 'wrap' }}>
                            {/* Servicio 3 */}
                            <div
                                className="footer-service-item"
                                style={{ width: '45%', minWidth: '300px', maxWidth: '600px', cursor: 'pointer' }}
                                onClick={() => openModal(servicesData[2])}
                                role="button"
                                aria-label={`Ver detalles de ${servicesData[2].title}`}
                            >
                                <div
                                    className="footer-image hover:opacity-90 hover:scale-[1.02]"
                                    style={{
                                        width: '100%',
                                        maxWidth: '640px',
                                        height: '600px',
                                        backgroundImage: `url(${ServicesImage3})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                                        borderRadius: '8px',
                                        pointerEvents: 'none'
                                    }}
                                />
                                <div className="footer-text" style={{
                                    marginTop: '20px',
                                    fontFamily: 'Nunito',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                    color: '#8A8A8A',
                                    pointerEvents: 'none'
                                }}>
                                    <strong className="service-title" style={{
                                        display: 'block',
                                        fontWeight: 600,
                                        fontSize: '24px',
                                        color: '#000000',
                                        marginBottom: '10px',
                                        transition: 'color 0.3s ease'
                                    }}>{servicesData[2].title}</strong>
                                    {servicesData[2].description}
                                </div>
                                <button
                                    style={{
                                        marginTop: '20px',
                                        padding: '12px 32px',
                                        backgroundColor: '#389990',
                                        color: '#FFFFFF',
                                        fontFamily: 'Nunito Sans',
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        transition: 'opacity 0.3s ease',
                                        pointerEvents: 'auto'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                >
                                    Contactar
                                </button>
                            </div>

                            {/* Servicio 4 */}
                            <div
                                className="footer-service-item"
                                style={{ width: '45%', minWidth: '300px', maxWidth: '600px', cursor: 'pointer' }}
                                onClick={() => openModal(servicesData[3])}
                                role="button"
                                aria-label={`Ver detalles de ${servicesData[3].title}`}
                            >
                                <div
                                    className="footer-image hover:opacity-90 hover:scale-[1.02]"
                                    style={{
                                        width: '100%',
                                        maxWidth: '640px',
                                        height: '600px',
                                        backgroundImage: `url(${ServicesImage4})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                                        borderRadius: '8px',
                                        pointerEvents: 'none'
                                    }}
                                />
                                <div className="footer-text" style={{
                                    marginTop: '20px',
                                    fontFamily: 'Nunito',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                    color: '#8A8A8A',
                                    pointerEvents: 'none'
                                }}>
                                    <strong className="service-title" style={{
                                        display: 'block',
                                        fontWeight: 600,
                                        fontSize: '24px',
                                        color: '#000000',
                                        marginBottom: '10px',
                                        transition: 'color 0.3s ease'
                                    }}>{servicesData[3].title}</strong>
                                    {servicesData[3].description}
                                </div>
                                <button
                                    style={{
                                        marginTop: '20px',
                                        padding: '12px 32px',
                                        backgroundColor: '#389990',
                                        color: '#FFFFFF',
                                        fontFamily: 'Nunito Sans',
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        transition: 'opacity 0.3s ease',
                                        pointerEvents: 'auto'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                >
                                    Contactar
                                </button>
                            </div>
                        </div>

                        {/* Fila 3: Servicio 5 alineado a la izquierda */}
                        <div style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
                            {/* Servicio 5 */}
                            <div
                                className="footer-service-item"
                                style={{ width: '45%', minWidth: '300px', maxWidth: '600px', cursor: 'pointer' }}
                                onClick={() => openModal(servicesData[4])}
                                role="button"
                                aria-label={`Ver detalles de ${servicesData[4].title}`}
                            >
                                <div
                                    className="footer-image hover:opacity-90 hover:scale-[1.02]"
                                    style={{
                                        width: '100%',
                                        maxWidth: '640px',
                                        height: '600px',
                                        backgroundImage: `url(${ServicesImage5})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundRepeat: 'no-repeat',
                                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                                        borderRadius: '8px',
                                        pointerEvents: 'none'
                                    }}
                                />
                                <div className="footer-text" style={{
                                    marginTop: '20px',
                                    fontFamily: 'Nunito',
                                    fontStyle: 'normal',
                                    fontWeight: 500,
                                    fontSize: '18px',
                                    lineHeight: '28px',
                                    color: '#8A8A8A',
                                    pointerEvents: 'none'
                                }}>
                                    <strong className="service-title" style={{
                                        display: 'block',
                                        fontWeight: 600,
                                        fontSize: '24px',
                                        color: '#000000',
                                        marginBottom: '10px',
                                        transition: 'color 0.3s ease'
                                    }}>{servicesData[4].title}</strong>
                                    {servicesData[4].description}
                                </div>
                                <button
                                    style={{
                                        marginTop: '20px',
                                        padding: '12px 32px',
                                        backgroundColor: '#389990',
                                        color: '#FFFFFF',
                                        fontFamily: 'Nunito Sans',
                                        fontWeight: 600,
                                        fontSize: '16px',
                                        border: 'none',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        transition: 'opacity 0.3s ease',
                                        pointerEvents: 'auto'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                >
                                    Contactar
                                </button>
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
