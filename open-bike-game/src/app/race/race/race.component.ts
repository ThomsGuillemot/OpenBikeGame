import { Component } from '@angular/core';
import { RaceConfiguration } from '@GameEngine/data-structures';
import { RaceService } from '../race.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
  providers: [RaceService],
})
export class RaceComponent {
  constructor(private router: Router, private raceService: RaceService) {}

  saveRaceConfiguration(raceConfiguration: RaceConfiguration) {
    this.raceService.raceConfiguration = raceConfiguration;
  }
}
