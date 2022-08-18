import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountListDetailsLevelTwoComponent } from './discount-list-details-level-two.component';

describe('DiscountListDetailsLevelTwoComponent', () => {
  let component: DiscountListDetailsLevelTwoComponent;
  let fixture: ComponentFixture<DiscountListDetailsLevelTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountListDetailsLevelTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountListDetailsLevelTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
