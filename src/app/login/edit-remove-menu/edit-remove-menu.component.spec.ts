import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRemoveMenuComponent } from './edit-remove-menu.component';

describe('EditRemoveMenuComponent', () => {
  let component: EditRemoveMenuComponent;
  let fixture: ComponentFixture<EditRemoveMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRemoveMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRemoveMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
