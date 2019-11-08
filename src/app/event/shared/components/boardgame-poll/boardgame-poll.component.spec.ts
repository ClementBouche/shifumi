import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgamePollComponent } from './boardgame-poll.component';

describe('BoardgamePollComponent', () => {
  let component: BoardgamePollComponent;
  let fixture: ComponentFixture<BoardgamePollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgamePollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgamePollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
