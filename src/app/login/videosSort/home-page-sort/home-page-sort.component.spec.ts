import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSortComponent } from './home-page-sort.component';

describe('HomePageSortComponent', () => {
  let component: HomePageSortComponent;
  let fixture: ComponentFixture<HomePageSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
