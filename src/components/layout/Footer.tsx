import ServicesImage from '../../assets/Imagen1.jpg';

interface FooterProps {
    className?: string;
}

/**
 * Componente Footer - Sección de SERVICIOS con dos imágenes
 */
export const Footer = ({ className = '' }: FooterProps) => {
    return (
        <footer
            id="nosotros"
            className={`relative w-full flex justify-center ${className}`}
            style={{
                boxSizing: 'border-box',
                position: 'relative',
                width: '100%',
                background: '#FFFFFF',
                margin: '0 auto',
                padding: '60px 20px 100px'
            }}
        >
            <div style={{ position: 'relative', width: '100%', maxWidth: '1400px', minHeight: '900px' }}>
                {/* Título SERVICIOS */}
                <h2
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

                {/* Primera imagen - Clickeable */}
                <a
                    href="/H-P-contadores-website/servicios-detalle.html"
                    style={{
                        position: 'absolute',
                        width: '640px',
                        height: '600px',
                        left: '0px',
                        top: '318px',
                        backgroundImage: `url(${ServicesImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                        display: 'block'
                    }}
                    className="hover:opacity-90 hover:scale-[1.02]"
                    aria-label="Ver servicios detalle"
                />

                {/* Segunda imagen - Clickeable */}
                <a
                    href="/H-P-contadores-website/servicios-detalle.html"
                    style={{
                        position: 'absolute',
                        width: '640px',
                        height: '600px',
                        right: '0px',
                        top: '318px',
                        backgroundImage: `url(${ServicesImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        cursor: 'pointer',
                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                        display: 'block'
                    }}
                    className="hover:opacity-90 hover:scale-[1.02]"
                    aria-label="Ver servicio 2"
                />
            </div>
        </footer>
    );
};
