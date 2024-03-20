import { Injectable } from '@angular/core';
import { Bookings } from './booking.model';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  private _booking: Bookings[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Nellore',
      guestNumbers: '2',
      userId: 'abc',
    },
  ];

  get bookings(): Bookings[] {
    return [...this._booking];
  }

  getBookings(id: string) {
    return {
      ...this._booking.find((currentBooking) => {
        return currentBooking.placeId === id;
      }),
    };
  }
}
