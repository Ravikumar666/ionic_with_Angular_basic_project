import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlaceDetailsPage } from './place-details.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [PlaceDetailsPage],
})
export class PlaceDetailsPageModule {}
