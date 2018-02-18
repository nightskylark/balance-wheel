import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckpointEditorComponent } from './checkpoint-editor.component';

describe('CheckpointEditorComponent', () => {
  let component: CheckpointEditorComponent;
  let fixture: ComponentFixture<CheckpointEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckpointEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckpointEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
