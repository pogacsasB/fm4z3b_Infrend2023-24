import { Component, inject } from '@angular/core';
import { PatientHistoryDTO } from '../../../models';
import { PatientDTO } from '../../../models';
import { Router } from '@angular/router';
import { PatientHistoryService } from '../services/patienthistory.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-history-check',
  standalone: true,
  imports: [],
  templateUrl: './history-check.component.html',
  styleUrl: './history-check.component.css'
})
export class HistoryCheckComponent {
  
  histories: PatientHistoryDTO[] = [];

  PService = inject(PatientService);

  PHService = inject(PatientHistoryService);

  router = inject(Router);

  patients: PatientDTO[] = [];

  max: number = 0;

  ngOnInit(): void {
    this.PHService.getAll().subscribe({
      next: (histories) =>
        this.histories = histories,
      error: (err) => console.error(err)
    });
    this.PService.getAll().subscribe({
      next: (patients) => this.patients = patients,
      error: (err) => console.error(err)
    });
  }

}
