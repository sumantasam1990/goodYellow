import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateleaderboardComponent } from './createleaderboard.component';

describe('CreateleaderboardComponent', () => {
  let component: CreateleaderboardComponent;
  let fixture: ComponentFixture<CreateleaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateleaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateleaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
