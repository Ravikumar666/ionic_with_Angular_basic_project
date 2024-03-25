import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Place } from '../../places/offers/place.model';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() place!: Place;
  @Input() SelectedMode: string = '';
  @ViewChild('form', { static: true }) form!: NgForm;

  startDate: string = '';
  endDate: string = '';

  constructor(private modalCntrl: ModalController) {}

  ngOnInit() {
    const availableFrom = new Date(this.place.availableFrom);
    const availableTo = new Date(this.place.availableTo);
    if (this.SelectedMode === 'random') {
      this.startDate = new Date(
        availableFrom.getTime() +
          Math.random() *
            (availableTo.getTime() -
              7 * 24 * 60 * 60 * 1000 -
              availableFrom.getTime())
      ).toISOString();

      this.endDate = new Date(
        new Date(this.startDate).getTime() +
          Math.random() *
            (new Date(this.startDate).getTime() +
              6 * 24 * 60 * 60 * 100 -
              new Date(this.startDate).getTime())
      ).toISOString();
    }
  }

  onCancel() {
    this.modalCntrl.dismiss(null, 'cancel');
  }

  onBook() {
    if (this.form.invalid || !this.datesValid) return;
    this.modalCntrl.dismiss(
      {
        bookingData: {
          firstName: this.form.value['firstName'],
          lastName: this.form.value['LastName'],
          guestsNumber: this.form.value['numberOfGuests'],
          dateFrom: this.form.value['dateFrom'],
          dateTo: this.form.value['dateTo'],
        },
      },
      'confirm'
    );
  }

  get datesValid(): boolean {
    const satrtDate = new Date(this.form.value['dateFrom']);
    const endDate = new Date(this.form.value['dateTo']);
    return endDate > satrtDate;
  }
}
