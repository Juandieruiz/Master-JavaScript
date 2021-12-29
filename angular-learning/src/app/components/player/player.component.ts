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

  constructor() { 
    this.armeria = new Array();
    this.player = [
        new Player('Kali', 'Francotirador', 'Subfusil', 'Flack', false),
        new Player('Leon', 'M4- R7', '.90', 'Localizer', true),
        new Player('Ash', 'Ak - md', 'revolver', 'BreacherWall', true),
        new Player('Zero', 'raz 23', 'minigun', 'HackerCam', true),
        new Player('Gridlock', 'Fusil', 'miniescopeta', 'Knifes', false),
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

    console.log(this.armeria);
  }

}
