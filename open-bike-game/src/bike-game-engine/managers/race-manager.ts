import * as THREE from 'three';

import { Camera, Scene, WebGLRenderer } from 'three';

import { RaceConfiguration } from 'src/bike-game-engine/data-structures';

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

  constructor(raceConfiguration: RaceConfiguration) {
    this.raceConfiguration = raceConfiguration;
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
