import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPickDialogComponent } from './player-pick-dialog.component';

describe('PlayerPickDialogComponent', () => {
  let component: PlayerPickDialogComponent;
  let fixture: ComponentFixture<PlayerPickDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPickDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPickDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
