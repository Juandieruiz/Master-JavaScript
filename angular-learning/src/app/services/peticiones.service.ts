import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  // TODO: Ejercicio con formularios, AJAX  y HTTP Post
    // funcion para agregar usuarios, mandamos un user y esperamos respuesta del servidor en el Observable

    addUser(user: any): Observable<any>{
      let params = JSON.stringify(user);
      let headers = new HttpHeaders().set('Content-Type', 'application/json');
        
        return this._http.post(this.url+'api/users',params, {headers:headers})
    }
}
