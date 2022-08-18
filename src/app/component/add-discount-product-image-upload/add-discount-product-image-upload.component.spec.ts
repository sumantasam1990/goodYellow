import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDiscountProductImageUploadComponent } from './add-discount-product-image-upload.component';

describe('AddDiscountProductImageUploadComponent', () => {
  let component: AddDiscountProductImageUploadComponent;
  let fixture: ComponentFixture<AddDiscountProductImageUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDiscountProductImageUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDiscountProductImageUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
