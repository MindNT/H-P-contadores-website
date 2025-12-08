import CardIcon from '../../assets/card-icon.png';

interface ServicesProps {
    className?: string;
}

/**
 * Componente Services - Tarjetas 380x117px según especificaciones
 */
export const Services = ({ className = '' }: ServicesProps) => {
    return (
        <section
            id="servicios"
            className={`relative w-full flex justify-center ${className}`}
            style={{
                minHeight: '800px',
                background: '#FFFFFF',
                paddingTop: '40px',
                paddingBottom: '100px'
            }}
        >
            <div style={{ position: 'relative', width: '1246px', minHeight: '700px' }}>
                {/* Título SERVICIOS */}
                <h2
                    style={{
                        position: 'absolute',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: '0px',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '24px',
                        lineHeight: '29px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#000000',
                        margin: 0
                    }}
                >
                    SERVICIOS
                </h2>

                {/* Línea decorativa */}
                <div
                    style={{
                        position: 'absolute',
                        width: '385px',
                        height: '9px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: '50px',
                        background: '#389990'
                    }}
                />

                {/* Card 1: Gestión de créditos fiscales */}
                <div
                    style={{
                        boxSizing: 'border-box',
                        position: 'absolute',
                        width: '380px',
                        height: '117px',
                        left: '0px',
                        top: '120px',
                        border: '1px solid #8A8A8A',
                        borderRadius: '30px',
                        padding: '25px 30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        opacity: 1
                    }}
                >
                    <div style={{ flexShrink: 0 }}>
                        <img src={CardIcon} alt="Service icon" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <div>
                        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000', margin: '0 0 8px 0' }}>
                            Gestión de créditos fiscales
                        </p>
                        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#8A8A8A', margin: 0 }}>
                            Descripción del mismo
                        </p>
                    </div>
                </div>

                {/* Card 2: Asesoría fiscal y planeación estratégica */}
                <div
                    style={{
                        boxSizing: 'border-box',
                        position: 'absolute',
                        width: '380px',
                        height: '117px',
                        left: '433px',
                        top: '120px',
                        border: '1px solid #8A8A8A',
                        borderRadius: '30px',
                        padding: '25px 30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        opacity: 1
                    }}
                >
                    <div style={{ flexShrink: 0 }}>
                        <img src={CardIcon} alt="Service icon" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <div>
                        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000', margin: '0 0 8px 0' }}>
                            Asesoría fiscal y planeación estratégica
                        </p>
                        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#8A8A8A', margin: 0 }}>
                            Descripción del mismo
                        </p>
                    </div>
                </div>

                {/* Card 3: Contabilidad general */}
                <div
                    style={{
                        boxSizing: 'border-box',
                        position: 'absolute',
                        width: '380px',
                        height: '117px',
                        left: '866px',
                        top: '120px',
                        border: '1px solid #8A8A8A',
                        borderRadius: '30px',
                        padding: '25px 30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        opacity: 1
                    }}
                >
                    <div style={{ flexShrink: 0 }}>
                        <img src={CardIcon} alt="Service icon" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <div>
                        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000', margin: '0 0 8px 0' }}>
                            Contabilidad general
                        </p>
                        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#8A8A8A', margin: 0 }}>
                            Descripción del mismo
                        </p>
                    </div>
                </div>

                {/* Card 4: Declaraciones fiscales */}
                <div
                    style={{
                        boxSizing: 'border-box',
                        position: 'absolute',
                        width: '380px',
                        height: '117px',
                        left: '0px',
                        top: '280px',
                        border: '1px solid #8A8A8A',
                        borderRadius: '30px',
                        padding: '25px 30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        opacity: 1
                    }}
                >
                    <div style={{ flexShrink: 0 }}>
                        <img src={CardIcon} alt="Service icon" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <div>
                        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000', margin: '0 0 8px 0' }}>
                            Declaraciones fiscales
                        </p>
                        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#8A8A8A', margin: 0 }}>
                            Descripción del mismo
                        </p>
                    </div>
                </div>

                {/* Card 5: Nómina y seguridad social */}
                <div
                    style={{
                        boxSizing: 'border-box',
                        position: 'absolute',
                        width: '380px',
                        height: '117px',
                        left: '433px',
                        top: '280px',
                        border: '1px solid #8A8A8A',
                        borderRadius: '30px',
                        padding: '25px 30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        opacity: 1
                    }}
                >
                    <div style={{ flexShrink: 0 }}>
                        <img src={CardIcon} alt="Service icon" style={{ width: '60px', height: '60px' }} />
                    </div>
                    <div>
                        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#000000', margin: '0 0 8px 0' }}>
                            Nómina y seguridad social
                        </p>
                        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', lineHeight: '17px', color: '#8A8A8A', margin: 0 }}>
                            Descripción del mismo
                        </p>
                    </div>
                </div>

                {/* Botón CTA */}
                <button
                    style={{
                        position: 'absolute',
                        width: '322px',
                        height: '60px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        top: '460px',
                        background: '#389990',
                        borderRadius: '30px',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'Inter',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '19px',
                        color: '#FFFFFF',
                        opacity: 1
                    }}
                    className="transition-all hover:opacity-90"
                >
                    Contactar con un asesor
                </button>
            </div>
        </section>
    );
};
