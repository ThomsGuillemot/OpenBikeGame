import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiderEditorComponent } from './rider-editor.component';

describe('RiderEditorComponent', () => {
  let component: RiderEditorComponent;
  let fixture: ComponentFixture<RiderEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiderEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiderEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
