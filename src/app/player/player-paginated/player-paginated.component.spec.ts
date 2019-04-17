import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPaginatedComponent } from './player-paginated.component';

describe('PlayerPaginatedComponent', () => {
  let component: PlayerPaginatedComponent;
  let fixture: ComponentFixture<PlayerPaginatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPaginatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPaginatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
