import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFourthComponent } from './signup-fourth.component';

describe('SignupFourthComponent', () => {
  let component: SignupFourthComponent;
  let fixture: ComponentFixture<SignupFourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFourthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
