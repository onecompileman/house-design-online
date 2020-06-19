import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditHouseDesignPage } from './edit-house-design.page';

const routes: Routes = [
  {
    path: '',
    component: EditHouseDesignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditHouseDesignPageRoutingModule {}
