import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './components';
import { NgModule } from '@angular/core';
import { RaceComponent } from './race/race/race.component';
import { RaceEditorComponent } from './race/race-editor/race-editor.component';
import { RaceViewComponent } from './race/race-view/race-view.component';

const routes: Routes = [
  { path: 'main-menu', component: MainMenuComponent },
  {
    path: 'race',
    component: RaceComponent,
    children: [
      { path: '', redirectTo: 'edit', pathMatch: 'full' },
      { path: 'edit', component: RaceEditorComponent },
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
