import { RaceConfiguration, RaceType } from 'src/bike-game-engine';

export class RaceConfigurationViewModel implements RaceConfiguration {
  type: RaceType = RaceType.Distance;
  distance: number = 0.0;
  duration: number = 0.0;
}
