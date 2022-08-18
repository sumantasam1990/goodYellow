import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDiscountComponent } from './preview-discount.component';

describe('PreviewDiscountComponent', () => {
  let component: PreviewDiscountComponent;
  let fixture: ComponentFixture<PreviewDiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewDiscountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
