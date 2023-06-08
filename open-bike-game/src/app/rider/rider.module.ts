import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RiderEditorComponent } from './rider-editor/rider-editor.component';

@NgModule({
  declarations: [RiderEditorComponent],
  imports: [CommonModule],
  exports: [RiderEditorComponent],
})
export class RiderModule {}
