import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBrandPhotosComponent } from './public-brand-photos.component';

describe('PublicBrandPhotosComponent', () => {
  let component: PublicBrandPhotosComponent;
  let fixture: ComponentFixture<PublicBrandPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBrandPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicBrandPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
