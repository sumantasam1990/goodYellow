import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSecondComponent } from './signup-second.component';

describe('SignupSecondComponent', () => {
  let component: SignupSecondComponent;
  let fixture: ComponentFixture<SignupSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
