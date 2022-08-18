import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicStoryComponent } from './public-story.component';

describe('PublicStoryComponent', () => {
  let component: PublicStoryComponent;
  let fixture: ComponentFixture<PublicStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
