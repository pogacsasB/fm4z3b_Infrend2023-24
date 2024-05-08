import { Patient } from "../server/src/entity/Patient"
import { PatientHistory } from "../server/src/entity/PatientHistory"

export interface PatientDTO{
    id: number
    taj: number
    nev: string
    szul_datim: Date
    History: PatientHistory[]
}

export interface PatientHistoryDTO{
    visitId: number
    patient: Patient
    diagnozis: string
    gyogyszerek: string
    leletek: string
}