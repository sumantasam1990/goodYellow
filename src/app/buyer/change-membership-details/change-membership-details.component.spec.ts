import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeMembershipDetailsComponent } from './change-membership-details.component';

describe('ChangeMembershipDetailsComponent', () => {
  let component: ChangeMembershipDetailsComponent;
  let fixture: ComponentFixture<ChangeMembershipDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeMembershipDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeMembershipDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
