import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { PatientHistoryDTO } from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class PatientHistoryService {

  http = inject(HttpClient);

  getAll() {
    return this.http.get<PatientHistoryDTO[]>('/api/patient-history');
  }

  getOne(id: number) {
    return this.http.get<PatientHistoryDTO>('/api/patient-history/' + id);    
  }

  create(history: PatientHistoryDTO) {
    return this.http.post<PatientHistoryDTO>('/api/patient-history', history);
  }

  update(history: PatientHistoryDTO) {
    return this.http.put<PatientHistoryDTO>('/api/patient-history', history);
  }

  delete(visitId: number) {
    return this.http.delete('/api/patient-history/' + visitId); 
  }

  getHistoryOfPatient(id: number) {
    return this.http.get<PatientHistoryDTO[]>('/api/patient-history/visits/' + id);
  }
}
