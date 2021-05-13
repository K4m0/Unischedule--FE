import { Group } from "./group";

export interface Signature{
    id: number;
    codigo: string;
    nombre: string;
    creditos: number;
    horas: number;
    topologia: string;
    planEstudio: number;
    lstGrupo: Group[];
}