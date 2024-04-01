import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../offers/place.model';
import { SegmentChangeEventDetail } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadingPlaces: Place[] = [];
  sub$!: Subscription;

  constructor(public placeService: PlacesService) {}

  ngOnInit() {
    this.sub$ = this.placeService.Place.subscribe((places) => {
      this.loadingPlaces = places;
    });
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log('event', event.detail);
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
