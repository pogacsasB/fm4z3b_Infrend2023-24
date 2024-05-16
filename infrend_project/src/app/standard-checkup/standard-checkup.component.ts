import { Component, inject } from '@angular/core';
import { PatientHistoryDTO } from '../../../models';
import { PatientDTO } from '../../../models';
import { PatientHistoryService } from '../services/patienthistory.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-history-check',
  standalone: true,
  imports: [],
  templateUrl: './standard-checkup.component.html',
  styleUrl: './standard-checkup.component.css'
})
export class StandardCheckupComponent {
  
  histories: PatientHistoryDTO[] = [];

  PService = inject(PatientService);

  PHService = inject(PatientHistoryService);

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

    this.findMax();
  }

  findMax(): void {
    for (const history of this.histories) {
      if (history.vizitEve > this.max) {
        this.max = history.vizitEve;
      }
    }
  }

}
