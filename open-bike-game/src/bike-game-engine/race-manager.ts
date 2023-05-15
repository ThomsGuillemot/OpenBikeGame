import { RaceConfiguration } from './race-configuration';

export class RaceManager {
  private raceConfiguration: RaceConfiguration;

  constructor(raceConfiguration: RaceConfiguration) {
    this.raceConfiguration = raceConfiguration;
  }
}
