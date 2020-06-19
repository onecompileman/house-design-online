import { Component, OnInit, OnDestroy } from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { AvatarOptionComponent } from '../shared/components/avatar-option/avatar-option.component';
import { Router } from '@angular/router';
import { HouseService } from '../core/services/house.service';
import {
  AlertController,
  ToastController,
  PopoverController,
} from '@ionic/angular';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-my-house-design-list',
  templateUrl: './my-house-design-list.page.html',
  styleUrls: ['./my-house-design-list.page.scss'],
})
export class MyHouseDesignListPage implements OnInit, OnDestroy {
  houses: any[];

  user: any;

  constructor(
    private router: Router,
    private houseService: HouseService,
    private alertController: AlertController,
    private toastController: ToastController,
    private authService: AuthService,
    public popoverController: PopoverController
  ) {}

  ngOnInit() {
    // this.getAllSkecthes();
    this.getCurrentUser();
  }

  ngOnDestroy() {}

  async avatarClick(ev: any) {
    const popover = await this.popoverController.create({
      component: AvatarOptionComponent,
      event: ev,
      translucent: true,
    });
    return await popover.present();
  }

  backToSketchList() {
    this.router.navigate(['/houses']);
  }

  createHouse() {
    this.router.navigate(['/create-house-design']);
  }

  editHouse(id: string) {
    console.log(id);
    this.router.navigate(['/edit-house', id]);
  }

  viewHouse(id: string) {
    this.router.navigate(['/houses', id]);
  }

  async deleteHouse(house: any) {
    const alerts = this.alertController.create({
      header: 'Are you sure?',
      message: `You are trying to delete sketch: ${house.name}`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Confirm',
          cssClass: 'danger',
          handler: () => {
            this.houseService.delete(house.id).then(async () => {
              const toast = await this.toastController.create({
                message: 'Your sketch has been deleted successfully',
                duration: 2000,
              });

              toast.present();
            });
          },
        },
      ],
    });

    (await alerts).present();
  }

  private getAllHouses() {
    this.houseService
      .getAllSketchesByOwnerId(this.user.uid)
      .subscribe((res) => {
        this.houses = res;
      });
  }

  private getCurrentUser() {
    this.authService.user$.pipe(untilDestroyed(this)).subscribe((user) => {
      this.user = user;

      this.getAllHouses();
    });
  }
}
