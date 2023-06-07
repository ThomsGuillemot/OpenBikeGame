import { Component, ElementRef, ViewChild } from '@angular/core';

import { RaceService } from '../race.service';
import { WebGLRenderer } from 'three';

@Component({
  selector: 'app-race-view',
  templateUrl: './race-view.component.html',
  styleUrls: ['./race-view.component.scss'],
})
export class RaceViewComponent {
  @ViewChild('canvas')
  private _canvas: ElementRef | undefined;
  private _renderer!: WebGLRenderer;

  constructor(private raceService: RaceService) {}

  ngAfterViewInit(): void {
    this.raceService.initRace(this._canvas?.nativeElement as HTMLElement);
    this.raceService.startRace();
  }

  ngOnDestroy(): void {
    this.raceService.stopRace();
    this.raceService.stopRender();
  }
}
