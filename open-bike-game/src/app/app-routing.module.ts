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
      { path: '', redirectTo: 'editor', pathMatch: 'full' },
      { path: 'editor', title: 'race-editor', component: RaceEditorComponent },
      { path: 'view', title: 'race-editor', component: RaceViewComponent },
    ],
  },
  { path: '', redirectTo: '/main-menu', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
