import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsDahsboardModule } from './hotels-dahsboard.module';
import { HotelsDashboardComponent } from './hotels-dashboard.component';


const routes: Routes = [{
  path: '',
  component: HotelsDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsDahsboardRoutingModule { }
