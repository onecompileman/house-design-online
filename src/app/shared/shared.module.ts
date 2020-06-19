import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AddHouseItemComponent } from './modals/add-house-item/add-house-item.component';

@NgModule({
  declarations: [AddHouseItemComponent],
  imports: [BrowserModule, CommonModule],
  entryComponents: [AddHouseItemComponent],
})
export class SharedModule {}
