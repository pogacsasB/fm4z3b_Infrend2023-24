import { Component, inject } from '@angular/core';
import { PatientHistoryDTO } from '../../../models';
import { PatientDTO } from '../../../models';
import { PatientHistoryService } from '../services/patienthistory.service';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-mammo-checkup',
  standalone: true,
  imports: [],
  templateUrl: './mammo-checkup.component.html',
  styleUrl: './mammo-checkup.component.css'
})
export class MammoCheckupComponent {
  
  histories: PatientHistoryDTO[] = [];

  PService = inject(PatientService);

  PHService = inject(PatientHistoryService);

  patients: PatientDTO[] = [];

  maxMap: { [patientId: number]: number } = {};

  checkup: string = "mammográfiai vizsgálat";

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
    this.calculateMaxVizitEvForEachPatient();
  }

  calculateMaxVizitEvForEachPatient(): void {
    for (const patient of this.patients) {
      this.maxMap[patient.id] = 0;
    }

    for (const history of this.histories) {
      const currentMax = this.maxMap[history.patientId];
      if (history.vizitEve > currentMax && history.diagnozis == this.checkup) {
        this.maxMap[history.patientId] = history.vizitEve;
      }
    }
  }

}