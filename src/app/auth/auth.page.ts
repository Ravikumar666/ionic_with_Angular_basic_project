import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading: boolean = false;
  login: boolean = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCntrl: LoadingController
  ) {}

  ngOnInit() {}

  onLogin() {
    //use loading spinner
    if (this.login) {
      this.isLoading = true;
      this.authService.login();
      //user using LoadingController
      this.loadingCntrl
        .create({ keyboardClose: true, message: 'Logging in...' })
        .then((loadingEl) => {
          loadingEl.present();
          setTimeout(() => {
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigateByUrl('/places/tabs/discover');
          }, 1500);
        });
    } else {
      alert('Please signup the App first');
    }
  }

  onSummit(formData: NgForm) {
    if (formData.invalid) return;
    const email = formData.value.email;
    const password = formData.value.password;

    if (this.login) {
      //
    } else {
      //
    }
    console.log(formData);
  }

  onSwitchToLogin() {
    this.login = !this.login;
  }
}
