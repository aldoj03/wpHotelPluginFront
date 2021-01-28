import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'index.php',
    loadChildren: () => import('./hotels-dashboard/hotels-dahsboard.module').
      then(m => m.HotelsDahsboardModule),
       pathMatch: 'full'
  },

  {
    path: 'index.php/hotel',
    loadChildren: () => import('./hotel-detail/hotel-detail.module').
      then(m => m.HotelDetailModule),

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }