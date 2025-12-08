import Logo from '../../assets/Logo.png';

interface HeaderProps {
    className?: string;
}

/**
 * Componente Header - Navegación centrada como en imagen de referencia
 */
export const Header = ({ className = '' }: HeaderProps) => {
    return (
        <header className={`w-full pt-10 pb-6 px-[60px] flex items-center relative ${className}`}>
            {/* Logo - Posición izquierda */}
            <div className="flex-shrink-0">
                <img
                    src={Logo}
                    alt="H&P Logo"
                    className="object-contain"
                    style={{ width: '100px', height: '67px', opacity: 1 }}
                />
            </div>

            {/* Navegación - Centrada absolutamente */}
            <nav className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-[100px]">
                <a
                    href="#nosotros"
                    className="font-sans font-light text-sm leading-none tracking-normal no-underline transition-colors hover:opacity-70"
                    style={{ color: '#000000' }}
                >
                    Nosotros
                </a>
                <a
                    href="#servicios"
                    className="font-sans font-light text-sm leading-none tracking-normal no-underline transition-colors hover:opacity-70"
                    style={{ color: '#000000' }}
                >
                    Servicios
                </a>
                <a
                    href="#metodologia"
                    className="font-sans font-light text-sm leading-none tracking-normal no-underline transition-colors hover:opacity-70"
                    style={{ color: '#000000' }}
                >
                    Metodologia
                </a>
            </nav>

            {/* Botón Contactar - Posición derecha */}
            <button
                className="ml-auto cursor-pointer flex items-center justify-center transition-all hover:opacity-90 font-sans font-light text-sm leading-none"
                style={{
                    width: '178px',
                    height: '50px',
                    background: '#000000',
                    border: 'none',
                    borderRadius: '30px',
                    color: '#FFFFFF'
                }}
            >
                Contactar
            </button>
        </header>
    );
};
