import { Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { HistoryFormComponent } from './history-form/history-form.component';

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
        path: 'edit-patient/:id',
        component: PatientListComponent
    },
    {
        path: 'add-history',
        component: HistoryFormComponent
    }
];
