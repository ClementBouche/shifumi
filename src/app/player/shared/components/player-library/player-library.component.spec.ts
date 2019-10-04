import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerLibraryComponent } from './player-library.component';

describe('PlayerLibraryComponent', () => {
  let component: PlayerLibraryComponent;
  let fixture: ComponentFixture<PlayerLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
