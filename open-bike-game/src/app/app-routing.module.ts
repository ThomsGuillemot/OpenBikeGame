import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditRaceComponent, MainMenuComponent, RaceViewComponent } from './components';

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
