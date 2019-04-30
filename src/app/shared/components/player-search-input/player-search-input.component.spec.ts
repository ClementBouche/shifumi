import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSearchInputComponent } from './player-search-input.component';

describe('PlayerSearchInputComponent', () => {
  let component: PlayerSearchInputComponent;
  let fixture: ComponentFixture<PlayerSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
