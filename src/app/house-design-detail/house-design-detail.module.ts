import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDesignDetailPageRoutingModule } from './house-design-detail-routing.module';

import { HouseDesignDetailPage } from './house-design-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDesignDetailPageRoutingModule
  ],
  declarations: [HouseDesignDetailPage]
})
export class HouseDesignDetailPageModule {}
