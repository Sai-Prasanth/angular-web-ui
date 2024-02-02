import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonproductdisplayComponent } from './commonproductdisplay.component';

describe('CommonproductdisplayComponent', () => {
  let component: CommonproductdisplayComponent;
  let fixture: ComponentFixture<CommonproductdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonproductdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommonproductdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
