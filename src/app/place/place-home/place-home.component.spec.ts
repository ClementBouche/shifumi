import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceHomeComponent } from './place-home.component';

describe('PlaceHomeComponent', () => {
  let component: PlaceHomeComponent;
  let fixture: ComponentFixture<PlaceHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
