import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommondisplayComponent } from './commondisplay.component';

describe('CommondisplayComponent', () => {
  let component: CommondisplayComponent;
  let fixture: ComponentFixture<CommondisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommondisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommondisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
