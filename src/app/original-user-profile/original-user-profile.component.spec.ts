import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalUserProfileComponent } from './original-user-profile.component';

describe('OriginalUserProfileComponent', () => {
  let component: OriginalUserProfileComponent;
  let fixture: ComponentFixture<OriginalUserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OriginalUserProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OriginalUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
