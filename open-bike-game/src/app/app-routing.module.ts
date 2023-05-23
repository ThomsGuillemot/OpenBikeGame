import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRaceComponent } from './edit-race/edit-race.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RaceViewComponent } from './race-view/race-view.component';
import { RaceComponent } from './race/race.component';

const routes: Routes = [
  { path: 'main-menu', component: MainMenuComponent },
  {
    path: 'race',
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: EditRaceComponent },
      { path: 'view', component: RaceViewComponent },
    ],
  },
  { path: '', redirectTo: '/main-menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
