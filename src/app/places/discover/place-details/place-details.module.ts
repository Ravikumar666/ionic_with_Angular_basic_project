import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlaceDetailsPage } from './place-details.page';
import { RouterModule } from '@angular/router';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([{ path: '', component: PlaceDetailsPage }]),
  ],
  declarations: [PlaceDetailsPage, CreateBookingComponent],
})
export class PlaceDetailsPageModule {}
