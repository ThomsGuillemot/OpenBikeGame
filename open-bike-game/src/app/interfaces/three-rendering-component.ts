import { WebGLRenderer } from 'three';

export interface ThreeRenderingComponent {
  get renderer(): WebGLRenderer;
  get aspectRatio(): number;
}
