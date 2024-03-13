import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffersBookingsPage } from './offers-bookings.page';

describe('OffersBookingsPage', () => {
  let component: OffersBookingsPage;
  let fixture: ComponentFixture<OffersBookingsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OffersBookingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
