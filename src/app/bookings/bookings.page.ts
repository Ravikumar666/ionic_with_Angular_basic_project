import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places/places.service';
import { Place } from '../places/offers/place.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  bookings: Place[] = [];
  constructor(private PlaceService: PlacesService) {}

  ngOnInit() {
    this.bookings = this.PlaceService.Place;
  }
}
