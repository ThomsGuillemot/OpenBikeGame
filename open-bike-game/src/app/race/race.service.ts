import * as THREE from 'three';

import { Camera, Scene } from 'three';
import { RaceConfiguration, RaceManager, RaceType } from 'src/bike-game-engine';

import { Injectable } from '@angular/core';
import { ThreeRenderingComponent } from '../interfaces/three-rendering-component';

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

  // Return a shallow copy of the race configuration
  TheRaceConfiguration() {}
  raceManager!: RaceManager;

  currentScene!: Scene;
  currentCamera!: Camera;

  renderingComponent!: ThreeRenderingComponent;

  private cube!: THREE.Mesh;

  constructor() {
    this._raceConfiguration = {
      type: RaceType.Distance,
      distance: 500,
      duration: 180,
    };
  }

  StartRace(threeRenderingComponent: ThreeRenderingComponent): void {
    this.renderingComponent = threeRenderingComponent;
    this.raceManager = new RaceManager(this.raceConfiguration);
    this.createScene();
  }

  private createScene(): void {
    this.currentScene = new THREE.Scene();
    this.currentScene.background = new THREE.Color(0x555555);
    this.currentCamera = new THREE.PerspectiveCamera(
      75,
      this.renderingComponent.aspectRatio,
      0.1,
      1000
    );
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x55ff55 });
    this.cube = new THREE.Mesh(geometry, material);
    this.currentScene.add(this.cube);

    this.currentCamera.position.z = 5;
  }

  updateScene(): void {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
  }
}
