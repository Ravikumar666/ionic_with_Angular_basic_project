import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form!: FormGroup;
  constructor(private fb: FormBuilder) {}

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
    console.log(title, dateTo, dateFrom, discription, price);
  }

  get allRawValues(): { [key: string]: any } {
    return this.form.getRawValue();
  }
}
