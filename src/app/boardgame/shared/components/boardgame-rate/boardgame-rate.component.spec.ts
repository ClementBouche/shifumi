import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameRateComponent } from './boardgame-rate.component';

describe('BoardgameRateComponent', () => {
  let component: BoardgameRateComponent;
  let fixture: ComponentFixture<BoardgameRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgameRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
