import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardBrandsComponent } from './leaderboard-brands.component';

describe('LeaderboardBrandsComponent', () => {
  let component: LeaderboardBrandsComponent;
  let fixture: ComponentFixture<LeaderboardBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaderboardBrandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
