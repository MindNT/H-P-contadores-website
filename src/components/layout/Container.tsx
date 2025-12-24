import { designTokens } from '../../constants/design-tokens';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

/**
 * Componente contenedor principal basado en las dimensiones de Figma
 * Dimensiones: 1512px x 982px
 */
export const Container = ({ children, className = '' }: ContainerProps) => {
    return (
        <div
            className={`container-figma ${className}`}
            style={{
                maxWidth: designTokens.container.widthPx,
                height: designTokens.container.heightPx,
            }}
        >
            {children}
        </div>
    );
};
