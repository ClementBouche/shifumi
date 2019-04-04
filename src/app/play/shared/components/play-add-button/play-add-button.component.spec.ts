import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAddButtonComponent } from './play-add-button.component';

describe('PlayAddButtonComponent', () => {
  let component: PlayAddButtonComponent;
  let fixture: ComponentFixture<PlayAddButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayAddButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAddButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
