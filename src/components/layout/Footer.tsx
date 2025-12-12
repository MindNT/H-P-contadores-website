import { useState } from 'react';
import ServicesImage from '../../assets/Imagen1.jpg';

interface FooterProps {
    className?: string;
}

interface ServiceModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description: string;
    price: string;
}

const ServiceModal = ({ isOpen, onClose, title, description, price }: ServiceModalProps) => {
    if (!isOpen) return null;

    return (
        <>
            <style>{`
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100vh;
                    background: rgba(0, 0, 0, 0.6);
                    backdrop-filter: blur(8px);
                    z-index: 9998;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    animation: fadeIn 0.3s ease;
                }

                .modal-content {
                    background: #FFFFFF;
                    border-radius: 16px;
                    max-width: 600px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    position: relative;
                    z-index: 9999;
                    animation: slideUp 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }

                .modal-header {
                    padding: 30px 30px 20px;
                    border-bottom: 2px solid #F5F5F5;
                    position: relative;
                }

                .modal-close {
                    position: absolute;
                    top: 20px;
                    right: 20px;
                    width: 40px;
                    height: 40px;
                    border: none;
                    background: #F5F5F5;
                    border-radius: 50%;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    font-size: 24px;
                    color: #000000;
                }

                .modal-close:hover {
                    background: #389990;
                    color: #FFFFFF;
                    transform: rotate(90deg);
                }

                .modal-body {
                    padding: 30px;
                }

                .modal-footer {
                    padding: 20px 30px 30px;
                    border-top: 2px solid #F5F5F5;
                }

                .modal-price {
                    font-family: 'Nunito Sans', sans-serif;
                    font-weight: 700;
                    font-size: 48px;
                    color: #389990;
                    margin-bottom: 20px;
                }

                .modal-cta {
                    width: 100%;
                    padding: 16px 32px;
                    background: #389990;
                    color: #FFFFFF;
                    border: none;
                    border-radius: 8px;
                    font-family: 'Nunito', sans-serif;
                    font-weight: 600;
                    font-size: 18px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .modal-cta:hover {
                    background: #2E7D77;
                    transform: translateY(-2px);
                    box-shadow: 0 8px 20px rgba(56, 153, 144, 0.3);
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from {
                        opacity: 0;
                        transform: translateY(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>

            <div className="modal-overlay" onClick={onClose}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h2 style={{
                            fontFamily: 'Nunito Sans',
                            fontWeight: 600,
                            fontSize: '32px',
                            color: '#000000',
                            margin: 0
                        }}>
                            {title}
                        </h2>
                        <button className="modal-close" onClick={onClose} aria-label="Cerrar modal">
                            ×
                        </button>
                    </div>

                    <div className="modal-body">
                        <p style={{
                            fontFamily: 'Nunito',
                            fontWeight: 400,
                            fontSize: '18px',
                            lineHeight: '28px',
                            color: '#8A8A8A',
                            margin: 0
                        }}>
                            {description}
                        </p>
                    </div>

                    <div className="modal-footer">
                        <div className="modal-price">{price}</div>
                        <button className="modal-cta">
                            Contratar Servicio
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

/**
 * Componente Footer - Sección de SERVICIOS con dos imágenes y modal
 * Responsive: Desktop intacto, Mobile adaptado
 */
export const Footer = ({ className = '' }: FooterProps) => {
    const [modalData, setModalData] = useState<{ isOpen: boolean; service: number }>({
        isOpen: false,
        service: 1
    });

    const openModal = (serviceNumber: number) => {
        setModalData({ isOpen: true, service: serviceNumber });
    };

    const closeModal = () => {
        setModalData({ isOpen: false, service: 1 });
    };

    const services = {
        1: {
            title: 'Servicio 1',
            description: 'Ofrecemos un acompañamiento profesional y personalizado para gestionar la contabilidad de tu negocio con precisión, transparencia y enfoque estratégico.',
            price: '$100 MXN'
        },
        2: {
            title: 'Servicio 2',
            description: 'Ofrecemos un acompañamiento profesional y personalizado para gestionar la contabilidad de tu negocio con precisión, transparencia y enfoque estratégico.',
            price: '$100 MXN'
        }
    };

    const currentService = services[modalData.service as keyof typeof services];

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
                    }
                    
                    .footer-service-wrapper {
                        position: relative !important;
                        left: 0 !important;
                        right: auto !important;
                        top: 0 !important;
                        width: 100% !important;
                        max-width: 600px !important;
                        margin: 0 auto 40px auto !important;
                        display: block !important;
                    }
                    
                    .footer-image-1,
                    .footer-image-2 {
                        position: relative !important;
                        left: 0 !important;
                        right: auto !important;
                        top: 0 !important;
                        width: 100% !important;
                        height: 500px !important;
                        margin-bottom: 20px !important;
                    }
                    
                    .footer-text {
                        position: relative !important;
                        left: 0 !important;
                        top: 0 !important;
                        width: 100% !important;
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
                    
                    .footer-image-1,
                    .footer-image-2 {
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
                    
                    .footer-image-1,
                    .footer-image-2 {
                        height: 280px !important;
                    }
                }
            `}</style>

            <footer
                id="nosotros"
                className={`footer-section relative w-full flex justify-center ${className}`}
                style={{
                    boxSizing: 'border-box',
                    position: 'relative',
                    width: '100%',
                    background: '#FFFFFF',
                    margin: '0 auto',
                    padding: '60px 20px 100px'
                }}
            >
                <div className="footer-container" style={{ position: 'relative', width: '100%', maxWidth: '1400px', minHeight: '1100px' }}>
                    {/* Título SERVICIOS */}
                    <h2
                        className="footer-title"
                        style={{
                            position: 'absolute',
                            width: 'auto',
                            maxWidth: '651px',
                            left: '3%',
                            top: '60px',
                            fontFamily: 'Nunito Sans',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '80px',
                            lineHeight: '1.3',
                            display: 'flex',
                            alignItems: 'center',
                            color: '#000000',
                            margin: 0
                        }}
                    >
                        SERVICIOS
                    </h2>

                    {/* Servicio 1 - Wrapper */}
                    <div className="footer-service-wrapper" style={{ position: 'absolute', left: '0px', top: '318px', width: '640px' }}>
                        {/* Primera imagen - Clickeable */}
                        <div
                            onClick={() => openModal(1)}
                            className="footer-image-1 hover:opacity-90 hover:scale-[1.02]"
                            style={{
                                position: 'relative',
                                width: '640px',
                                height: '600px',
                                backgroundImage: `url(${ServicesImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease, opacity 0.3s ease',
                                display: 'block',
                                borderRadius: '8px'
                            }}
                            role="button"
                            aria-label="Ver detalles del Servicio 1"
                        />

                        {/* Texto Servicio 1 */}
                        <div className="footer-text" style={{
                            position: 'relative',
                            width: '100%',
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
                            }}>Servicio 1</strong>
                            Ofrecemos un acompañamiento profesional y personalizado para gestionar la contabilidad de tu negocio con precisión, transparencia y enfoque estratégico.
                        </div>
                    </div>

                    {/* Servicio 2 - Wrapper */}
                    <div className="footer-service-wrapper" style={{ position: 'absolute', right: '0px', top: '318px', width: '640px' }}>
                        {/* Segunda imagen - Clickeable */}
                        <div
                            onClick={() => openModal(2)}
                            className="footer-image-2 hover:opacity-90 hover:scale-[1.02]"
                            style={{
                                position: 'relative',
                                width: '640px',
                                height: '600px',
                                backgroundImage: `url(${ServicesImage})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease, opacity 0.3s ease',
                                display: 'block',
                                borderRadius: '8px'
                            }}
                            role="button"
                            aria-label="Ver detalles del Servicio 2"
                        />

                        {/* Texto Servicio 2 */}
                        <div className="footer-text" style={{
                            position: 'relative',
                            width: '100%',
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
                            }}>Servicio 2</strong>
                            Ofrecemos un acompañamiento profesional y personalizado para gestionar la contabilidad de tu negocio con precisión, transparencia y enfoque estratégico.
                        </div>
                    </div>
                </div>
            </footer>

            {/* Modal */}
            <ServiceModal
                isOpen={modalData.isOpen}
                onClose={closeModal}
                title={currentService.title}
                description={currentService.description}
                price={currentService.price}
            />
        </>
    );
};
