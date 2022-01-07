import { Injectable } from '@angular/core';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  public player: Array<Player>;

  constructor() { 
    this.player = [
      new Player('Kali', 'Luis Alejandro', 'luisillo', 18,'mapa1', false),
      new Player('Leon', 'Jose Miguel', '.joselillo', 48,'mapa2', true),
      new Player('Ash', 'Luisa Fernanda', 'luisilla', 95,'mapa2', true),
      new Player('Zero', 'Diego Andres', 'dieguillo', 135,'mapa3', true),
      new Player('Gridlock', 'Alex Torres', 'alexillo', 250,'mapa2', false),
      
    ];
  }

  getTexto(){
    return "Hola Mundo desde el servicio";
  }


  getPlayers(): Array<Player>{
    return this.player;
  }


}
