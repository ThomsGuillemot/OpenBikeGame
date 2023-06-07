import * as THREE from 'three';

import { Camera, Scene, WebGLRenderer } from 'three';
import { RaceConfiguration, Rider } from 'src/bike-game-engine/data-structures';

import { parse as uuidParse } from 'uuid';

/**
 * This manager is responsible of starting a race, get back the result
 * and communicating with the race view
 */
export class RaceManager {
  private raceConfiguration: RaceConfiguration;

  private _renderer: WebGLRenderer | undefined;
  private _scene: Scene | undefined;
  private _camera: Camera | undefined;
  private _cube: THREE.Mesh | undefined;
  private _riders: Rider[] = [];

  constructor(raceConfiguration: RaceConfiguration) {
    this.raceConfiguration = raceConfiguration;
  }

  registerNewRider(newRider: Rider) {
    if (!newRider) {
      console.error(`The given rider is undefined or null : ${newRider}`);
      return;
    }

    if (newRider.pseudo.length < 3) {
      console.error(
        `The rider name is too short ! It must be more than 3 characters`
      );
      return;
    }

    try {
      uuidParse(newRider.uuid);
    } catch (e) {
      console.error(`The rider uuid is invalid`);
    }

    const riderIsAlreadyRegistered = (rider: Rider) =>
      rider.pseudo === newRider.pseudo;
    if (this._riders.findIndex(riderIsAlreadyRegistered) !== -1) {
      console.error(
        `The pseudo ${newRider.pseudo} is already in use for this race`
      );
    }
    this._riders.push(newRider);
  }

  unregisterRider(leavingRider: Rider) {
    const index = this._riders.findIndex(
      (rider) => leavingRider.uuid === rider.uuid
    );
    if (index === -1) {
      console.warn(
        `Unable to find the rider ${leavingRider.pseudo} in the registered riders`
      );
      return;
    }

    this._riders.splice(index, 1);
  }

  clearRiders() {
    this._riders = [];
  }

  init(canvas: HTMLElement) {
    this.initRenderer(canvas);
    this.init3dScene();
  }

  private initRenderer(canvas: HTMLElement) {
    if (this._renderer === undefined)
      this._renderer = new WebGLRenderer({ canvas });
    this._renderer.setPixelRatio(devicePixelRatio);
    this._renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  }

  private init3dScene() {
    this._scene = new THREE.Scene();
    this._scene.background = new THREE.Color(0x555555);
    let aspectRatio = new THREE.Vector2();
    this._renderer?.getSize(aspectRatio);
    this._camera = new THREE.PerspectiveCamera(
      75,
      aspectRatio.x / aspectRatio.y,
      0.1,
      1000
    );

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x55ff55 });
    this._cube = new THREE.Mesh(geometry, material);
    this._scene.add(this._cube);

    this._camera.position.z = 5;
  }

  startRenderingLoop() {
    if (!this._renderer) {
      console.error('The renderer was not initialized !');
      return;
    }
    let renderParent: RaceManager = this;
    let render = function () {
      requestAnimationFrame(render);
      renderParent.updateScene();
      if (renderParent._scene && renderParent._camera) {
        renderParent._renderer!.render(
          renderParent._scene,
          renderParent._camera
        );
      }
    };
    render();
  }

  /**
   * Dispose the renderer
   */
  stopRender() {
    this._renderer?.dispose();
  }

  private updateScene() {
    if (this._cube) {
      this._cube.rotation.x += 0.01;
      this._cube.rotation.y += 0.01;
    }
  }
}
