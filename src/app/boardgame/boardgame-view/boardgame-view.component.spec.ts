import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameViewComponent } from './boardgame-view.component';

describe('BoardgameViewComponent', () => {
  let component: BoardgameViewComponent;
  let fixture: ComponentFixture<BoardgameViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgameViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
