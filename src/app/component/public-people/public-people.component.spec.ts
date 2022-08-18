import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicPeopleComponent } from './public-people.component';

describe('PublicPeopleComponent', () => {
  let component: PublicPeopleComponent;
  let fixture: ComponentFixture<PublicPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicPeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
