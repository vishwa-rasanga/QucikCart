export const COLOURS ={
    darkGray:'#c8d6e5',
    orange:'#e67e22'
} as const ;

export type ColourType= keyof typeof COLOURS;
