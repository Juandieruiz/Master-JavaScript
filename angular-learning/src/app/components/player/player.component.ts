import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})

export class PlayerComponent implements OnInit {
  public team: string = "Equipo Atacante";
  public jugadores: String[];
  public mapa: String;
  public user_name: string;
  public players: Array<Player> = [];

  constructor(
    private _playerService: PlayerService) { 

    this.mapa = 'mapa2';
    this.jugadores = new Array();
    this.user_name = 'user_name';
    
  }

  ngOnInit(){
    this.players = this._playerService.getPlayers();
  }

  getArmeria(){
    this.players.forEach((select,index) => {
      if(select.disponible){
        this.jugadores.push("Nombre de usuario: " + select.userName );
        
      }
    });
  }

  myPlayer(){
    alert("El usuario que deseas agregar a tus amigos es: " + this.user_name);
  }

  addPlayer(){
    this.jugadores.push("Nombre de usuario: " +this.user_name);
  }
  
  borrarAmigo(indice: any){
    // delete this.player[indice];
    this.jugadores.splice(indice,1);
  }

  onBlur(){
    console.log("you enter in the blur")
  }

  alertName(){
    alert(this.user_name)
  }
}
