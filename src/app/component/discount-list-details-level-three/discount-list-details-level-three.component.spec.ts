import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountListDetailsLevelThreeComponent } from './discount-list-details-level-three.component';

describe('DiscountListDetailsLevelThreeComponent', () => {
  let component: DiscountListDetailsLevelThreeComponent;
  let fixture: ComponentFixture<DiscountListDetailsLevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountListDetailsLevelThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountListDetailsLevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
