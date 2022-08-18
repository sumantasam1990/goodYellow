import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicFoundersComponent } from './public-founders.component';

describe('PublicFoundersComponent', () => {
  let component: PublicFoundersComponent;
  let fixture: ComponentFixture<PublicFoundersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicFoundersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicFoundersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
