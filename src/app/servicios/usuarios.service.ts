import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

let API_URL = 'http://localhost:8080/api/v1/usuarios/';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient){}

  obtenerTodosUsuarios (): Observable<any> {
    return this.http.get( API_URL ,
      {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  }
}
