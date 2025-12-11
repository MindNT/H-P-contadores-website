import ServicesBackgroundImage from '../../assets/Imagen1.jpg';

interface ServicesProps {
    className?: string;
}

/**
 * Componente Services - Nuevo diseño con imagen de fondo y texto de servicios
 */
export const Services = ({ className = '' }: ServicesProps) => {
    return (
        <section
            id="servicios"
            className={`relative w-full flex justify-center ${className}`}
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
    );
};
