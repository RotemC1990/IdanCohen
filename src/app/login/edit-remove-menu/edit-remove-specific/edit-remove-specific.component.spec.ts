import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRemoveSpecificComponent } from './edit-remove-specific.component';

describe('EditRemoveSpecificComponent', () => {
  let component: EditRemoveSpecificComponent;
  let fixture: ComponentFixture<EditRemoveSpecificComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRemoveSpecificComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRemoveSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
