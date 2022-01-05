import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css']
})
export class ExternoComponent implements OnInit {
  public user:any;
  public userId: any;
  public fecha: any;
  public numero1:number;
  public numero2:number;

  constructor(
    
    private _http: HttpClientModule,
    private _peticionService: PeticionesService,
    ) { 
      this.userId = 1;
      this.numero1 = 750;
      this.numero2 = 250;
      }

  ngOnInit() {
    // Creación de Pipe
    this.fecha = new Date();

    this.cargaUsuario();
  }
    
    cargaUsuario(){
      this.user=false;
    // Suscribe tiene dos metodos de callback (result y error)
      this._peticionService.getUsers(this.userId).subscribe(
        result => {
          this.user = result.data;
          console.log(result);
        }
      );


    }
}




