import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayToolbarComponent } from './play-toolbar.component';

describe('PlayToolbarComponent', () => {
  let component: PlayToolbarComponent;
  let fixture: ComponentFixture<PlayToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
