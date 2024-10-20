import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredEmailsComponent } from './registered-emails.component';

describe('RegisteredEmailsComponent', () => {
  let component: RegisteredEmailsComponent;
  let fixture: ComponentFixture<RegisteredEmailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredEmailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredEmailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
