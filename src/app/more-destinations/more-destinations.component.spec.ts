import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreDestinationsComponent } from './more-destinations.component';

describe('MoreDestinationsComponent', () => {
  let component: MoreDestinationsComponent;
  let fixture: ComponentFixture<MoreDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreDestinationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
