import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputScrollTopComponent } from './input-scroll-top.component';

describe('InputScrollTopComponent', () => {
  let component: InputScrollTopComponent;
  let fixture: ComponentFixture<InputScrollTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputScrollTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputScrollTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
