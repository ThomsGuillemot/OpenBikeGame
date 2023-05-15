import { race } from "rxjs";
import { RaceConfiguration } from "./race-configuration";

export class RaceManager {
  raceConfiguration : RaceConfiguration;

  constructor(raceConfiguration : RaceConfiguration)
  {
    this.raceConfiguration = raceConfiguration;
  }
}
