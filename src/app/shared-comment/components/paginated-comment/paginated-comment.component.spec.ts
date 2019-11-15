import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedCommentComponent } from './paginated-comment.component';

describe('PaginatedCommentComponent', () => {
  let component: PaginatedCommentComponent;
  let fixture: ComponentFixture<PaginatedCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatedCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatedCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
