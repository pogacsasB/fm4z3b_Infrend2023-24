import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PatientDTO } from '../../../models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private apiUrl = 'api/patients'; 
  
  http = inject(HttpClient);

  getAll() {
    return this.http.get<PatientDTO[]>('/api/patient');    
  }

  getOne(id: number) {
    return this.http.get<PatientDTO>('/api/patient/' + id);    
  }

  create(patient: PatientDTO) {
    return this.http.post<PatientDTO>('/api/patient', patient);
  }

  update(patient: PatientDTO) {
    return this.http.put<PatientDTO>('/api/patient', patient);
  }

  delete(id: number) {
    return this.http.delete('/api/patient/' + id); 
  }

  getById(patientId: number): Observable<PatientDTO> {
    const url = `${this.apiUrl}/${patientId}`;
    return this.http.get<PatientDTO>(url);
  }
}
