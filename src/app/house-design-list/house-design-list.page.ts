import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../shared/models/user.model';
import { HouseService } from '../core/services/house.service';
import { AuthService } from '../core/services/auth.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { House } from '../shared/models/house.model';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AvatarOptionComponent } from '../shared/components/avatar-option/avatar-option.component';

@Component({
  selector: 'app-house-design-list',
  templateUrl: './house-design-list.page.html',
  styleUrls: ['./house-design-list.page.scss'],
})
export class HouseDesignListPage implements OnInit, OnDestroy {
  user: User;
  houses: House[] = [];

  constructor(
    private houseService: HouseService,
    private authService: AuthService,
    private popoverController: PopoverController,
    private router: Router
  ) {}

  ngOnInit() {
    this.getCurrentUser();
    this.getAllHouses();
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

  viewHouse(id: string) {
    this.router.navigate(['/houses', id]);
  }

  private getAllHouses() {
    this.houseService.getAll().subscribe((res) => {
      this.houses = res;
    });
  }

  private getCurrentUser() {
    this.authService.user$.pipe(untilDestroyed(this)).subscribe((user) => {
      this.user = user;
    });
  }
}
