import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameSearchComponent } from './boardgame-search.component';

describe('BoardgameSearchComponent', () => {
  let component: BoardgameSearchComponent;
  let fixture: ComponentFixture<BoardgameSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgameSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
