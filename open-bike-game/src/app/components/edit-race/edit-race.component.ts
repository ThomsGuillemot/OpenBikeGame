import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RaceService } from 'src/app/services/race.service';
import { RaceConfiguration } from 'src/bike-game-engine/race-configuration';

@Component({
  selector: 'app-edit-race',
  templateUrl: './edit-race.component.html',
  styleUrls: ['./edit-race.component.scss'],
})
export class EditRaceComponent {
  raceConfiguration: RaceConfiguration;
  /**
   * Event to register to, to be able to get the raceConfiguration
   */

  constructor(public router: Router, private raceService: RaceService) {
    this.raceConfiguration = raceService.raceConfiguration;
  }
  /**
   * Send the race configuration to the parent component
   */
  doConfirmRaceConfiguration() {
    this.raceService.raceConfiguration = this.raceConfiguration;
  }

  confirmAndStartRace() {
    this.doConfirmRaceConfiguration();
    this.router.navigate(['/race/view']);
  }
}
