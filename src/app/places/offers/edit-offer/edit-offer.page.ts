import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { NavController } from '@ionic/angular';
import { Place } from '../place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  form!: FormGroup;
  place!: Place;
  constructor(
    private fb: FormBuilder,
    private activedRoute: ActivatedRoute,
    private navCntrl: NavController,
    private placeService: PlacesService
  ) {}

  ngOnInit() {
    this.activedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCntrl.navigateBack('/places/tabs/offers');
        return;
      }
      const placeId = paramMap.get('placeId');
      this.place = this.placeService.getPlace(placeId);
      this.form = this.fb.group({
        title: [this.place.title, [Validators.required]],
        discription: [
          this.place.discription,
          [Validators.required, Validators.maxLength(180)],
        ],
      });
    });
  }

  onEditSubmit() {
    if (this.form.invalid) return;
    this.place = this.form.getRawValue();
    this.navCntrl.navigateBack('/places/tabs/offers');
  }
}
