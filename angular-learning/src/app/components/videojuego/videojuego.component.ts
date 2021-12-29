import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-videojuego',
  templateUrl: './videojuego.component.html',
  styleUrls: ['./videojuego.component.css']
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
  public titulo: string;
  public listado:string;

  constructor() { 
    this.titulo = 'Componente de videojuegos';
    this.listado = 'Aquí se mostrará el listado de los videojuegos';
    // Se ejecuta antes de que se cargue el componente
    // console.log('Constructor EJECUTADO...');
  }

  ngOnInit(): void {
    // Se ejecuta después de que se cargue el componente
    // console.log("onInit EJECUTADO...");
  }

  ngDoCheck(): void {
    // Se ejecuta cada vez que se detecta un cambio en el componente
    // console.log("DoCheck EJECUTADO...");
  }
  ngOnDestroy(): void {
    // Se ejecuta antes de que el componente sea eliminado
      // console.log("OnDestroy EJECUTADO...");
  }

  cambiarTitulo() {
    this.titulo = 'Bienvenido a Rainbow Six Siege';
  }
}
