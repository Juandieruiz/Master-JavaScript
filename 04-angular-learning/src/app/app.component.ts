import { Component } from '@angular/core';
import { Configuracion } from './models/config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Master JavaScript & Angular';
  public descripcion:string;
  public config;

  constructor() { 
    this.config = Configuracion;
    this.title = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

}
