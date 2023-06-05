import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RaceConfigurationViewModel } from '../race-configuration.view-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-race-editor',
  templateUrl: './race-editor.component.html',
  styleUrls: ['./race-editor.component.scss'],
})
export class RaceEditorComponent {
  @Output() commitedConfiguration =
    new EventEmitter<RaceConfigurationViewModel>();
  @Input() raceConfiguration = new RaceConfigurationViewModel();

  constructor(public router: Router) {}
  /**
   * Send the race configuration to the parent component
   */
  doConfirmRaceConfiguration() {
    this.commitedConfiguration.emit(this.raceConfiguration);
  }

  confirmAndStartRace() {
    this.doConfirmRaceConfiguration();
    /**
     * @todo : Transform in a navigation with .next() and .back()
     */
    this.router.navigate(['/race/view']);
  }
}
