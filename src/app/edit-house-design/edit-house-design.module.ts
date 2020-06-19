import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditHouseDesignPageRoutingModule } from './edit-house-design-routing.module';

import { EditHouseDesignPage } from './edit-house-design.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    EditHouseDesignPageRoutingModule,
  ],
  declarations: [EditHouseDesignPage],
})
export class EditHouseDesignPageModule {}
