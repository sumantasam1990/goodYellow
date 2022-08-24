import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsPastComponent } from './subscriptions-past.component';

describe('SubscriptionsPastComponent', () => {
  let component: SubscriptionsPastComponent;
  let fixture: ComponentFixture<SubscriptionsPastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionsPastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsPastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
