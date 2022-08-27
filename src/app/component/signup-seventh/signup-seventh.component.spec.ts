import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSeventhComponent } from './signup-seventh.component';

describe('SignupSeventhComponent', () => {
  let component: SignupSeventhComponent;
  let fixture: ComponentFixture<SignupSeventhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupSeventhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupSeventhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
