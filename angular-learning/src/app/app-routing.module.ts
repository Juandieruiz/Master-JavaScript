import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './components/cursos/cursos.component';
import { ExternoComponent } from './components/externo/externo.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { RainbowSixSiegeComponent } from './components/rainbow-six-siege/rainbow-six-siege.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';

const routes: Routes = [
  { path: 'home',
    component: HomeComponent,
  },
  { path: 'player',
    component: PlayerComponent,
  },
  { path: 'xbox',
    component: VideojuegoComponent,
  },
  {
    path: 'rainbow',
    component: RainbowSixSiegeComponent,
  },
  {
    path: 'cursos',
    component: CursosComponent
  },
  {
    path: 'cursos/:nombre/:followers',
    component: CursosComponent
  },
  {
    path: 'externo',
    component: ExternoComponent
  },
  { path: '**',
    component: HomeComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
