import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule-generator',
  templateUrl: './schedule-generator.component.html',
  styleUrls: ['./schedule-generator.component.css']
})
export class ScheduleGeneratorComponent implements OnInit {

  ItemsArray = [
    { id: 1, hora: '12:00', Lunes: 'Calculo 1',Martes: '',Miercoles: '',Jueves: 'Calculo 2' ,Viernes: '',Sabado:''},
    { id: 1, hora: '13:00', Lunes: '',Martes: 'Ingles',Miercoles: '',Jueves: '' ,Viernes: 'asd',Sabado:'' },
    { id: 1, hora: '14:00', Lunes: '',Martes: '',Miercoles: 'Programacion Avanzada',Jueves: '' ,Viernes: '',Sabado:'554'},
    { id: 1, hora: '15:00', Lunes: '',Martes: '',Miercoles: '',Jueves: '' ,Viernes: '',Sabado:'' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
