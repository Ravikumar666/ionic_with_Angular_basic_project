import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.page.html',
  styleUrls: ['./place-details.page.scss'],
})
export class PlaceDetailsPage implements OnInit {
  constructor(private navContrl: NavController, private router: Router) {}

  ngOnInit() {}

  goBack() {
    this.navContrl.navigateBack('/places/tabs/discover');
    // this.router.navigate(['/', 'places', 'tabs', 'discover']);
    // this.router.navigateByUrl('/places/tabs/discover');

    // pop will get only previous routing
    this.navContrl.pop();
  }
}
