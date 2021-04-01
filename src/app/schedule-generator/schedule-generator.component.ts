import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-generator',
  templateUrl: './schedule-generator.component.html',
  styleUrls: ['./schedule-generator.component.css']
})
export class ScheduleGeneratorComponent implements OnInit {

  Horarios = [
    [
      {
        "id": 23,
        "codigo": "45360012",
        "nombre": "FISICA II",
        "creditos": 3,
        "horas": 4,
        "topologia": "Indispensable",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 71,
            "codigo": "2",
            "descripcion": "GRUPO 2 - FÍSICA II",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 29,
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
            ]
          }
        ]
      },
      {
        "id": 31,
        "codigo": "40050166",
        "nombre": "INGENIERIA DE SOFTWARE",
        "creditos": 3,
        "horas": 5,
        "topologia": "Indispensable",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 50,
            "codigo": "2",
            "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 34,
                "dia": 4,
                "hora_Inicio": "18:00",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              },
              {
                "id": 35,
                "dia": 2,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              },
              {
                "id": 36,
                "dia": 5,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              }
            ]
          }
        ]
      },
      {
        "id": 32,
        "codigo": "40050167       ",
        "nombre": "PLANIFICACION Y GESTION DE REDES",
        "creditos": 3,
        "horas": 6,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 51,
            "codigo": "1",
            "descripcion": "GRUPO 1 - PLANIFICACIÓN Y GESTIÓN DE REDES",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 37,
                "dia": 1,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              },
              {
                "id": 38,
                "dia": 3,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              },
              {
                "id": 39,
                "dia": 5,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              }
            ]
          }
        ]
      }
    ],
    [
      {
        "id": 31,
        "codigo": "40050166       ",
        "nombre": "INGENIERIA DE SOFTWARE",
        "creditos": 3,
        "horas": 5,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 50,
            "codigo": "2",
            "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 34,
                "dia": 4,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              },
              {
                "id": 35,
                "dia": 2,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              },
              {
                "id": 36,
                "dia": 5,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              }
            ]
          }
        ]
      },
      {
        "id": 23,
        "codigo": "45360012",
        "nombre": "FISICA II",
        "creditos": 3,
        "horas": 4,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 71,
            "codigo": "2",
            "descripcion": "GRUPO 2 - FÍSICA II",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 29,
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
            ]
          }
        ]
      },
      {
        "id": 32,
        "codigo": "40050167",
        "nombre": "PLANIFICACION Y GESTION DE REDES",
        "creditos": 3,
        "horas": 6,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 51,
            "codigo": "1",
            "descripcion": "GRUPO 1 - PLANIFICACIÓN Y GESTIÓN DE REDES",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 37,
                "dia": 1,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              },
              {
                "id": 38,
                "dia": 3,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              },
              {
                "id": 39,
                "dia": 5,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              }
            ]
          }
        ]
      }
    ],
    [
      {
        "id": 32,
        "codigo": "40050167",
        "nombre": "PLANIFICACION Y GESTION DE REDES",
        "creditos": 3,
        "horas": 6,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 51,
            "codigo": "1",
            "descripcion": "GRUPO 1 - PLANIFICACIÓN Y GESTIÓN DE REDES",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 37,
                "dia": 1,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              },
              {
                "id": 38,
                "dia": 3,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              },
              {
                "id": 39,
                "dia": 5,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              }
            ]
          }
        ]
      },
      {
        "id": 23,
        "codigo": "45360012",
        "nombre": "FISICA II",
        "creditos": 3,
        "horas": 4,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 71,
            "codigo": "2",
            "descripcion": "GRUPO 2 - FÍSICA II",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 29,
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
            ]
          }
        ]
      },
      {
        "id": 31,
        "codigo": "40050166",
        "nombre": "INGENIERIA DE SOFTWARE",
        "creditos": 3,
        "horas": 5,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 50,
            "codigo": "2",
            "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 34,
                "dia": 4,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              },
              {
                "id": 35,
                "dia": 2,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              },
              {
                "id": 36,
                "dia": 5,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              }
            ]
          }
        ]
      }
    ],
    [
      {
        "id": 37,
        "codigo": "40050171",
        "nombre": "PRACTICA INGENIERIA IV",
        "creditos": 3,
        "horas": 4,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 56,
            "codigo": "1",
            "descripcion": "GRUPO 1 - PRÁCTICA DE INGENIERÍA DE SISTEMAS IV",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 40,
                "dia": 2,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 56
              },
              {
                "id": 41,
                "dia": 5,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 56
              }
            ]
          }
        ]
      },
      {
        "id": 23,
        "codigo": "45360012",
        "nombre": "FISICA II",
        "creditos": 3,
        "horas": 4,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 71,
            "codigo": "2",
            "descripcion": "GRUPO 2 - FÍSICA II",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 29,
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
            ]
          }
        ]
      },
      {
        "id": 32,
        "codigo": "40050167",
        "nombre": "PLANIFICACION Y GESTION DE REDES",
        "creditos": 3,
        "horas": 6,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 51,
            "codigo": "1",
            "descripcion": "GRUPO 1 - PLANIFICACIÓN Y GESTIÓN DE REDES",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 37,
                "dia": 1,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              },
              {
                "id": 38,
                "dia": 3,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              },
              {
                "id": 39,
                "dia": 5,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              }
            ]
          }
        ]
      }
    ],
    [
      {
        "id": 38,
        "codigo": "40050168",
        "nombre": "INTELIGENCIA ARTIFICIAL",
        "creditos": 3,
        "horas": 4,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 52,
            "codigo": "1",
            "descripcion": "GRUPO 1 - INTELIGENCIA ARTIFICIAL",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 42,
                "dia": 3,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 52
              },
              {
                "id": 43,
                "dia": 6,
                "hora_Inicio": "09:00 ",
                "hora_Fin": "11:00 ",
                "id_Grupo": 52
              }
            ]
          }
        ]
      },
      {
        "id": 23,
        "codigo": "45360012",
        "nombre": "FISICA II",
        "creditos": 3,
        "horas": 4,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 71,
            "codigo": "2",
            "descripcion": "GRUPO 2 - FÍSICA II",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 29,
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              },
              {
                "id": 30,
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 71
              }
            ]
          }
        ]
      },
      {
        "id": 31,
        "codigo": "40050166",
        "nombre": "INGENIERIA DE SOFTWARE",
        "creditos": 3,
        "horas": 5,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 50,
            "codigo": "2",
            "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 34,
                "dia": 4,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              },
              {
                "id": 35,
                "dia": 2,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              },
              {
                "id": 36,
                "dia": 5,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              }
            ]
          }
        ]
      }
    ],
    [
      {
        "id": 40,
        "codigo": "40050173",
        "nombre": "COMPUTACION GRAFICA",
        "creditos": 3,
        "horas": 5,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 58,
            "codigo": "1",
            "descripcion": "GRUPO 1 - COMPUTACIÓN GRÁFICA",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 44,
                "dia": 1,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 58
              },
              {
                "id": 45,
                "dia": 3,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 58
              },
              {
                "id": 46,
                "dia": 5,
                "hora_Inicio": "21:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 58
              }
            ]
          }
        ]
      },
      {
        "id": 31,
        "codigo": "40050166",
        "nombre": "INGENIERIA DE SOFTWARE",
        "creditos": 3,
        "horas": 5,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 50,
            "codigo": "2",
            "descripcion": "GRUPO 2 - INGENIERÍA DE SOFTWARE",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 34,
                "dia": 4,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              },
              {
                "id": 35,
                "dia": 2,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              },
              {
                "id": 36,
                "dia": 5,
                "hora_Inicio": "18:00 ",
                "hora_Fin": "20:00 ",
                "id_Grupo": 50
              }
            ]
          }
        ]
      },
      {
        "id": 32,
        "codigo": "40050167",
        "nombre": "PLANIFICACION Y GESTION DE REDES",
        "creditos": 3,
        "horas": 6,
        "topologia": "Indispensable  ",
        "planEstudio": 1,
        "lstGrupo": [
          {
            "id": 51,
            "codigo": "1",
            "descripcion": "GRUPO 1 - PLANIFICACIÓN Y GESTIÓN DE REDES",
            "capacidad": 15,
            "id_Asignatura": null,
            "horarios": [
              {
                "id": 37,
                "dia": 1,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              },
              {
                "id": 38,
                "dia": 3,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              },
              {
                "id": 39,
                "dia": 5,
                "hora_Inicio": "20:00 ",
                "hora_Fin": "22:00 ",
                "id_Grupo": 51
              }
            ]
          }
        ]
      }
    ]
  ]
  ;

  constructor() { }

  ngOnInit(): void {
    console.log(this.Horarios);
  }

}
