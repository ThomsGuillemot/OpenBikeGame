import { Component } from '@angular/core';
import { RaceConfiguration } from 'src/bike-game-engine/race-configuration';
import { RaceType } from 'src/bike-game-engine/race-type';

@Component({
  selector: 'app-edit-race',
  templateUrl: './edit-race.component.html',
  styleUrls: ['./edit-race.component.scss'],
})
export class EditRaceComponent {
  race: RaceConfiguration = {
    type: RaceType.Distance,
    duration: 0,
    distance: 0,
  };
}
