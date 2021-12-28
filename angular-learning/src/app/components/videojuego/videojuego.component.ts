import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit {
  public titulo: string;
  public listado:string;

  constructor() { 
    this.titulo = 'Componente de videojuegos';
    this.listado = 'Aquí se mostrará el listado de los videojuegos';
    console.log('VideojuegoComponent loading...');
  }

  ngOnInit(): void {
  }

}
