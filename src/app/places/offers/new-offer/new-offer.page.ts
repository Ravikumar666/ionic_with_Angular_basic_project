import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IonDatetime } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private placeService: PlacesService,
    private router: Router
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      title: ['', [Validators.required]],
      discription: ['', [Validators.required, Validators.maxLength(180)]],
      price: ['', [Validators.required]],
      dateFrom: ['', [Validators.required]],
      dateTo: ['', [Validators.required]],
    });
  }
  onCreateOffer() {
    if (this.form.invalid) return;
    const { title, dateTo, dateFrom, discription, price } = this.allRawValues;
    this.placeService.addPlace(title, discription, price, dateFrom, dateTo);
    this.form.reset();
    this.router.navigateByUrl('/places/tabs/offers');
    console.log(this.placeService.Place);
  }

  get allRawValues(): { [key: string]: any } {
    return this.form.getRawValue();
  }
}
