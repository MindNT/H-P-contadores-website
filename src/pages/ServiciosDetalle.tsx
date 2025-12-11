import ServicesImage from '../assets/Imagen1.jpg';

/**
 * Página de Servicios Detalle - Muestra dos servicios con imagen y descripción
 */
export const ServiciosDetalle = () => {
    return (
        <div
            style={{
                boxSizing: 'border-box',
                position: 'relative',
                width: '100%',
                maxWidth: '1440px',
                minHeight: '1000px',
                background: '#FFFFFF',
                margin: '0 auto',
                padding: '40px 20px'
            }}
        >
            <div style={{ position: 'relative', width: '100%', minHeight: '900px' }}>
                {/* Primera imagen */}
                <div
                    style={{
                        position: 'absolute',
                        width: '650px',
                        height: '650px',
                        left: '20px',
                        top: '40px',
                        backgroundImage: `url(${ServicesImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                {/* Segunda imagen */}
                <div
                    style={{
                        position: 'absolute',
                        width: '650px',
                        height: '650px',
                        right: '20px',
                        top: '40px',
                        backgroundImage: `url(${ServicesImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                {/* Texto Servicio 1 */}
                <div
                    style={{
                        position: 'absolute',
                        width: '600px',
                        left: '20px',
                        top: '720px',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '1.5',
                        color: '#8A8A8A'
                    }}
                >
                    <strong style={{
                        display: 'block',
                        fontWeight: 600,
                        fontSize: '24px',
                        color: '#000000',
                        marginBottom: '10px'
                    }}>Servicio 1</strong>
                    Ofrecemos un acompañamiento profesional y personalizado para gestionar la contabilidad de tu negocio con precisión, transparencia y enfoque estratégico
                </div>

                {/* Texto Servicio 2 */}
                <div
                    style={{
                        position: 'absolute',
                        width: '600px',
                        right: '20px',
                        top: '720px',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '1.5',
                        color: '#8A8A8A'
                    }}
                >
                    <strong style={{
                        display: 'block',
                        fontWeight: 600,
                        fontSize: '24px',
                        color: '#000000',
                        marginBottom: '10px'
                    }}>Servicio 2</strong>
                    Ofrecemos un acompañamiento profesional y personalizado para gestionar la contabilidad de tu negocio con precisión, transparencia y enfoque estratégico
                </div>
            </div>
        </div>
    );
};

export default ServiciosDetalle;
