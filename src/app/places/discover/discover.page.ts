import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../offers/place.model';
import { SegmentChangeEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadingPlaces: Place[] = [];

  constructor(public placeService: PlacesService) {}

  ngOnInit() {
    this.loadingPlaces = this.placeService.Place;
    console.log(this.loadingPlaces);
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log('event', event.detail);
  }
}
