import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PatientHistoryDTO } from '../../../models';
import { PatientHistoryService } from '../services/patienthistory.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-history-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './history-form.component.html',
  styleUrl: './history-form.component.css'
})
export class HistoryFormComponent {
  formBuilder = inject(FormBuilder);
  PHService = inject(PatientHistoryService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  historyForm = this.formBuilder.group<PatientHistoryDTO>({
    visitId: 0,
    vizitEve: 0,
    beteg: 0,
    diagnozis: '',
    gyogyszerek: '',
    leletek: ''
  });

  isNewHistory = true;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.isNewHistory = false;
      this.PHService.getOne(id).subscribe({
        next: (history) => this.historyForm.setValue(history),
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  savePatient() {
    const user = this.historyForm.value as PatientHistoryDTO;

    if (this.isNewHistory) {
      this.PHService.create(user).subscribe({
        next: (HistoryCreated) => {
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    else {
      this.PHService.update(user).subscribe({
        next: (PCreated) => {
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    
  }
}
