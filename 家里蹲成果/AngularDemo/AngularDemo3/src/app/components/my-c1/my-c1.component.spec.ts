import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyC1Component } from './my-c1.component';

describe('MyC1Component', () => {
  let component: MyC1Component;
  let fixture: ComponentFixture<MyC1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyC1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
