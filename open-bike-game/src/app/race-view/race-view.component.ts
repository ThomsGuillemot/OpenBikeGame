import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RaceConfiguration, RaceManager, RaceType } from 'src/bike-game-engine';
import * as THREE from 'three';

@Component({
  selector: 'app-race-view',
  templateUrl: './race-view.component.html',
  styleUrls: ['./race-view.component.scss'],
})
export class RaceViewComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas')
  private canvasRef!: ElementRef;
  private raceConfiguration: RaceConfiguration;
  private raceManager: RaceManager;

  private scene!: THREE.Scene;
  private camera!: THREE.Camera;
  private renderer!: THREE.WebGLRenderer;
  private cube!: THREE.Mesh;

  constructor() {
    this.raceConfiguration = {
      type: RaceType.Distance,
      duration: 0,
      distance: 500,
    };
    this.raceManager = new RaceManager(this.raceConfiguration);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.createScene();
    this.startRenderingLoop();
  }

  ngOnDestroy(): void {
    this.renderer.dispose();
  }

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private createScene(): void {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x555555);
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.getAspectRatio(),
      0.1,
      1000
    );
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x55ff55 });
    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);

    this.camera.position.z = 5;
  }

  private getAspectRatio(): number {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  private startRenderingLoop(): void {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: RaceViewComponent = this;
    let render = function() {
      requestAnimationFrame(render);
      component.cube.rotation.x += 0.01;
      component.cube.rotation.y += 0.01;
      // render the frame
      component.renderer.render(component.scene, component.camera);
    };
    render();
  }
}
