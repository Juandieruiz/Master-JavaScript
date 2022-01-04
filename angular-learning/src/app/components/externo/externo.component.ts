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

  constructor(
    
    private _http: HttpClientModule,
    private _peticionService: PeticionesService,
    ) { 
      this.userId = 1;
      }

  ngOnInit() {
    this.cargaUsuario();
  }
    
    cargaUsuario(){
    // Suscribe tiene dos metodos de callback (result y error)
      this._peticionService.getUsers(this.userId).subscribe(
        result => {
          this.user = result.data;
          console.log(result);
        }
      );
    }
}




