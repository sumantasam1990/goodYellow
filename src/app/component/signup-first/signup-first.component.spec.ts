import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupFirstComponent } from './signup-first.component';

describe('SignupFirstComponent', () => {
  let component: SignupFirstComponent;
  let fixture: ComponentFixture<SignupFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupFirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
