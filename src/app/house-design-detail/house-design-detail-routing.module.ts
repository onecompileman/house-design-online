import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDesignDetailPage } from './house-design-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDesignDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDesignDetailPageRoutingModule {}
