import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFifthComponent } from './signup-fifth.component';

describe('SignupFifthComponent', () => {
  let component: SignupFifthComponent;
  let fixture: ComponentFixture<SignupFifthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFifthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFifthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
