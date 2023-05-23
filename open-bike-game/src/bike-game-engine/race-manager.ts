import { RaceConfiguration } from './race-configuration';

/**
 * This manager is responsible of starting a race, get back the result
 * and communicating with the race view
 */
export class RaceManager {
  private raceConfiguration: RaceConfiguration;

  constructor(raceConfiguration: RaceConfiguration) {
    this.raceConfiguration = raceConfiguration;
  }
}
