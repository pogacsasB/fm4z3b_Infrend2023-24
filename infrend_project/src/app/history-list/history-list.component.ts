import { Component, OnInit, inject } from '@angular/core';
import { PatientHistoryDTO } from '../../../models';
import { Router } from '@angular/router';
import { PatientHistoryService } from '../services/patienthistory.service';

@Component({
  selector: 'app-history-list',
  standalone: true,
  imports: [],
  templateUrl: './history-list.component.html',
  styleUrl: './history-list.component.css'
})
export class HistoryListComponent {
  PHService = inject(PatientHistoryService);

  router = inject(Router);

  histories: PatientHistoryDTO[] = [];
  
  ngOnInit(): void {
    this.PHService.getAll().subscribe({
      next: (histories) => this.histories = histories,
      error: (err) => console.error(err)
    });
  }

  goToHistoryForm(id: number) {
    this.router.navigate([ 'edit-history', id ]);
  }

  deleteHistory(history: PatientHistoryDTO) {
    this.PHService.delete(history.visitId).subscribe({
      next: () => {
        const index = this.histories.indexOf(history);
        if (index > -1) {
          this.histories.splice(index, 1);
        }
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
