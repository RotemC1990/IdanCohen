import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoPageSortComponent } from './promo-page-sort.component';

describe('PromoPageSortComponent', () => {
  let component: PromoPageSortComponent;
  let fixture: ComponentFixture<PromoPageSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoPageSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromoPageSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
