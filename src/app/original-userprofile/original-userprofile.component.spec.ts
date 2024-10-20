import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OriginalUserprofileComponent } from './original-userprofile.component';

describe('OriginalUserprofileComponent', () => {
  let component: OriginalUserprofileComponent;
  let fixture: ComponentFixture<OriginalUserprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OriginalUserprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OriginalUserprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
