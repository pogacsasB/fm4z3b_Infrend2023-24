import { Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { HistoryListComponent } from './history-list/history-list.component';

export const routes: Routes = [
    {
        path: '',
        component: PatientListComponent
    },
    {
        path: 'add-patient',
        component: PatientFormComponent
    },
    {
        path: 'patient-history',
        component: HistoryListComponent
    }
]
