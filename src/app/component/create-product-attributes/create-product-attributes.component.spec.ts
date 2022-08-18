import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductAttributesComponent } from './create-product-attributes.component';

describe('CreateProductAttributesComponent', () => {
  let component: CreateProductAttributesComponent;
  let fixture: ComponentFixture<CreateProductAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProductAttributesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
