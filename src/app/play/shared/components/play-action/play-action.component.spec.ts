import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayActionComponent } from './play-action.component';

describe('PlayActionComponent', () => {
  let component: PlayActionComponent;
  let fixture: ComponentFixture<PlayActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
