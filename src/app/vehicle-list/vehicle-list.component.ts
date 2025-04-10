import { Component, OnInit } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { Router } from '@angular/router';
import { Vehicle } from '../vehicle.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vehicle-list.component.html',
  styleUrl: './vehicle-list.component.scss'
})
export class VehicleListComponent implements OnInit {
  vehicles: Vehicle[] = [];

  constructor(private vehicleService: VehicleService, private router: Router) { }

  ngOnInit(): void {
    this.loadVehicles();
  }

  loadVehicles(): void {
    this.vehicleService.getAllVehicles().subscribe(
      (vehicles) => {
        this.vehicles = vehicles;
      },
      (error) => {
        console.error('Erro ao carregar veículos:', error);
      }
    );
  }

  editVehicle(id: number): void {
    this.router.navigate(['/edit', id]);
  }

  deleteVehicle(id: number): void {
    if (confirm('Tem certeza que deseja excluir este veículo?')) {
      this.vehicleService.deleteVehicle(id).subscribe(
        () => {
          this.loadVehicles(); // Recarrega a lista após a exclusão
        },
        (error) => {
          console.error('Erro ao excluir veículo:', error);
        }
      );
    }
  }

  addVehicle(): void {
    this.router.navigate(['/add']);
  }
}
