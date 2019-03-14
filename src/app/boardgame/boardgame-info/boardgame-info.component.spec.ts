import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgameInfoComponent } from './boardgame-info.component';

describe('BoardgameInfoComponent', () => {
  let component: BoardgameInfoComponent;
  let fixture: ComponentFixture<BoardgameInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgameInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgameInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
