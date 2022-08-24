import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionsCreditsComponent } from './subscriptions-credits.component';

describe('SubscriptionsCreditsComponent', () => {
  let component: SubscriptionsCreditsComponent;
  let fixture: ComponentFixture<SubscriptionsCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionsCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionsCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
