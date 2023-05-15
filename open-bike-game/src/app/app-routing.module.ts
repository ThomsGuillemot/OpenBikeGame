import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRaceComponent } from './edit-race/edit-race.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RaceViewComponent } from './race-view/race-view.component';

const routes: Routes = [
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'edit-race', component: EditRaceComponent },
  { path: 'race-view', component: RaceViewComponent },
  { path: '', redirectTo: '/main-menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
