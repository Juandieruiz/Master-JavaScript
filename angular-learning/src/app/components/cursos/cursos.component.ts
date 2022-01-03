import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  public nombre!: string;
  public followers!: number;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    // Suscripcion a Ruta URL a espera de un nombre y numero
    this._route.params.subscribe((params: Params) =>{
      this.nombre = params['nombre'];
      this.followers = +params['followers'];

      if (this.nombre == 'gotohome') {
      this._router.navigate(['/home'])
        
      }


    });

  }

  redirigir(){
    this._router.navigate(['/home'])
  }
}
