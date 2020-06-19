import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';
import { untilDestroyed } from 'ngx-take-until-destroy';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.getCurrentUser();
  }

  ngOnDestroy() {}

  login() {
    this.authService.googleSignin();
  }

  private getCurrentUser() {
    this.authService.user$.pipe(untilDestroyed(this)).subscribe((user) => {
      if (user) {
        this.router.navigate(['/houses']);
      }
    });
  }
}
