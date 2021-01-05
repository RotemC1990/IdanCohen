import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortNavigationBarComponent } from './sort-navigation-bar.component';

describe('SortNavigationBarComponent', () => {
  let component: SortNavigationBarComponent;
  let fixture: ComponentFixture<SortNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
