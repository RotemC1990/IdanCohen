import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoTemplateComponent } from './video-template.component';

describe('VideoTemplateComponent', () => {
  let component: VideoTemplateComponent;
  let fixture: ComponentFixture<VideoTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
