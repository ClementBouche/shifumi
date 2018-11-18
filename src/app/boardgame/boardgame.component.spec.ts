import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameComponent } from './boardgame.component';

describe('BoardgameComponent', () => {
  let component: BoardgameComponent;
  let fixture: ComponentFixture<BoardgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
