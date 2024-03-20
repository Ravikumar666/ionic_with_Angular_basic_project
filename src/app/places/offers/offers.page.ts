import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from './place.model';
import { IonItemSliding, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadOffers: Place[] = [];
  constructor(
    private placeService: PlacesService,
    private menuContrl: MenuController,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadOffers = this.placeService.Place;
  }

  openMenu() {
    this.menuContrl.toggle();
  }

  onEdit(OfferId: string, ionItemSliding: IonItemSliding) {
    ionItemSliding.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', OfferId]);
  }
}
