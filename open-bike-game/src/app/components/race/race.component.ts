import { Component } from '@angular/core';
import { RaceService } from 'src/app/services/race.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss'],
  providers: [RaceService],
})
export class RaceComponent {
  constructor(private raceService: RaceService) {}
}
