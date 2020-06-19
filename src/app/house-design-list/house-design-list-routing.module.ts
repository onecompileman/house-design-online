import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HouseDesignListPage } from './house-design-list.page';

const routes: Routes = [
  {
    path: '',
    component: HouseDesignListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HouseDesignListPageRoutingModule {}
