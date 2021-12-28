import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';
import { RainbowSixSiegeComponent } from './components/rainbow-six-siege/rainbow-six-siege.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    RainbowSixSiegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
