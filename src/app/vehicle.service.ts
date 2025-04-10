import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehicle } from '../app/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  private apiUrl = 'http://localhost:3000/api/veiculos';

  constructor(private http: HttpClient) { }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(this.apiUrl);
  }

  getVehicleById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/${id}`);
  }

  createVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.apiUrl, vehicle);
  }

  updateVehicle(id: number, vehicle: Vehicle): Observable<Vehicle> {
    return this.http.put<Vehicle>(`${this.apiUrl}/${id}`, vehicle);
  }

  deleteVehicle(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}