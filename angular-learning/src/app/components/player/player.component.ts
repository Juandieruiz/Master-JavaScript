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

  constructor() { 
    this.player = [
        new Player('Kali', 'Francotirador', 'Subfusil', 'Flack', false),
        new Player('Leon', 'M4- R7', '.90', 'Localizer', true),
        new Player('Ash', 'Ak - md', 'revolver', 'BreacherWall', false),
        new Player('Zero', 'raz 23', 'minigun', 'HackerCam', true),
        new Player('Gridlock', 'Fusil', 'miniescopeta', 'Knifes', true),
    ];
  }

  ngOnInit(): void {
  }

}
