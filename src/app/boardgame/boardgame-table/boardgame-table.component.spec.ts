import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameTableComponent } from './boardgame-table.component';

describe('BoardgameTableComponent', () => {
  let component: BoardgameTableComponent;
  let fixture: ComponentFixture<BoardgameTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgameTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
