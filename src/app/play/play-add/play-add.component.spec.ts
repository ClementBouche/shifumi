import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayAddComponent } from './play-add.component';

describe('PlayAddComponent', () => {
  let component: PlayAddComponent;
  let fixture: ComponentFixture<PlayAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
