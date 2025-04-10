import { Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

export const routes: Routes = [
    { path: '', component: VehicleListComponent }, 
  { path: 'add', component: VehicleFormComponent }, 
  { path: 'edit/:id', component: VehicleFormComponent }, 
  { path: 'detail/:id', component: VehicleDetailComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];
