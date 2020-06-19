import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyHouseDesignListPageRoutingModule } from './my-house-design-list-routing.module';

import { MyHouseDesignListPage } from './my-house-design-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyHouseDesignListPageRoutingModule
  ],
  declarations: [MyHouseDesignListPage]
})
export class MyHouseDesignListPageModule {}
