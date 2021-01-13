import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsDashboardComponent } from './hotels-dashboard/hotels-dashboard.component';

const routes: Routes = [
  { path: '', loadChildren: () => import('./hotels-dashboard/hotels-dahsboard.module').then(m => m.HotelsDahsboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }