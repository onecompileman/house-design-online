import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyHouseDesignListPage } from './my-house-design-list.page';

const routes: Routes = [
  {
    path: '',
    component: MyHouseDesignListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyHouseDesignListPageRoutingModule {}
