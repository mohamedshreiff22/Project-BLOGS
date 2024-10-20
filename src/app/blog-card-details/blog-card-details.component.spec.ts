import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardDetailsComponent } from './blog-card-details.component';

describe('BlogCardDetailsComponent', () => {
  let component: BlogCardDetailsComponent;
  let fixture: ComponentFixture<BlogCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogCardDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
