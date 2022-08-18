import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscountProductComponent } from './add-discount-product.component';

describe('AddDiscountProductComponent', () => {
  let component: AddDiscountProductComponent;
  let fixture: ComponentFixture<AddDiscountProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiscountProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiscountProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
