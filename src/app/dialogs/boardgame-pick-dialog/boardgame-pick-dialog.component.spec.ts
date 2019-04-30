import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgamePickDialogComponent } from './boardgame-pick-dialog.component';

describe('BoardgamePickDialogComponent', () => {
  let component: BoardgamePickDialogComponent;
  let fixture: ComponentFixture<BoardgamePickDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgamePickDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgamePickDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
