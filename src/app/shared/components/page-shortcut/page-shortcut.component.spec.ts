import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageShortcutComponent } from './page-shortcut.component';

describe('PageShortcutComponent', () => {
  let component: PageShortcutComponent;
  let fixture: ComponentFixture<PageShortcutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageShortcutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
