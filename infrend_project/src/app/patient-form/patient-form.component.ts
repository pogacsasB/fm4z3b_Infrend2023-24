import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { PatientDTO } from '../../../models';
import { PatientService } from '../services/patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './patient-form.component.html',
  styleUrl: './patient-form.component.css'
})

export class PatientFormComponent {
  formBuilder = inject(FormBuilder);
  PService = inject(PatientService);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  patientForm = this.formBuilder.group<PatientDTO>({
    id: 0,
    nev: '',
    szul_ev: 0,
    taj: 0,
    nem: ''
  });

  isNewPatient = true;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];

    if (id) {
      this.isNewPatient = false;
      this.PService.getOne(id).subscribe({
        next: (patient) => this.patientForm.setValue(patient),
        error: (err) => {
          console.error(err);
        }
      });
    }
  }

  savePatient() {
    const patient = this.patientForm.value as PatientDTO;

    if (this.isNewPatient) {
      this.PService.create(patient).subscribe({
        next: (patientCreated) => {
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    else {
      this.PService.update(patient).subscribe({
        next: (patientCreated) => {
          this.router.navigateByUrl('/');
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
    
  }
}
