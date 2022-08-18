import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewStorefrontComponent } from './preview-storefront.component';

describe('PreviewStorefrontComponent', () => {
  let component: PreviewStorefrontComponent;
  let fixture: ComponentFixture<PreviewStorefrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewStorefrontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewStorefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
