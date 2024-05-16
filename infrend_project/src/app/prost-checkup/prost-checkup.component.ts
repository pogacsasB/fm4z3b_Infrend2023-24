import { Component, inject } from '@angular/core';
import { PatientHistoryDTO } from '../../../models';
import { PatientDTO } from '../../../models';
import { PatientHistoryService } from '../services/patienthistory.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-prost-checkup',
  standalone: true,
  imports: [],
  templateUrl: './prost-checkup.component.html',
  styleUrl: './prost-checkup.component.css'
})
export class ProstCheckupComponent {
  
  histories: PatientHistoryDTO[] = [];

  PService = inject(PatientService);

  PHService = inject(PatientHistoryService);

  patients: PatientDTO[] = [];

  max!: number[];

  trying: number = 0;

  checkup: string = "prosztata vizsgálat";

  ngOnInit(): void {
    this.PHService.getAll().subscribe({
      next: (histories) =>
        this.histories = histories,
      error: (err) => console.error(err),
      complete: () =>{
        this.calculateMaxVizitEvForEachPatient();
      }
    });
    this.PService.getAll().subscribe({
      next: (patients) => this.patients = patients,
      error: (err) => console.error(err)
    });
  }

  calculateMaxVizitEvForEachPatient(): void {
    for (const history of this.histories) {
      this.max[history.patientId] = 0;
    }

    for (const history of this.histories) {
      if(this.max[history.patientId] < history.vizitEve) {
        this.max[history.patientId] = history.vizitEve;
      }
    }
  }

}
