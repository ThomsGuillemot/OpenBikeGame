import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { ThreeRenderingComponent } from 'src/app/interfaces/three-rendering-component';
import { RaceService } from 'src/app/services';
import { WebGLRenderer } from 'three';

/**
 * Component that holds the race view. Allowing the player to view the race
 */
@Component({
  selector: 'app-race-view',
  templateUrl: './race-view.component.html',
  styleUrls: ['./race-view.component.scss'],
})
export class RaceViewComponent
  implements AfterViewInit, OnDestroy, ThreeRenderingComponent
{
  @ViewChild('canvas')
  private _canvas!: ElementRef;
  private _renderer!: WebGLRenderer;

  constructor(private raceService: RaceService) {}

  ngAfterViewInit(): void {
    this.raceService.StartRace(this);
    this.startRenderingLoop();
  }

  ngOnDestroy(): void {
    this.renderer.dispose();
  }

  private get canvas(): HTMLCanvasElement {
    return this._canvas.nativeElement;
  }

  get aspectRatio(): number {
    return this.canvas.clientWidth / this.canvas.clientHeight;
  }

  get renderer(): THREE.WebGLRenderer {
    return this._renderer ?? new WebGLRenderer({ canvas: this.canvas });
  }

  private startRenderingLoop(): void {
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: RaceViewComponent = this;
    let render = function () {
      requestAnimationFrame(render);
      component.raceService.updateScene();

      // render the frame
      component.renderer.render(
        component.raceService.currentScene,
        component.raceService.currentCamera
      );
    };
    render();
  }
}
