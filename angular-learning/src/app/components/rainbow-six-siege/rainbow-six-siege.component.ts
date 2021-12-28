import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rainbow-six-siege',
  templateUrl: './rainbow-six-siege.component.html',
  styleUrls: ['./rainbow-six-siege.component.css']
})
export class RainbowSixSiegeComponent implements OnInit {
  public titulo: string = "Bienvenidos a Rainbow Six Siege";
  constructor() { }

  ngOnInit(): void {
  }

}
