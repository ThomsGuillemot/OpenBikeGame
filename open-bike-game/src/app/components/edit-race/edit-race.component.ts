import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RaceConfiguration } from 'src/bike-game-engine/race-configuration';
import { RaceType } from 'src/bike-game-engine/race-type';

@Component({
  selector: 'app-edit-race',
  templateUrl: './edit-race.component.html',
  styleUrls: ['./edit-race.component.scss'],
})
export class EditRaceComponent {
  raceConfiguration: RaceConfiguration = {
    type: RaceType.Distance,
    duration: 5,
    distance: 500,
  };
  /**
   * Event to register to, to be able to get the raceConfiguration
   */
  @Output() confirmRaceConfiguration = new EventEmitter();

  constructor(public router: Router){}
  /**
   * Send the race configuration to the parent component
   */
  doConfirmRaceConfiguration()
  {
    this.confirmRaceConfiguration.emit(this.raceConfiguration);
  }

  confirmAndStartRace()
  {
    this.doConfirmRaceConfiguration();
    this.router.navigate(['/main-menu'])
  }
}
