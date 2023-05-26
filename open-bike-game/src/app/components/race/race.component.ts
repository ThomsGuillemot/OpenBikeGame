import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { EditRaceComponent } from '../edit-race/edit-race.component';
import { RaceConfiguration } from 'src/bike-game-engine';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent {
  raceConfiguration?: RaceConfiguration;

  receiveRaceConfiguration($event: RaceConfiguration) {
    this.raceConfiguration = $event;
  }
}
