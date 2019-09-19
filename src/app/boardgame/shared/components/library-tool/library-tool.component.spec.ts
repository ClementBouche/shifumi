import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryToolComponent } from './library-tool.component';

describe('LibraryToolComponent', () => {
  let component: LibraryToolComponent;
  let fixture: ComponentFixture<LibraryToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
