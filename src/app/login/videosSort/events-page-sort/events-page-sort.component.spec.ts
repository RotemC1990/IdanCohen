import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPageSortComponent } from './events-page-sort.component';

describe('EventsPageSortComponent', () => {
  let component: EventsPageSortComponent;
  let fixture: ComponentFixture<EventsPageSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsPageSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPageSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
