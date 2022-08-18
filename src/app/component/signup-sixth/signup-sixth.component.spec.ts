import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSixthComponent } from './signup-sixth.component';

describe('SignupSixthComponent', () => {
  let component: SignupSixthComponent;
  let fixture: ComponentFixture<SignupSixthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupSixthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSixthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
