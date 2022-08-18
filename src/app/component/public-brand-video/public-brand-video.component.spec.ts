import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicBrandVideoComponent } from './public-brand-video.component';

describe('PublicBrandVideoComponent', () => {
  let component: PublicBrandVideoComponent;
  let fixture: ComponentFixture<PublicBrandVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicBrandVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicBrandVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
