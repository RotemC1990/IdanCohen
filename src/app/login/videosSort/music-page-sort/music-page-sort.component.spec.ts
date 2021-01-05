import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicPageSortComponent } from './music-page-sort.component';

describe('MusicPageSortComponent', () => {
  let component: MusicPageSortComponent;
  let fixture: ComponentFixture<MusicPageSortComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicPageSortComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicPageSortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
