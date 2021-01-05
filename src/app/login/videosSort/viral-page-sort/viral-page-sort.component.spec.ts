import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViralPageSortComponent } from './viral-page-sort.component';

describe('ViralPageSortComponent', () => {
  let component: ViralPageSortComponent;
  let fixture: ComponentFixture<ViralPageSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViralPageSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViralPageSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
