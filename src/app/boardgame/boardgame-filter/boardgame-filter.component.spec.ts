import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameFilterComponent } from './boardgame-filter.component';

describe('BoardgameFilterComponent', () => {
  let component: BoardgameFilterComponent;
  let fixture: ComponentFixture<BoardgameFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgameFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
