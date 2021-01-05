import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageSortComponent } from './product-page-sort.component';

describe('ProductPageSortComponent', () => {
  let component: ProductPageSortComponent;
  let fixture: ComponentFixture<ProductPageSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPageSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPageSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
