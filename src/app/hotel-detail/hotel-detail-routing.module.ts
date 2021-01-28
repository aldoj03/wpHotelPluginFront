import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelDetailComponent } from './hotel-detail.component';

const routes: Routes = [{ path: '', component: HotelDetailComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelDetailRoutingModule { }
