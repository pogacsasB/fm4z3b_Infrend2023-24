import { Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
//import { UserFormComponent } from './user-form/user-form.component';
//import { TransactionFormComponent } from './transaction-form/transaction-form.component';

export const routes: Routes = [
    {
        path: '',
        component: PatientListComponent
    },
    {
        path: 'add-user',
        component: PatientListComponent
    },
    {
        path: 'edit-user/:id',
        component: PatientListComponent
    },
    {
        path: 'add-transaction',
        component: PatientListComponent
    }
];
