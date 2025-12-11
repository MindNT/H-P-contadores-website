interface HeaderProps {
    className?: string;
}

/**
 * Componente Header - Navegación centrada como en imagen de referencia
 */
export const Header = ({ className = '' }: HeaderProps) => {
    return (
        <header className={`w-full mt-8 pt-6 pb-1 px-[60px] flex items-center relative ${className}`}>
            {/* Título H&P Contadores - Posición izquierda */}
            <div className="flex-shrink-0">
                <h1
                    style={{
                        width: '186px',
                        height: '33px',
                        fontFamily: 'Nunito Sans',
                        fontStyle: 'normal',
                        fontWeight: 700,
                        fontSize: '24px',
                        lineHeight: '33px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#000000',
                        margin: 0
                    }}
                >
                    H&P Contadores
                </h1>
            </div>

            {/* Navegación - Centrada absolutamente */}
            <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-[100px]">
                <a
                    href="#nosotros"
                    className="no-underline transition-colors hover:opacity-70"
                    style={{
                        width: '67px',
                        height: '22px',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#000000'
                    }}
                >
                    Nosotros
                </a>
                <a
                    href="#servicios"
                    className="no-underline transition-colors hover:opacity-70"
                    style={{
                        width: '67px',
                        height: '22px',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#000000'
                    }}
                >
                    Servicios
                </a>
                <a
                    href="#metodologia"
                    className="no-underline transition-colors hover:opacity-70"
                    style={{
                        width: '67px',
                        height: '22px',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#000000'
                    }}
                >
                    Metodologia
                </a>
            </nav>

            {/* Contactar - Posición derecha con línea */}
            <div style={{ position: 'relative', marginLeft: 'auto' }}>
                <a
                    href="#contactar"
                    className="no-underline transition-colors hover:opacity-70"
                    style={{
                        width: '71px',
                        height: '22px',
                        fontFamily: 'Nunito',
                        fontStyle: 'normal',
                        fontWeight: 600,
                        fontSize: '16px',
                        lineHeight: '22px',
                        display: 'flex',
                        alignItems: 'center',
                        color: '#000000'
                    }}
                >
                    Contactar
                </a>
                {/* Línea decorativa debajo */}
                <div
                    style={{
                        position: 'absolute',
                        width: '150px',
                        height: '1px',
                        backgroundColor: '#389990',
                        opacity: 0.5,
                        bottom: '-5px',
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}
                />
            </div>
        </header>
    );
};
