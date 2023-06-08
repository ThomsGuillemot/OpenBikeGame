import { Component, EventEmitter, Input, Output } from '@angular/core';

import { RaceConfiguration } from '@GameEngine/data-structures';
import { RaceService } from '../race.service';
import { RiderEditorComponent } from 'src/app/rider/rider-editor/rider-editor.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-race-editor',
  templateUrl: './race-editor.component.html',
  styleUrls: ['./race-editor.component.scss'],
})
export class RaceEditorComponent {
  raceConfiguration: RaceConfiguration;

  constructor(public router: Router, private raceService: RaceService) {
    // Shallow copy as Race configuration should not be a complex object
    this.raceConfiguration = raceService.raceConfiguration;
  }

  /**
   * Store the configuration into the race service
   */
  private doConfirmRaceConfiguration() {
    this.raceService.raceConfiguration = this.raceConfiguration;
  }

  confirmAndStartRace() {
    this.doConfirmRaceConfiguration();
    this.router.navigate(['/race/view']);
  }
}
