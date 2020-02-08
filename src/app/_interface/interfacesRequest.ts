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
    vida:number;
    defensa:number;
    habilidades: any[];
    estadistica: any[];
}
export interface hechizo {
    name:string;
    desc:string;
    page:string;
    range:string;
    components:string;
    material:string;
    ritual:string;
    duration:string;
    concentration:string;
    casting_time:string;
    level:string;
    school:string;
    class:string;
}