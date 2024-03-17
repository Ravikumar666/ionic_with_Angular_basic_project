import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../place.model';
import { NavController } from '@ionic/angular';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offers-bookings',
  templateUrl: './offers-bookings.page.html',
  styleUrls: ['./offers-bookings.page.scss'],
})
export class OffersBookingsPage implements OnInit {
  place: any;
  constructor(
    private activeRoute: ActivatedRoute,
    private navCntrl: NavController,
    private placeService: PlacesService
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCntrl.navigateBack('/places/tabs/offers');
        return;
      }
      let placeId = paramMap.get('placeId');
      this.place = this.placeService.getPlace(placeId);
    });
  }
}
