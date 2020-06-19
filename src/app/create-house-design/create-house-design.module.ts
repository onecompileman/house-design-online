import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateHouseDesignPageRoutingModule } from './create-house-design-routing.module';

import { CreateHouseDesignPage } from './create-house-design.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CreateHouseDesignPageRoutingModule,
  ],
  declarations: [CreateHouseDesignPage],
})
export class CreateHouseDesignPageModule {}
