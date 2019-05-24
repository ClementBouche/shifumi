import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameListComponent } from './boardgame-list.component';

describe('BoardgameListComponent', () => {
  let component: BoardgameListComponent;
  let fixture: ComponentFixture<BoardgameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
