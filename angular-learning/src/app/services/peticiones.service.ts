import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  // Definimos la url
  public url: string;
  
  constructor(
    public _http: HttpClient
  ) {
    // Url Base de la API
      this.url = "https://reqres.in/";
    }
  
    // Metodo para obtener los usuarios
  getUsers(userId: number): Observable<any> {
    return this._http.get(this.url+'api/users/'+userId);  
  }
}
