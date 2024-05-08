import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PatientDTO } from '../../../models';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css'
})
export class PatientFormComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  PService = inject(PatientService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  patientForm = this.formBuilder.group<PatientDTO>({
    id: 0,
    nev: '',
    szul_datum: '',
    taj: 0,
    kortortenet: null
  });

  isNewPatient = true;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.isNewPatient = false;
      this.PService.getOne(id).subscribe({
        next: (patient) => this.patientForm.setValue(patient),
        error: (err) => {
          // TODO: notification
          console.error(err);
        }
      });
    }
  }

  savePatient() {
    const user = this.patientForm.value as PatientDTO;

    if (this.isNewPatient) {
      this.PService.create(user).subscribe({
        next: (patientCreated) => {
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    else {
      this.PService.update(user).subscribe({
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

