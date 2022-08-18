import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFaqsComponent } from './public-faqs.component';

describe('PublicFaqsComponent', () => {
  let component: PublicFaqsComponent;
  let fixture: ComponentFixture<PublicFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicFaqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
