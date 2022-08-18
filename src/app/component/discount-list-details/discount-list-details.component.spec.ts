import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountListDetailsComponent } from './discount-list-details.component';

describe('DiscountListDetailsComponent', () => {
  let component: DiscountListDetailsComponent;
  let fixture: ComponentFixture<DiscountListDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountListDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountListDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
