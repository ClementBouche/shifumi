import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameHomeComponent } from './boardgame-home.component';

describe('BoardgameHomeComponent', () => {
  let component: BoardgameHomeComponent;
  let fixture: ComponentFixture<BoardgameHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgameHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
