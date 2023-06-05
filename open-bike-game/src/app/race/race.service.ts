import { RaceConfiguration, RaceManager, RaceType } from 'src/bike-game-engine';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  private _raceConfiguration: RaceConfiguration;

  /**
   * Return the shallow copy of the race configuration stored in the service
   */
  public get raceConfiguration(): RaceConfiguration {
    return Object.assign({}, this._raceConfiguration);
  }
  public set raceConfiguration(value: RaceConfiguration) {
    this._raceConfiguration = value;
  }
  raceManager: RaceManager | undefined;

  constructor() {
    this._raceConfiguration = {
      type: RaceType.Distance,
      distance: 500,
      duration: 180,
    };
  }

  initRace(canvas: HTMLElement) {
    this.raceManager = new RaceManager(this.raceConfiguration);
    this.raceManager.init(canvas);
    this.raceManager.startRenderingLoop();
  }

  startRace(): void {
    if (!this.raceManager)
      console.error('Initialize the race before starting it !');

    console.log('Start the Race !');
  }

  stopRace(): void {
    if (!this.raceManager)
      console.error('Initialize the race before stopping it !');

    console.log('Stop the race');
  }

  stopRender(): void {
    this.raceManager?.stopRender();
  }
}
