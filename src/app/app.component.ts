import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private menuCntl: MenuController,
    private authService: AuthService
  ) {}

  onlink(mode: string) {
    if (mode === 'discover') {
      this.router.navigateByUrl('/places/tabs/discover');
      this.menuCntl.close();
    } else if (mode === 'bookings') {
      this.router.navigateByUrl('/bookings');
      this.menuCntl.close();
    } else if (mode === 'Logout') {
      this.authService.logout();
      this.router.navigateByUrl('/auth');
      this.menuCntl.close();
    }
  }
}
