import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HouseDesignListPageRoutingModule } from './house-design-list-routing.module';

import { HouseDesignListPage } from './house-design-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HouseDesignListPageRoutingModule
  ],
  declarations: [HouseDesignListPage]
})
export class HouseDesignListPageModule {}
