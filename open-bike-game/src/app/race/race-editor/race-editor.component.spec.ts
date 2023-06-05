import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceEditorComponent } from './race-editor.component';

/**
 * What to test :
 * - Input : A Config -> Do a config -> Validate : Config updated
 * - Input : A Config -> Do a config -> Cancel : Old Config not modified
 */
describe('RaceEditorComponent', () => {
  let component: RaceEditorComponent;
  let fixture: ComponentFixture<RaceEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RaceEditorComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RaceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
