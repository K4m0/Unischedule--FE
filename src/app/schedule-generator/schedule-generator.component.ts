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
  Horarios = [
    {
        "horarioId": 1,
        "content": [
            {
                "id": 1,
                "hora": "12: 00",
                "Lunes": "Calculo 1",
                "Martes": "",
                "Miercoles": "",
                "Jueves": "Calculo 2",
                "Viernes": "",
                "Sabado": ""
            },
            {
                "id": 2,
                "hora": "13: 00",
                "Lunes": "",
                "Martes": "Ingles",
                "Miercoles": "",
                "Jueves": "",
                "Viernes": "Inteligencia Artificial",
                "Sabado": ""
            },
            {
                "id": 3,
                "hora": "14: 00",
                "Lunes": "",
                "Martes": "",
                "Miercoles": "Programacion Avanzada",
                "Jueves": "",
                "Viernes": "",
                "Sabado": "Computacion Grafica"
            },
            {
                "id": 4,
                "hora": "15: 00",
                "Lunes": "",
                "Martes": "",
                "Miercoles": "",
                "Jueves": "",
                "Viernes": "",
                "Sabado": ""
            }
        ]
    },
    {
        "horarioId": 2,
        "content": [
            {
                "id": 1,
                "hora": "12: 00",
                "Lunes": "Calculo 1",
                "Martes": "",
                "Miercoles": "",
                "Jueves": "Calculo 2",
                "Viernes": "",
                "Sabado": ""
            },
            {
                "id": 2,
                "hora": "13: 00",
                "Lunes": "",
                "Martes": "Ingles",
                "Miercoles": "",
                "Jueves": "",
                "Viernes": "Inteligencia Artificial",
                "Sabado": ""
            },
            {
                "id": 3,
                "hora": "14: 00",
                "Lunes": "",
                "Martes": "",
                "Miercoles": "Programacion Avanzada",
                "Jueves": "",
                "Viernes": "",
                "Sabado": "Computacion Grafica"
            },
            {
                "id": 4,
                "hora": "15: 00",
                "Lunes": "",
                "Martes": "",
                "Miercoles": "",
                "Jueves": "",
                "Viernes": "",
                "Sabado": ""
            }
        ]
    }
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
    console.log(this.Horarios);
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
    //this.schedules = this.Horarios2;
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
