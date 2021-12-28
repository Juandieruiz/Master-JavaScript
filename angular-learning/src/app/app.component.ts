import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Master JavaScript & Angular';
  public mostrarVideojuegos: boolean = true;

  Ranking(value: any) {
    this.mostrarVideojuegos = value;
  }


}
