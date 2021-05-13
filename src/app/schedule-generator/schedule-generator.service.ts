import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AppSettings } from '../models/appSettings';
import { Schedule } from '../models/schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleGeneratorService {

  private URLEndpoint = AppSettings.API_ENDPOINT;

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Methods': 'GET','Access-Control-Allow-Origin': '*' });
  constructor(private http: HttpClient) { }



  getSchedules(idEstudiante: number, jornada: number): Observable<Schedule>{

    return this.http.get<Schedule>(this.URLEndpoint + 'HorarioXEstudiante/?canMateria=' + 1 + '&idEstudiante=' + idEstudiante + '&jornada=' + jornada).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
    );


    
  }
}
