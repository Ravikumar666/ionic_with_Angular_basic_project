import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from '../../places/offers/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() place!: Place;

  constructor(private modalCntrl: ModalController) {}

  ngOnInit() {}

  onCancel() {
    this.modalCntrl.dismiss(null, 'cancel');
  }

  onBook() {
    this.modalCntrl.dismiss(
      { data: `Wow your order have Booked, let's take your Bill` },
      'confirm'
    );
  }
}
