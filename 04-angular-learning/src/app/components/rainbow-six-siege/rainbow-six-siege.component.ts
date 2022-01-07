import { Component, OnInit } from '@angular/core';
import { Configuracion } from 'src/app/models/config';
@Component({
  selector: 'app-rainbow-six-siege',
  templateUrl: './rainbow-six-siege.component.html',
  styleUrls: ['./rainbow-six-siege.component.css']
})
export class RainbowSixSiegeComponent implements OnInit {

  public titulo: string = "Bienvenidos a la aplicacion Angular";
  public descripcion:string;
  public config;

  constructor() { 
    this.config = Configuracion;
    this.titulo = Configuracion.titulo;
    this.descripcion = Configuracion.descripcion;
  }

  ngOnInit(): void {
  }

}
