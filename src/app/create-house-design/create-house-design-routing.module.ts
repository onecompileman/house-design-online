import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateHouseDesignPage } from './create-house-design.page';

const routes: Routes = [
  {
    path: '',
    component: CreateHouseDesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateHouseDesignPageRoutingModule {}
