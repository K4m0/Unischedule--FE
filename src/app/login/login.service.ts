import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSettings } from '../models/appSettings';
import { User } from '../models/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URLEndpoint = AppSettings.API_ENDPOINT;

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json','Access-Control-Allow-Methods': 'GET','Access-Control-Allow-Origin': '*' });
  constructor(private http: HttpClient) { }

  

  authentication(user:string,password:string):Observable<User> {
    return this.http.get<User>(this.URLEndpoint +'login/?usuario=' + user + '&pass=' + password, {headers: this.httpHeaders}).pipe( 
      tap(data =>  
        console.log('All: ' + JSON.stringify(data)))
      );
  }
}
