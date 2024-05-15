import { Component, OnInit, inject } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { PatientDTO } from '../../../models';
import { Router } from '@angular/router';
import { PatientHistoryService } from '../services/patienthistory.service';

@Component({
  selector: 'app-patient-list',
  standalone: true,
  imports: [],
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent {

  PService = inject(PatientService);

  PHService = inject(PatientHistoryService);

  router = inject(Router);

  patients: PatientDTO[] = [];
  
  ngOnInit(): void {
    this.PService.getAll().subscribe({
      next: (patients) => this.patients = patients,
      error: (err) => console.error(err)
    });
  }

  goToPatientForm(id: number) {
    this.router.navigate([ 'edit-patient', id ]);
  }

  deletePatient(patient: PatientDTO) {
    this.PService.delete(patient.id).subscribe({
      next: () => {
        const index = this.patients.indexOf(patient);
        if (index > -1) {
          this.patients.splice(index, 1);
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  getHistoryOfPatient(id: number) {
    this.PHService.getHistoryOfPatient(id)
      .subscribe(history => console.log(history));
  }
}
