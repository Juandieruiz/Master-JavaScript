import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
public player: Array<Player>;
public team: string = "Equipo Atacante";
public jugadores: String[];
public mapa: String;
public user_name: string;

  constructor() { 
    this.mapa = 'mapa2';
    this.jugadores = new Array();
    this.user_name = 'user_name';
    this.player = [
        new Player('Kali', 'Luis Alejandro', 'luisillo', 40,'mapa1', false),
        new Player('Leon', 'Jose Miguel', '.joselillo', 20,'mapa2', true),
        new Player('Ash', 'Luisa Fernanda', 'luisilla', 82,'mapa2', true),
        new Player('Zero', 'Diego Andres', 'dieguillo', 124,'mapa3', true),
        new Player('Gridlock', 'Alex Torres', 'alexillo', 55,'mapa2', false),
    ];
  }

  ngOnInit(): void {
    this.getArmeria();
  }

  getArmeria(){
    this.player.forEach((select,index) => {
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
