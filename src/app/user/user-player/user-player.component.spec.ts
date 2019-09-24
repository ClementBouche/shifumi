import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPlayerComponent } from './user-player.component';

describe('UserPlayerComponent', () => {
  let component: UserPlayerComponent;
  let fixture: ComponentFixture<UserPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
