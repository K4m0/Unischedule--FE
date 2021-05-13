import { Timetable } from "./timetable";

export interface Group{
    id: number;
    codigo: string;
    descripcion: string;
    capacidad: number;
    id_Asignatura?: any;
    horarios: Timetable[];
}