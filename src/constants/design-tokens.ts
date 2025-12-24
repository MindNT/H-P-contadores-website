/**
 * Design Tokens basados en Figma
 * Estos valores corresponden al diseño MacBook Pro 14" - 34
 */

export const designTokens = {
    // Dimensiones del contenedor principal
    container: {
        width: 1512,
        height: 982,
        widthPx: '1512px',
        heightPx: '982px',
    },

    // Colores del sistema
    colors: {
        background: '#FFFFFF',
        border: '#000000',
    },

    // Bordes
    borders: {
        default: '1px solid #000000',
        width: '1px',
        style: 'solid',
    },

    // Box sizing
    boxSizing: 'border-box' as const,
} as const;

export type DesignTokens = typeof designTokens;
