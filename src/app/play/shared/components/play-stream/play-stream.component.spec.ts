import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayStreamComponent } from './play-stream.component';

describe('PlayStreamComponent', () => {
  let component: PlayStreamComponent;
  let fixture: ComponentFixture<PlayStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
