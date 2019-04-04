import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayPaginatedComponent } from './play-paginated.component';

describe('PlayPaginatedComponent', () => {
  let component: PlayPaginatedComponent;
  let fixture: ComponentFixture<PlayPaginatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayPaginatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayPaginatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
