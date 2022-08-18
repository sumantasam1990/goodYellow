import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductVariationsComponent } from './create-product-variations.component';

describe('CreateProductVariationsComponent', () => {
  let component: CreateProductVariationsComponent;
  let fixture: ComponentFixture<CreateProductVariationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductVariationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductVariationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
