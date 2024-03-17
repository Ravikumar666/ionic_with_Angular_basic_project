import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../offers/place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
  place!: Place;
  constructor(
    private navContrl: NavController,
    private activeRoute: ActivatedRoute,
    private modelCntrl: ModalController,
    private placeService: PlacesService
  ) {}

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navContrl.navigateBack('/places/tabs/discover');
        return;
      }
      const placeId = paramMap.get('placeId');
      this.place = this.placeService.getPlace(placeId);
    });
  }

  goBack() {
    this.navContrl.navigateBack('/places/tabs/discover');
    // this.router.navigate(['/', 'places', 'tabs', 'discover']);
    // this.router.navigateByUrl('/places/tabs/discover');

    // pop will get only previous routing
    this.navContrl.pop();
  }

  onBook() {
    this.modelCntrl
      .create({
        component: CreateBookingComponent,
        componentProps: { place: this.place },
      })
      .then((modelEl) => {
        modelEl.present();
        return modelEl.onDidDismiss();
      })
      .then((resultData) => {
        if (resultData.role === 'confirm') {
          console.log(resultData.data);
        }
      });
  }
}
