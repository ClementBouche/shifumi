import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteSearchInputComponent } from './autocomplete-search-input.component';

describe('AutocompleteSearchInputComponent', () => {
  let component: AutocompleteSearchInputComponent;
  let fixture: ComponentFixture<AutocompleteSearchInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutocompleteSearchInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteSearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
