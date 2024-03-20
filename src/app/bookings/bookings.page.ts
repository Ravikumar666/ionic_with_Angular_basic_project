import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places/places.service';
import { Place } from '../places/offers/place.model';
import { BookingService } from './booking.service';
import { Bookings } from './booking.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  // bookings: Place[] = [];
  loadBookings: Bookings[] = [];
  constructor(
    private PlaceService: PlacesService,
    public bookingService: BookingService
  ) {}

  ngOnInit() {
    // this.bookings = this.PlaceService.Place;
    this.loadBookings = this.bookingService.bookings;
  }

  onDeleteBookings(bookingId: string, ionItemSliding: IonItemSliding) {
    ionItemSliding.close();
  }
}
