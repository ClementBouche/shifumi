import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardgamePaginatedComponent } from './boardgame-paginated.component';

describe('BoardgamePaginatedComponent', () => {
  let component: BoardgamePaginatedComponent;
  let fixture: ComponentFixture<BoardgamePaginatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardgamePaginatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardgamePaginatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
