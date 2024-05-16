import express from 'express';
import { PatientController } from './controller/patient.controller';
import { PatientHistoryController } from './controller/patient-history.controller';

export function getRouter() {

    const router = express.Router();

    const PController = new PatientController();
    router.get('/patient', PController.getAll);
    router.get('/patient/:id', PController.getOne);
    router.post('/patient', PController.create);
    router.put('/patient', PController.update);
    router.delete('/patient/:id', PController.delete);

    const PHController = new PatientHistoryController();
    router.get('/patient-history', PHController.getAll);
    router.get('/patient-history/:id', PHController.getOne);
    router.get('/patient-history/visits/:id', PHController.getOne);
    router.post('/patient-history', PHController.create);

    return router;
}