import { AppRoutingModule } from '../app-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RaceComponent } from './race/race.component';
import { RaceEditorComponent } from './race-editor/race-editor.component';
import { RaceViewComponent } from './race-view/race-view.component';

@NgModule({
  declarations: [RaceComponent, RaceViewComponent, RaceEditorComponent],
  imports: [CommonModule, AppRoutingModule, FormsModule],
  exports: [RaceComponent, RaceEditorComponent, RaceViewComponent],
})
export class RaceModule {}
