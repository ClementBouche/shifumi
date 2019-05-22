import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHomeComponent } from './player-home.component';

describe('PlayerHomeComponent', () => {
  let component: PlayerHomeComponent;
  let fixture: ComponentFixture<PlayerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
