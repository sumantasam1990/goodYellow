import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverBrandsComponent } from './discover-brands.component';

describe('DiscoverBrandsComponent', () => {
  let component: DiscoverBrandsComponent;
  let fixture: ComponentFixture<DiscoverBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
