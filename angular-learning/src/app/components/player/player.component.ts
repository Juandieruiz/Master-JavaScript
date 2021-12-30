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
public armeria: String[];
public mapa: String;
public user_name: string;

  constructor() { 
    this.mapa = 'mapa2';
    this.armeria = new Array();
    this.user_name = 'user_name';
    this.player = [
        new Player('Kali', 'Francotirador', 'Subfusil', 'Flack','mapa1', false),
        new Player('Leon', 'M4- R7', '.90', 'Localizer','mapa2', true),
        new Player('Ash', 'Ak - md', 'revolver', 'BreacherWall','mapa2', true),
        new Player('Zero', 'raz 23', 'minigun', 'HackerCam','mapa3', true),
        new Player('Gridlock', 'Fusil', 'miniescopeta', 'Knifes','mapa2', false),
    ];
  }

  ngOnInit(): void {
    this.getArmeria();
  }

  getArmeria(){
    this.player.forEach((select,index) => {
      if(select.disponible){
        this.armeria.push("Arma 1: " + select.arma1  + " | Arma 2: " + select.arma2);
        
      }
    });
  }

  sayMyName(){
    alert("El usuario actual del juego es: " + this.user_name);
  }
  

}
