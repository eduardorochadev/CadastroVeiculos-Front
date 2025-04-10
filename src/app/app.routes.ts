import { Routes } from '@angular/router';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleDetailComponent } from './vehicle-detail/vehicle-detail.component';

export const routes: Routes = [
    { path: '', component: VehicleListComponent }, // Rota para a listagem de veículos (página inicial)
  { path: 'add', component: VehicleFormComponent }, // Rota para adicionar um novo veículo
  { path: 'edit/:id', component: VehicleFormComponent }, // Rota para editar um veículo existente (o ':id' é um parâmetro)
  { path: 'detail/:id', component: VehicleDetailComponent }, // Rota para detalhes de um veículo (opcional)
  { path: '**', redirectTo: '', pathMatch: 'full' } // Rota curinga para redirecionar para a página inicial em caso de rota não encontrada
];
