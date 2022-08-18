import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDiscountProductComponent } from './edit-discount-product.component';

describe('EditDiscountProductComponent', () => {
  let component: EditDiscountProductComponent;
  let fixture: ComponentFixture<EditDiscountProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDiscountProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDiscountProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
