import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../models/appSettings';

@Component({
  selector: 'app-schedule-generator',
  templateUrl: './schedule-generator.component.html',
  styleUrls: ['./schedule-generator.component.css']
})
export class ScheduleGeneratorComponent implements OnInit {
  private URLEndpoint = AppSettings.API_ENDPOINT;
  Horarios = 
  [
    [
      {
        "id": 23,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      },
      {
        "id": 31,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 1 - IA                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 1 - IA                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      },
    {
        "id": 32,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 3 - COMPUTACION GRAFICA                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 3 - COMPUTACION GRAFICA                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      }
    ],
    [
      {
        "id": 23,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      },
      {
        "id": 31,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      },
    {
        "id": 32,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      }
    ],
    [
      {
        "id": 23,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      },
      {
        "id": 31,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      },
    {
        "id": 32,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      }
    ],
    [
      {
        "id": 23,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      },
      {
        "id": 31,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      },
    {
        "id": 32,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      }
    ],
    [
      {
        "id": 23,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      },
      {
        "id": 31,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      },
    {
        "id": 32,
        "horarios": [
              {
                "id": 29,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
          "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE                  ",
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
      ]
      }
    ]
  ]
    ;
  
  Horarios2 = [
    [
      {
        "franjaHoraria": "18:00-20:00",
        "materias": [
          {
            "idGrupo": 71,
            "descripcion": "GRUPO 2 - FÍSICA II",
            "dia": 1
          },
          {
            "idGrupo": 71,
            "descripcion": "GRUPO 2 - FÍSICA II",
            "dia": 3
          },
          {
            "idGrupo": 50,
            "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE",
            "dia": 2
          },
          {
            "idGrupo": 50,
            "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE",
            "dia": 4
          },
          {
            "idGrupo": 50,
            "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE",
            "dia": 5
          },
        ]
      },
      {
        "franjaHoraria": "20:00-22:00",
        "materias": [
          {
            "idGrupo": 51,
            "descripcion": "GRUPO 1 - PLANIFICACIÓN Y GESTIÓN DE REDES",
            "dia": 1
          },
          {
            "idGrupo": 51,
            "descripcion": "GRUPO 1 - PLANIFICACIÓN Y GESTIÓN DE REDES",
            "dia": 3
          },
          {
            "idGrupo": 51,
            "descripcion": "GRUPO 1 - PLANIFICACIÓN Y GESTIÓN DE REDES",
            "dia": 5
          }
        ]
      }
    ],
    [
      {
        "franjaHoraria": "18:00-20:00",
        "materias": [
          {
            "idGrupo": 71,
            "descripcion": "GRUPO 2 - FÍSICA II",
            "dia": 1
          },
          {
            "idGrupo": 71,
            "descripcion": "GRUPO 2 - FÍSICA II",
            "dia": 3
          },
          {
            "idGrupo": 50,
            "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE",
            "dia": 2
          },
          {
            "idGrupo": 50,
            "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE",
            "dia": 4
          },
          {
            "idGrupo": 50,
            "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE",
            "dia": 5
          },
        ]
      },
      {
        "franjaHoraria": "20:00-22:00",
        "materias": [
          {
            "idGrupo": 51,
            "descripcion": "GRUPO 1 - PLANIFICACIÓN Y GESTIÓN DE REDES",
            "dia": 1
          },
          {
            "idGrupo": 51,
            "descripcion": "GRUPO 1 - PLANIFICACIÓN Y GESTIÓN DE REDES",
            "dia": 3
          },
          {
            "idGrupo": 51,
            "descripcion": "GRUPO 1 - PLANIFICACIÓN Y GESTIÓN DE REDES",
            "dia": 5
          }
        ]
      }
    ]
  ]

  schedules:any={};
  selectedJornada:number = 0;
  selectedMateria: number = 0;
  idEstudiante: number = 0;
  

  jornadas: any = ['Nocturna', 'Diurna']
  
  materias: any = [1,2,3,4]

  isEnabled = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //console.log(this.Horarios2);
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
    this.schedules = this.Horarios2;
    /*this.http.get<any>(this.URLEndpoint + '?idEstudiante=' + this.idEstudiante + '&jornada=' + this.selectedJornada + '&canMateria=' + this.selectedMateria).subscribe(data => {
      this.schedules = data;
    })*/
  }
  
  consultarEvent() {
    if (this.selectedJornada !== 0 && this.selectedMateria !== 0 && this.idEstudiante) {
      this.getSchedules();
      this.isEnabled = !this.schedules ? false : true;
    }
  }

  validarHorario(opcionHorario:number) {
    console.log(this.schedules[opcionHorario])
  }

}
