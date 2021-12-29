import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RainbowSixSiegeComponent } from './components/rainbow-six-siege/rainbow-six-siege.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';

const routes: Routes = [
  { path: 'rainbow',
    component: RainbowSixSiegeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
