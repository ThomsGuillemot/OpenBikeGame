import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceEditorComponent } from './race-editor.component';

describe('RaceEditorComponent', () => {
  let component: RaceEditorComponent;
  let fixture: ComponentFixture<RaceEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RaceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
