import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { RainbowSixSiegeComponent } from './components/rainbow-six-siege/rainbow-six-siege.component';
import { VideojuegoComponent } from './components/videojuego/videojuego.component';

const routes: Routes = [
  { path: '',
    component: HomeComponent,
  },
  { path: 'rainbow',
    component: PlayerComponent,
  },
  { path: 'videojuego',
    component: VideojuegoComponent,
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
