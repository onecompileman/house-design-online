import { Component, OnInit } from '@angular/core';
import { AlertController, PopoverController } from '@ionic/angular';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar-option',
  templateUrl: './avatar-option.component.html',
  styleUrls: ['./avatar-option.component.scss'],
})
export class AvatarOptionComponent implements OnInit {
  constructor(
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router,
    private popoverController: PopoverController
  ) {}

  ngOnInit() {}

  async logout() {
    const alerts = this.alertController.create({
      header: 'Are you sure?',
      message: `You are trying to logout`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Logout',
          cssClass: 'danger',
          handler: () => {
            this.authService.signOut();
          },
        },
      ],
    });

    (await alerts).present();

    this.popoverController.dismiss();
  }

  goToMySketches() {
    this.router.navigate(['/my-houses']);
    this.popoverController.dismiss();
  }
}
