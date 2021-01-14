import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelsDashboardComponent } from './hotels-dashboard/hotels-dashboard.component';

const routes: Routes = [
  { path: 'index.php', loadChildren: () => import('./hotels-dashboard/hotels-dahsboard.module').then(m => m.HotelsDahsboardModule), pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }