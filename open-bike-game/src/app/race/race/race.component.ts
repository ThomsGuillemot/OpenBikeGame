import { Component } from '@angular/core';
import { RaceService } from '../race.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
})
export class RaceComponent {
  constructor(private router: Router, private raceService: RaceService) {}
}
