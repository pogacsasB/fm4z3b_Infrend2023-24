import { Controller } from "./base.controller";
import { AppDataSource } from "../data-source";
import { Patient } from "../entity/Patient";

export class PatientController extends Controller {
    repository = AppDataSource.getRepository(Patient);
}