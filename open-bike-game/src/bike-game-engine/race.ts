import { RaceType } from "./race-type";

export interface Race {
  /// The type of the race.
  type: RaceType;
  /// Distance of the race In meters
  distance : number;
  /// Duration of the race in Minutes
  duration : number;
}
