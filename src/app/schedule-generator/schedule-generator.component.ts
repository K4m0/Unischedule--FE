import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppSettings } from '../models/appSettings';
import { ScheduleGeneratorService } from './schedule-generator.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-schedule-generator',
  templateUrl: './schedule-generator.component.html',
  styleUrls: ['./schedule-generator.component.css']
})
export class ScheduleGeneratorComponent implements OnInit {
  private URLEndpoint = AppSettings.API_ENDPOINT;

  
  schedules: any;
  schedules1 =  [[{ "id": 23, "codigo": "45360012", "nombre": "FISICA II                                         ", "creditos": 3, "horas": 4, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 71, "codigo": "2", "descripcion": "GRUPO 2 - F�SICA II                               ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 29, "dia": 1, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 71 }, { "id": 30, "dia": 3, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 71 }] }] }, { "id": 31, "codigo": "40050166", "nombre": "INGENIERIA DE SOFTWARE                            ", "creditos": 3, "horas": 5, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 50, "codigo": "2", "descripcion": "GRUPO 2 - INGENIER�A DE SOFTWARE                  ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 34, "dia": 4, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }, { "id": 35, "dia": 2, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }, { "id": 36, "dia": 5, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }] }] }, { "id": 32, "codigo": "40050167", "nombre": "PLANIFICACION Y GESTION DE REDES                  ", "creditos": 3, "horas": 6, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 51, "codigo": "1", "descripcion": "GRUPO 1 - PLANIFICACI�N Y GESTI�N DE REDES        ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 37, "dia": 1, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }, { "id": 38, "dia": 3, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }, { "id": 39, "dia": 5, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }] }] }], [{ "id": 31, "codigo": "40050166", "nombre": "INGENIERIA DE SOFTWARE                            ", "creditos": 3, "horas": 5, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 50, "codigo": "2", "descripcion": "GRUPO 2 - INGENIER�A DE SOFTWARE                  ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 34, "dia": 4, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }, { "id": 35, "dia": 2, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }, { "id": 36, "dia": 5, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }] }] }, { "id": 23, "codigo": "45360012", "nombre": "FISICA II                                         ", "creditos": 3, "horas": 4, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 71, "codigo": "2", "descripcion": "GRUPO 2 - F�SICA II                               ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 29, "dia": 1, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 71 }, { "id": 30, "dia": 3, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 71 }] }] }, { "id": 32, "codigo": "40050167", "nombre": "PLANIFICACION Y GESTION DE REDES                  ", "creditos": 3, "horas": 6, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 51, "codigo": "1", "descripcion": "GRUPO 1 - PLANIFICACI�N Y GESTI�N DE REDES        ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 37, "dia": 1, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }, { "id": 38, "dia": 3, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }, { "id": 39, "dia": 5, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }] }] }], [{ "id": 32, "codigo": "40050167", "nombre": "PLANIFICACION Y GESTION DE REDES                  ", "creditos": 3, "horas": 6, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 51, "codigo": "1", "descripcion": "GRUPO 1 - PLANIFICACI�N Y GESTI�N DE REDES        ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 37, "dia": 1, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }, { "id": 38, "dia": 3, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }, { "id": 39, "dia": 5, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }] }] }, { "id": 23, "codigo": "45360012", "nombre": "FISICA II                                         ", "creditos": 3, "horas": 4, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 71, "codigo": "2", "descripcion": "GRUPO 2 - F�SICA II                               ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 29, "dia": 1, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 71 }, { "id": 30, "dia": 3, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 71 }] }] }, { "id": 31, "codigo": "40050166", "nombre": "INGENIERIA DE SOFTWARE                            ", "creditos": 3, "horas": 5, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 50, "codigo": "2", "descripcion": "GRUPO 2 - INGENIER�A DE SOFTWARE                  ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 34, "dia": 4, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }, { "id": 35, "dia": 2, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }, { "id": 36, "dia": 5, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }] }] }], [{ "id": 37, "codigo": "40050171", "nombre": "PRACTICA INGENIERIA IV                            ", "creditos": 3, "horas": 4, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 56, "codigo": "1", "descripcion": "GRUPO 1 - PR�CTICA DE INGENIER�A DE SISTEMAS IV   ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 40, "dia": 2, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 56 }, { "id": 41, "dia": 5, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 56 }] }] }, { "id": 23, "codigo": "45360012", "nombre": "FISICA II                                         ", "creditos": 3, "horas": 4, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 71, "codigo": "2", "descripcion": "GRUPO 2 - F�SICA II                               ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 29, "dia": 1, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 71 }, { "id": 30, "dia": 3, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 71 }] }] }, { "id": 32, "codigo": "40050167", "nombre": "PLANIFICACION Y GESTION DE REDES                  ", "creditos": 3, "horas": 6, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 51, "codigo": "1", "descripcion": "GRUPO 1 - PLANIFICACI�N Y GESTI�N DE REDES        ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 37, "dia": 1, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }, { "id": 38, "dia": 3, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }, { "id": 39, "dia": 5, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }] }] }], [{ "id": 38, "codigo": "40050168", "nombre": "INTELIGENCIA ARTIFICIAL                           ", "creditos": 3, "horas": 4, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 52, "codigo": "1", "descripcion": "GRUPO 1 - INTELIGENCIA ARTIFICIAL                 ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 42, "dia": 3, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 52 }, { "id": 43, "dia": 6, "hora_Inicio": "09:00:00.0000000", "hora_Fin": "11:00:00.0000000", "id_Grupo": 52 }] }] }, { "id": 23, "codigo": "45360012", "nombre": "FISICA II                                         ", "creditos": 3, "horas": 4, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 71, "codigo": "2", "descripcion": "GRUPO 2 - F�SICA II                               ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 29, "dia": 1, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 71 }, { "id": 30, "dia": 3, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 71 }] }] }, { "id": 31, "codigo": "40050166", "nombre": "INGENIERIA DE SOFTWARE                            ", "creditos": 3, "horas": 5, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 50, "codigo": "2", "descripcion": "GRUPO 2 - INGENIER�A DE SOFTWARE                  ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 34, "dia": 4, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }, { "id": 35, "dia": 2, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }, { "id": 36, "dia": 5, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }] }] }], [{ "id": 40, "codigo": "40050173", "nombre": "COMPUTACION GRAFICA                               ", "creditos": 3, "horas": 5, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 58, "codigo": "1", "descripcion": "GRUPO 1 - COMPUTACI�N GR�FICA                     ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 44, "dia": 1, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 58 }, { "id": 45, "dia": 3, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 58 }, { "id": 46, "dia": 5, "hora_Inicio": "21:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 58 }] }] }, { "id": 31, "codigo": "40050166", "nombre": "INGENIERIA DE SOFTWARE                            ", "creditos": 3, "horas": 5, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 50, "codigo": "2", "descripcion": "GRUPO 2 - INGENIER�A DE SOFTWARE                  ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 34, "dia": 4, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }, { "id": 35, "dia": 2, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }, { "id": 36, "dia": 5, "hora_Inicio": "18:00:00.0000000", "hora_Fin": "20:00:00.0000000", "id_Grupo": 50 }] }] }, { "id": 32, "codigo": "40050167", "nombre": "PLANIFICACION Y GESTION DE REDES                  ", "creditos": 3, "horas": 6, "topologia": "Indispensable  ", "planEstudio": 1, "lstGrupo": [{ "id": 51, "codigo": "1", "descripcion": "GRUPO 1 - PLANIFICACI�N Y GESTI�N DE REDES        ", "capacidad": 15, "id_Asignatura": null, "horarios": [{ "id": 37, "dia": 1, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }, { "id": 38, "dia": 3, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }, { "id": 39, "dia": 5, "hora_Inicio": "20:00:00.0000000", "hora_Fin": "22:00:00.0000000", "id_Grupo": 51 }] }] }]]
  selectedJornada: number = 0;
  selectedMateria: number = 0;

  private idEstudiante: number;
  

  jornadas: any = ['Diurna', 'Nocturna']
  
  materias: any = [1,2,3,4]

  isEnabled = true;



  constructor(private router: Router,private Activatedroute: ActivatedRoute, private service:ScheduleGeneratorService) {
    
    this.idEstudiante = Number(this.Activatedroute.snapshot.queryParamMap.get('userId'));
  }

  ngOnInit(): void {
    //console.log('id estudiante: ' + this.idEstudiante);
  }

  jornadaSelected(value:string){
    
    this.selectedJornada = value == 'Nocturna' ? 1 : 2;
    console.log(this.selectedJornada);
}

materiaSelected(value:string){
  this.selectedMateria = Number(value);
  console.log(this.selectedMateria);
}
  
  idEstudianteInput(value: string) {
    this.idEstudiante = Number(value);
    console.log(this.idEstudiante);
}
  
  getSchedules(): void{
    
      
    this.service.getSchedules(this.idEstudiante, this.selectedJornada).subscribe(
      data => {
        this.schedules =   data //this.schedules1
        //console.log('response')
        //console.log(this.schedules)
        this.isEnabled = !this.schedules ? false : true;
      }
    );
  }
  
  consultarEvent() {
    if (this.selectedJornada !== 0 && this.idEstudiante) {
      this.getSchedules();
    }
  }

  logOut() {
    this.selectedJornada = 0;
    this.selectedMateria = 0;
    this.idEstudiante = 0;
    Swal.fire({

      title: 'Hasta Luego!',
      text: 'Cierre de session exitoso',
      icon: 'success',
      confirmButtonColor: '#3085d6'
    }
    )
    this.router.navigate(['/login']);
  }

}
