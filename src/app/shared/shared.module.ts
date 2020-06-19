import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AddHouseItemComponent } from './modals/add-house-item/add-house-item.component';
import { IonicModule } from '@ionic/angular';
import { AvatarOptionComponent } from './components/avatar-option/avatar-option.component';

@NgModule({
  declarations: [AddHouseItemComponent, AvatarOptionComponent],
  imports: [BrowserModule, CommonModule, IonicModule],
  exports: [AddHouseItemComponent],
  entryComponents: [AddHouseItemComponent, AvatarOptionComponent],
})
export class SharedModule {}
