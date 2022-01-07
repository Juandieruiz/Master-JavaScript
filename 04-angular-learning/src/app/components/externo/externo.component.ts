import { Component, OnInit } from '@angular/core';
import { PeticionesService } from 'src/app/services/peticiones.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
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
  public usuario_guardado:any;

  // TODO: Ejercicio con formularios, AJAX  y HTTP Post
  public new_user:any;

  constructor(
    
    private _http: HttpClientModule,
    private _peticionService: PeticionesService,
    ) { 
      this.userId = 1;
      this.numero1 = 750;
      this.numero2 = 250;
        this.new_user = {
                            "name": "morpheus",
                            "job": "leader"
                        }
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

    onSubmit(form: any){
      this._peticionService.addUser(this.new_user).subscribe(
        result => {
          this.usuario_guardado = result;
          form.reset();
        }
      );
    }
    

}




