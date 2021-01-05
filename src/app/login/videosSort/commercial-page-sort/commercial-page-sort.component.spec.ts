import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialPageSortComponent } from './commercial-page-sort.component';

describe('CommercialPageSortComponent', () => {
  let component: CommercialPageSortComponent;
  let fixture: ComponentFixture<CommercialPageSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommercialPageSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialPageSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
