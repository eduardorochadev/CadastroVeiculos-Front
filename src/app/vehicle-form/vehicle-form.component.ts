import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Vehicle } from '../vehicle.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehicle-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule ],
  templateUrl: './vehicle-form.component.html',
  styleUrl: './vehicle-form.component.scss'
})
export class VehicleFormComponent implements OnInit {
  vehicleForm: FormGroup;
  vehicleId: number | null = null;
  isEditMode = false;

  constructor(
    private fb: FormBuilder,
    private vehicleService: VehicleService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.vehicleForm = this.fb.group({
      placa: ['', Validators.required],
      chassi: ['', Validators.required],
      renavam: ['', Validators.required],
      modelo: ['', Validators.required],
      marca: ['', Validators.required],
      ano: ['', [Validators.required, Validators.min(1900), Validators.max(new Date().getFullYear())]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.vehicleId = params['id'];
      if (this.vehicleId) {
        this.isEditMode = true;
        this.loadVehicleDetails(this.vehicleId);
      }
    });
  }

  loadVehicleDetails(id: number): void {
    this.vehicleService.getVehicleById(id).subscribe(
      (vehicle) => {
        this.vehicleForm.patchValue(vehicle);
      },
      (error) => {
        console.error('Erro ao carregar detalhes do veículo:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.vehicleForm.valid) {
      const vehicle: Vehicle = this.vehicleForm.value;
      if (this.isEditMode && this.vehicleId) {
        this.vehicleService.updateVehicle(this.vehicleId, vehicle).subscribe(
          () => {
            this.router.navigate(['/']);
          },
          (error) => {
            console.error('Erro ao atualizar veículo:', error);
          }
        );
      } else {
        this.vehicleService.createVehicle(vehicle).subscribe(
          () => {
            this.router.navigate(['/']);
          },
          (error) => {
            console.error('Erro ao criar veículo:', error);
          }
        );
      }
    }
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }
}
