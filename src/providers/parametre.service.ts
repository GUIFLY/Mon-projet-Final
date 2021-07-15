import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParametreService {

  constructor(private http:HttpClient) { }

  public getParametre(){
    return this.http.get("http://localhost:9090/mesConstantes");
    //{headers: new HttpHeaders({Authorization: 'Bearer '+this.keycloakService.kc.token})})
  }
}
