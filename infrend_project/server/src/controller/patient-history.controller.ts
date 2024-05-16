import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { PatientHistory } from "../entity/PatientHistory";

export class PatientHistoryController extends Controller {
    repository = AppDataSource.getRepository(PatientHistory);

    create = async (req, res) => {
        try {
            const entity = this.repository.create(req.body as object);
            delete entity.visitId;

            const savedEntity = await this.repository.save(entity);
            res.json(savedEntity);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    HistoryOfPatient = async (req, res) => {
        try {
            const patientId = req.params.id;

            const transactions = await this.repository.find({
                where: {
                    beteg: { id: patientId }
                }
            });

            res.json(transactions);
        } catch (err) {
            this.handleError(res, err);
        }
    };
}