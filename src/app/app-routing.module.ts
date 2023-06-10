import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './pages/welcome-page/welcome-page.component';
import { ChampionPageComponent } from './pages/champion-page/champion-page.component';

const routes: Routes = [
  {
    path:'welcome',
    component:WelcomePageComponent
  },
  {
    path:'champion/:ChampionName',
    component: ChampionPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
