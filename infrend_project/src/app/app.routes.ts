import { Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { HistoryListComponent } from './history-list/history-list.component';
import { HistoryFormComponent } from './history-form/history-form.component';
import { StandardCheckupComponent } from './standard-checkup/standard-checkup.component';

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
        component: PatientFormComponent
    },
    {
        path: 'patient-history',
        component: HistoryListComponent
    },
    {
        path: 'add-history',
        component: HistoryFormComponent
    },
    {
        path: 'patient-history/visits/:id',
        component: HistoryListComponent
    },
    {
        path: 'standard',
        component: StandardCheckupComponent
    }
]
