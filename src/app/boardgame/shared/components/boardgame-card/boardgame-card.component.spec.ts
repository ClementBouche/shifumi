import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameCardComponent } from './boardgame-card.component';

describe('BoardgameCardComponent', () => {
  let component: BoardgameCardComponent;
  let fixture: ComponentFixture<BoardgameCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
