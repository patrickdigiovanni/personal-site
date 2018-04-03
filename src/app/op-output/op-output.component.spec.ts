import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpOutputComponent } from './op-output.component';

describe('OpOutputComponent', () => {
  let component: OpOutputComponent;
  let fixture: ComponentFixture<OpOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
