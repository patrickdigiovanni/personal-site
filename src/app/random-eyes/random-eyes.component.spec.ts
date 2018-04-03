import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomEyesComponent } from './random-eyes.component';

describe('RandomEyesComponent', () => {
  let component: RandomEyesComponent;
  let fixture: ComponentFixture<RandomEyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomEyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomEyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
