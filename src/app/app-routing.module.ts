import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'houses',
    loadChildren: () =>
      import('./house-design-list/house-design-list.module').then(
        (m) => m.HouseDesignListPageModule
      ),
  },
  {
    path: 'houses/:id',
    loadChildren: () =>
      import('./house-design-detail/house-design-detail.module').then(
        (m) => m.HouseDesignDetailPageModule
      ),
  },
  {
    path: 'my-houses',
    loadChildren: () =>
      import('./my-house-design-list/my-house-design-list.module').then(
        (m) => m.MyHouseDesignListPageModule
      ),
  },
  {
    path: 'create-house-design',
    loadChildren: () =>
      import('./create-house-design/create-house-design.module').then(
        (m) => m.CreateHouseDesignPageModule
      ),
  },
  {
    path: 'edit-house/:id',
    loadChildren: () =>
      import('./edit-house-design/edit-house-design.module').then(
        (m) => m.EditHouseDesignPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
