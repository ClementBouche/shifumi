import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextChipComponent } from './text-chip.component';

describe('TextChipComponent', () => {
  let component: TextChipComponent;
  let fixture: ComponentFixture<TextChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
