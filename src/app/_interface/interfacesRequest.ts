export interface User {
    campana: string[];
}
export interface Campana {
    nombre: string;
    armas: string[];
    pjs: string[];
}
export interface Armas {
    nombre: string;
    precio: number;
    peso: number;
    dado: number;
    nDados: number;
    tipo: string;
}
export interface Pj {
    nombre: string;
    habilidades: any[];
    estadistica: any[];
}
