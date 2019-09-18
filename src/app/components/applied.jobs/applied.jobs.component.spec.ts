import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Applied.JobsComponent } from './applied.jobs.component';

describe('Applied.JobsComponent', () => {
  let component: Applied.JobsComponent;
  let fixture: ComponentFixture<Applied.JobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Applied.JobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Applied.JobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
